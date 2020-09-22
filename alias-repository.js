const filepath = require('filepath');
const AliasError = require('./exceptions/alias-error.js');

class AliasRepository extends Array {
    ////////////////////////////////////////////////////
    // Configuration/Initialization
    ////////////////////////////////////////////////////

    asyncAliasFiles() {
        // {source_directory: handling function}
        const SPECIAL_HANDLING_CASES = {
            './aliases/towers': this.loadTowerAliasFile,
        };

        (async () => {
            for await (const absolutePath of Files.getFiles('./aliases', [
                '.json',
            ])) {
                let fpath = filepath.create(absolutePath);
                let tokens = fpath.split();

                let relPath =
                    './' +
                    tokens
                        .slice(tokens.findIndex((i) => i === 'aliases'))
                        .join('/');

                // Determine the function that will handle the alias file

                // Default
                let handlingFunction = this.loadAliasFile;

                // See if the file has a special handler
                for (const specialRelPath in SPECIAL_HANDLING_CASES) {
                    if (relPath.startsWith(specialRelPath)) {
                        handlingFunction = SPECIAL_HANDLING_CASES[
                            specialRelPath
                        ];
                        break;
                    }
                }

                handlingFunction.call(this, relPath);
            }
        })();
    }

    // Default way to load in an alias file
    loadAliasFile(f) {
        const nextAliases = require(f);

        for (const canonical in nextAliases) {
            const nextAliasGroup = {
                canonical: canonical,
                aliases: nextAliases[canonical],
                sourcefile: f,
            };
            this.addAliasGroup(nextAliasGroup);
        }
    }

    // This handling is a bit more complex because there is implicit
    // meaning to the tower alias keys
    loadTowerAliasFile(f) {
        const towerUpgrades = require(f);

        const fpath = filepath.create(f);
        let baseName = fpath.split().slice(-1)[0].split('.')[0];

        for (const upgrade in towerUpgrades) {
            // xyz upgrade is meant to represent the tower as a whole ignoring upgrades
            // which is not exactly synonymous with the 000 tower.
            // The canonical form of the xyz tower is tower_name
            // whereas the canonical form of a specific upgrade is tower_name#ddd where d=digit
            const canonical =
                upgrade == 'xyz' ? `${baseName}` : `${baseName}#${upgrade}`;
            const nextAliasGroup = {
                canonical: canonical,
                aliases: towerUpgrades[upgrade],
                sourcefile: f,
            };
            this.addAliasGroup(nextAliasGroup);

            // Hack to add appropriate base tower entry
            if (upgrade == 'xyz') {
                const baseTowerAliasGroup = {
                    canonical: `${baseName}#222`,
                    aliases: [baseName].concat(towerUpgrades['xyz']).map(al => `base_${al}`),
                    sourcefile: f,
                }
                this.addAliasGroup(baseTowerAliasGroup);
            }
        }
    }

    // Ensure that none of the aliases clash before adding it in
    addAliasGroup(ag) {
        try {
            ag.aliases = ag.aliases.map(al => this.permuteSeparators(al)).flat()
            this.preventSharedAliases(ag);
        } catch (e) {
            if (e instanceof AliasError) {
                console.log(e.message);
            } else {
                throw e;
            }
        }
        this.push(ag);
    }

    // If "spike-o-pult", adds "spike_o_pult", "spike_o-pult", "spike-o_pult", "spike_opult", etc.
    permuteSeparators(al) {
        const SEPARATOR_TOKENS = ["_", "-"]
        const JOIN_TOKENS = ["_", "-", ""]

        const tokens = al.split(new RegExp(SEPARATOR_TOKENS.join('|')))
        let aliases = [tokens[0]]        

        for (var i = 1; i < tokens.length; i++) {
            let new_aliases = []
            for (var j = 0; j < aliases.length; j++) {
                for (var k = 0; k < JOIN_TOKENS.length; k++) {
                    new_aliases.push(
                        aliases[j] + JOIN_TOKENS[k] + tokens[i]
                    );
                }
            }
            aliases = [...new_aliases];
        }


        delete aliases[aliases.findIndex(a => a == al)]
        return [al].concat(aliases);
    }

