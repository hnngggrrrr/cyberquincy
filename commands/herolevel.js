const AnyOrderParser = require('../parser/any-order-parser.js');
const OptionalParser = require('../parser/optional-parser.js');

const HeroParser = require('../parser/hero-parser.js');
const RoundParser = require('../parser/round-parser');
const MapDifficultyParser = require('../parser/map-difficulty-parser.js');

const ReactionChain = require('../reactor/reaction_chain');
const EmojiReactor = require('../reactor/emoji_reactor');
const SingleTextParser = require('../reactor/single_text_parser');

function execute(message, args) {
    if (args.length == 1 && args[0] == 'help') {
        return message.channel.send(
            'Type `q!herolevel` and follow the instructions'
        );
    }

    const parsed = CommandParser.parse(
        args,

        // Make any of the available arguments optional to add in any order in the command args
        // Arguments that aren't entered will be gathered through the react-loop
        new AnyOrderParser(
            new OptionalParser(new HeroParser()),
            new OptionalParser(new RoundParser('ALL')),
            new OptionalParser(new MapDifficultyParser())
        )
    );

    if (parsed.hasErrors()) {
        return errorMessage(message, parsed.parsingErrors);
    }

    // Start react loop to collect the data that the user didn't provide at command-time
    ReactionChain.process(
        message,
        (message, results) => displayHeroLevels(message, results),
        new EmojiReactor('hero', Guilds.EMOJIS_SERVER, parsed.hero),
        new SingleTextParser(new RoundParser('ALL'), 'starting', parsed.round),
        new EmojiReactor(
            'map_difficulty',
            Guilds.EMOJIS_SERVER,
            parsed.map_difficulty
        )
    );
}

function errorMessage(message, parsingErrors) {
    let errorEmbed = new Discord.MessageEmbed()
        .setTitle('ERROR')
        .addField(
            'Likely Cause(s)',
            parsingErrors.map((msg) => ` • ${msg}`).join('\n')
        )
        .addField('Type `q!herolevel help` for help', '\u200b')
        .setColor(colours['orange']);

    return message.channel.send(errorEmbed);
}

function displayHeroLevels(message, results) {
    heroLevels = calculateHeroLevels(
        results.hero,
        results.starting,
        results.map_difficulty
    );
    let res = table(h.range(1, 20), heroLevels.slice(1));
    const embed = new Discord.MessageEmbed()
        .setTitle(`${h.toTitleCase(results.hero)} Leveling Chart`)
        .setDescription(
            `Placed: **R${results.starting}**\nMaps: **${h.toTitleCase(
                results.map_difficulty
            )}**`
        )
        .addField('\u200b', `${res}`)
        .setColor(colours['cyber']);

    message.channel.send(embed);
}

// Builds up an array for each level with elements representing rounds 0 to 100 inclusive
// starting with level 1, which is a special case, and moving from 2 all the way through 20.
// This needs to be done because the level 2 array depends on the level 1 array,
// the level 3 array depends on 2, etc.
//
// Once these level arrays are built up, they're collapsed each into a single value that is
// the lowest index (which represents the round) where the value (which represents the cost the level up)
// is 0 or less, meaning the level has already been reached.
//
// These calculations are super analogous to those in the BTD6 Index written in VBA
function calculateHeroLevels(hero, startingRound, mapDifficulty) {
    heroSpecificLevelingMultiplier =
        Constants.HERO_LEVELING_MODIFIERS[hero.toUpperCase()];
    mapSpecificLevelingMultiplier =
        Constants.HERO_LEVELING_MAP_DIFFICULTY_MODIFIERS[
            mapDifficulty.toUpperCase()
        ];

    roundVsLevelMatrix = [[]]; // Level 0 instantiated
    roundVsLevelMatrix.push(
        fillLevel1CostArray(startingRound, mapSpecificLevelingMultiplier)
    );

    for (level = 2; level <= 20; level++) {
        levelCostArray = [Infinity]; // round 0
        for (round = 1; round <= 100; round++) {
            totalCostToGetLevel =
                Constants.BASE_HERO_COST_TO_GET_LEVEL[level] *
                heroSpecificLevelingMultiplier;
            levelCostArray.push(
                totalCostToGetLevel + roundVsLevelMatrix[level - 1][round]
            );
        }
        roundVsLevelMatrix.push(levelCostArray);
    }

    roundForLevelUpTo = [0, startingRound].concat(
        // Levels 0 and 1
        // Take the levelCostArray for level 2-20...
        roundVsLevelMatrix.slice(2).map((levelCostArray) => {
            // Find the first level at which the cost to level the hero up is 0 or less
            levelOrNotFound = levelCostArray.findIndex((cost) => cost <= 0);
            return levelOrNotFound == -1 ? '>100' : levelOrNotFound;
        })
    );

    return roundForLevelUpTo;
}

function fillLevel1CostArray(startingRound, mapSpecificLevelingMultiplier) {
    baseCost = null;
    if (startingRound <= 21) {
        baseCost = 10 * startingRound * startingRound + 10 * startingRound - 20;
    } else if (startingRound <= 51) {
        baseCost =
            20 * startingRound * startingRound - 400 * startingRound + 4180;
    } else {
        baseCost =
            45 * startingRound * startingRound - 2925 * startingRound + 67930;
    }

    level1CostArray = [Infinity]; // round 0
    level1CostArray.push(
        // round 1
        Math.floor(baseCost * mapSpecificLevelingMultiplier)
    );
    level1CostArray.push(
        //round 2
        Math.floor(level1CostArray[1] - 2 * 20 * mapSpecificLevelingMultiplier)
    );

    level1RoundGroupAddend = null;

    for (round = 3; round <= 100; round++) {
        if (round <= 21) {
            level1RoundGroupAddend = 20;
        } else if (round <= 51) {
            level1RoundGroupAddend = 40;
        } else {
            level1RoundGroupAddend = 90;
        }

        rm1 = level1CostArray[round - 1];
        rm2 = level1CostArray[round - 2];
        mapWeightedDifference = (rm2 - rm1) / mapSpecificLevelingMultiplier;

        level1CostArray.push(
            rm1 -
                (mapWeightedDifference + level1RoundGroupAddend) *
                    mapSpecificLevelingMultiplier
        );
    }

    return level1CostArray;
}

module.exports = {
    name: 'herolevel',
    aliases: ['hl', 'hero', 'her', 'hlvl'],
    execute,
};

function addSpaces(str, max) {
    let diff = max - str.toString().length;

    for (i = 0; i < diff; i++) str += ' ';

    return str;
}

function table(lvl, round) {
    let finalRes = '`level`|`round`\n';
    let i = 0;
    while (i < 20) {
        // for loop doesnt work here due to black arcane magic
        res = '';
        res += `\`${addSpaces(lvl[i], 5)}`;
        res += '|';
        res += `${addSpaces(round[i], 5)}\``;
        console.log(res);
        finalRes += res;
        finalRes += '\n';
        i++;
    }
    return finalRes;
}
