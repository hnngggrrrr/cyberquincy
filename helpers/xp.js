xpCurve = require('../jsons/discord-user-xp.json');

module.exports = {
    async addCommandXp(message) {
        user = message.author;

        let tag = await Tags.findOne({ where: 
            { 
                id: user.id 
            } 
        });

        // Create db user if it doesn't already exist
        if (!tag) {
            tag = await Tags.create({
                id: user.id,
                xp: 0, 
            });
        }

        xpGain = h.randomIntegerFromInclusiveRange(5, 12);

        oldLevel = module.exports.xpToLevel(tag.xp)
        
        Tags.update({ xp: tag.xp + xpGain }, { where: { id: user.id } });

        tag = await Tags.findOne({ where: 
            { 
                id: user.id 
            } 
        });

        newLevel = module.exports.xpToLevel(tag.xp);

        if(newLevel > oldLevel) {
            return module.exports.levelUpMessage(message, newLevel);
        }
    },

    xpToLevel(xp) {
        for (level = 1; level < xpCurve.length; level++) {
            if(xpCurve[level] > xp) return level;
        }
        // If user's leveling calculation made it this far, assign the highest level
        return xpCurve.length;
    },

    levelUpMessage(message, newLevel) {
        user = message.author;

        levelUpEmbed = new Discord.MessageEmbed()
            .setTitle(`Level Up!`)
            .addField(
                `Congratulations ${user.username}#${user.discriminator}!`,
                `You have advanced to level ${newLevel}`
            )
            .setFooter("Type `q!level` for more information")
            .setColor(colours['green'])

        message.channel.send(levelUpEmbed);
    },
}