    // Checks canonical + aliases against all other alias groups' canonical + aliases
    // and expects to find 0 matches between each set of aliases (alias set)
    preventSharedAliases(nextAliasGroup) {
        for (let i = 0; i < this.length; i++) {
            const existingAliasGroup = this[i];

            let nextAliasSet = nextAliasGroup.aliases.concat(
                nextAliasGroup.canonical
            );
            let existingAliasSet = existingAliasGroup.aliases.concat(
                existingAliasGroup.canonical
            );

            let sharedAliasMembers = nextAliasSet.filter((aliasMember) =>
                existingAliasSet.includes(aliasMember)
            );

            if (sharedAliasMembers.length > 0) {
                throw new AliasError(
                    `Aliases members [${sharedAliasMembers.map(
                        (a) => `"${a}"`
                    )}] clash among existing group ` +
                        `${this.formatAliasGroup(
                            existingAliasGroup
                        )} and new group ` +
                        `${this.formatAliasGroup(nextAliasGroup)}`
                );
            }
        }
    }

    formatAliasGroup(ag) {
        return JSON.stringify(ag, undefined, 2);
    }

    ////////////////////////////////////////////////////
    // Access
    ////////////////////////////////////////////////////

    // Converts a member of an alias group to its canonical form
    getCanonicalForm(aliasMember) {
        let ag = this.getAliasGroup(aliasMember);
        if (ag) return ag.canonical;
        else return null;
    }

    // Returns a single key-values pair alias group, `{canonical: [aliases]}`,
    // in which aliasMember is found
    getAliasGroup(aliasMember) {
        let ags = this.filter(
            (ag) =>
                ag.canonical == aliasMember || ag.aliases.includes(aliasMember)
        );
        if (!ags || ags.length == 0) {
            return null;
        } else if (ags.length == 1) {
            return ags[0];
        } else {
            throw (
                `Multiple alises groups found sharing a given alias member` +
                `(something went horribly wrong): ${ags.map(
                    (ag) => ag.canonical
                )}`
            );
        }
    }

    // Returns a flat list of aliases semantically equivalent to `aliasMember`
    getAliasSet(aliasMember) {
        aliasMember = aliasMember.toLowerCase();
        let ag = this.getAliasGroup(aliasMember);
        if (ag) return [ag.canonical].concat(ag.aliases);
        else return null;
    }

    getAliasGroupsFromSameFileAs(aliasMember) {
        aliasMember = aliasMember.toLowerCase();
        let ag = this.getAliasGroup(aliasMember);
        let result = this.filter(
            (otherAliasGroup) => otherAliasGroup.sourcefile === ag.sourcefile
        );
        return result;
    }

    ////////////////////////////////////////////////////
    // Expedited Access
    ////////////////////////////////////////////////////
    allMaps() {
        const easyMaps = this.getAliasGroupsFromSameFileAs('LOGS');
        const intermediateMaps = this.getAliasGroupsFromSameFileAs('HAUNTED');
        const hardMaps = this.getAliasGroupsFromSameFileAs('CORNFIELD');
        const expertMaps = this.getAliasGroupsFromSameFileAs('INFERNAL');

        const allMaps = easyMaps
            .concat(intermediateMaps)
            .concat(hardMaps)
            .concat(expertMaps);

        return allMaps.map((ag) => ag.canonical);
    }

    allMapDifficulties() {
        const map_difficulties = this.getAliasGroupsFromSameFileAs(
            'INTERMEDIATE'
        );

        return map_difficulties.map((ag) => ag.canonical);
    }

    allDifficulties() {
        const difficulties = this.getAliasGroupsFromSameFileAs('MEDIUM');

        return difficulties.map((ag) => ag.canonical).concat('impoppable');
    }

    allModes() {
        const modes = this.getAliasGroupsFromSameFileAs('STANDARD');

        return modes.map((ag) => ag.canonical);
    }

    allTowerUpgrades() {
        const TOWER_CANONICAL_REGEX = /[a-z]#\d\d\d/i;

        let upgrades = [];
        for (let i = 0; i < this.length; i++) {
            const canonical = this[i].canonical;
            if (TOWER_CANONICAL_REGEX.test(canonical)) {
                upgrades.push(canonical);
            }
        }
        return upgrades;
    }

    // Gets all 0-0-0 tower names
    allTowers() {
        return this.filter(ag => ag.canonical.endsWith('#300'))
                   .map(ag => ag.canonical.slice(0, -4))
    }

    allHeroes() {
        const heroes = this.getAliasGroupsFromSameFileAs('EZILI');

        return heroes.map((ag) => ag.canonical);
    }
    allBloons() {
        const bloons = this.getAliasGroupsFromSameFileAs('RED');
        return bloons.map((ag) => ag.canonical);
    }
    towerUpgradeToIndexNormalForm(upgrade) {
        const index_normal_unformatted = this.getAliasSet(upgrade)[1];
        return this.toIndexNormalForm(index_normal_unformatted);
    }

    toIndexNormalForm(canonical) {
        return canonical
            .split('_')
            .map((tk) => h.toTitleCase(tk))
            .join(' ');
    }
};

module.exports = AliasRepository
