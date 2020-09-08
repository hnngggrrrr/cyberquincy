const MapParser = require('../parser/map-parser.js');
const GoogleSheetsHelper = require('../helpers/google-sheets.js');

const MIN_ROW = 1;
const MAX_ROW = 100;

const COLS = {
    'TWO': {
        MAP: 'B',
        TOWERS: ['D', 'F'],
        UPGRADES: 'H',
        VERSION: 'J',
        DATE: 'K',
        PERSON: 'L',
        LINK: 'N',
        CURRENT: 'O',
    },
    'THREE': {
        MAP: 'B',
        TOWERS: ['D', 'F', 'H'],
        UPGRADES: 'J',
        VERSION: 'L',
        DATE: 'M',
        PERSON: 'N',
        LINK: 'P',
        CURRENT: 'Q',
    },
    'FOUR': {
        MAP: 'B',
        TOWERS: ['D', 'F', 'H', 'J'],
        UPGRADES: 'L',
        VERSION: 'O',
        DATE: 'P',
        PERSON: 'Q',
        LINK: 'S',
        CURRENT: 'T',
    },
    'FIVE': {
        MAP: 'B',
        TOWERS: ['D', 'F', 'H', 'J', 'L'],
        UPGRADES: 'N',
        VERSION: 'Q',
        DATE: 'R',
        PERSON: 'S',
        LINK: 'U',
        CURRENT: 'V',
    },
    'SIX+': {
        MAP: 'B',
        AMOUNT: 'D',
        VERSION: 'E',
        DATE: 'F',
        PERSON: 'G',
        LINK: 'I',
        CURRENT: 'J',
    }
}

HEAVY_CHECK_MARK = String.fromCharCode(10004) + String.fromCharCode(65039);
WHITE_HEAVY_CHECK_MARK = String.fromCharCode(9989);

module.exports = {
    name: 'ltc',

    execute(message, args) {
        if (args.length == 0 || (args.length == 1 && args[0] == 'help')) {
            return module.exports.helpMessage(message);
        }

        const parsed = CommandParser.parse(args, new MapParser());
        
        if (parsed.hasErrors()) {
            return module.exports.errorMessage(message, parsed.parsingErrors);
        }
        
        var btd6_map = parsed.map;

        async function displayLTC(btd6_map) {
            const sheet = GoogleSheetsHelper.sheetByName(Btd6Index, 'ltc');
            
            // Load the column containing the different maps
            await sheet.loadCells(
                `${TWO_COLS.MAP}${MIN_ROW}:${TWO_COLS.MAP}${MAX_ROW}`
            ); // loads all possible cells with map

            // The row where the queried map is found
            var entryRow = null;

            // Search for the row in all "possible" rows
            for (let row = 1; row <= MAX_ROW; row++) {
                var mapCandidate = sheet.getCellByA1(`${COLS.MAP}${row}`).value;
                // input is "in_the_loop" but needs to be compared to "In The Loop"
                if (
                    mapCandidate &&
                    mapCandidate.toLowerCase().replace(' ', '_') === btd6_map
                ) {
                    entryRow = row;
                    break;
                }
            }

            colset = getColumnSet(entryRow);

            // Load the row where the map was found
            await sheet.loadCells(
                `${colset.MAP}${entryRow}:${colset.CURRENT}${entryRow}`
            );

            // Assign each value to be discord-embedded in a simple default way
            values = {};
            for (key in colset) {
                if (key == 'TOWERS' || key == 'UPGRADES') continue; // Handle next
                values[key] = sheet.getCellByA1(
                    `${colset[key]}${entryRow}`
                ).value;
            }

            for (var i = 0; i < )

            // Special formatting for date (get formattedValue instead)
            dateCell = sheet.getCellByA1(`${colset.DATE}${entryRow}`);
            values.DATE = dateCell.formattedValue;

            // Special handling for link (use hyperlink to cleverly embed in discord)
            linkCell = sheet.getCellByA1(`${colset.LINK}${entryRow}`);
            values.LINK = `[${linkCell.value}](${linkCell.hyperlink})`;

            // Special handling for current
            // (heavy checkmark doesn't format, use white heavy checkmark instead)
            if (values.CURRENT === HEAVY_CHECK_MARK) {
                values.CURRENT = WHITE_HEAVY_CHECK_MARK;
            }

            // Embed and send the message
            var challengeEmbed = new Discord.MessageEmbed()
                .setTitle(`${values.MAP} LCC Combo`)
                .setColor(colours['cyber']);

            for (field in values) {
                challengeEmbed = challengeEmbed.addField(
                    h.toTitleCase(field),
                    values[field],
                    true
                );
            }

            message.channel.send(challengeEmbed);
        }

        displayLTC(btd6_map);
    },

    helpMessage(message) {
        let helpEmbed = new Discord.MessageEmbed()
            .setTitle('`q!ltc` HELP')
            .addField(
                '`q!ltc <map>`',
                'The BTD6 Index entry for Least Tower CHIMPS for the queried map'
            )
            .addField(
                'Valid `<map>` values',
                '`logs`, `cubism`, `pen`, `#ouch`, ...'
            )
            .addField('Example', '`q!ltc cuddles`');

        return message.channel.send(helpEmbed);
    },

    errorMessage(message, parsingErrors) {
        let errorEmbed = new Discord.MessageEmbed()
            .setTitle('ERROR')
            .addField(
                'Likely Cause(s)',
                parsingErrors.map(msg => ` • ${msg}`).join('\n')
            )
            .addField('Type `q!ltc` for help', ':)')
            .setColor(colours['orange']);

        return message.channel.send(errorEmbed);
    },
};

function getColumnSet(mapRow) {
    headerRegex = new RegExp(`(${Object.keys(COLS).join('|')}) Towers`, i);

    candidateHeaderRow = mapRow - 1;
    while(true) {
        let candidateHeaderCell = sheet.getCellByA1(`${TWO_COLS.MAP}${candidateHeaderRow}`);
        console.log(candidateHeaderCell.value);
        const match = candidateHeaderCell.value.match(headerRegex);

        if (match) {
            console.log(match[1].toUpperCase())
            return COLS[match[1].toUpperCase()];
        }
        candidateHeaderRow -= 1;
    }
}
