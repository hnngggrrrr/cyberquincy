const h = require('../heroes.json');
const { colour } = require('../shh/config.json');
const Discord = require('discord.js');
module.exports = {
	name: 'adora',
	description: 'adora upgrades',
	aliases: ['ad', 'ador', 'ado', 'dora', 'priestess', 'high', 'highpriestess'],
	usage: 'q!adora <level>',
	execute(message, args, client) {
		if (!args) {
			return message.channel.send(`Please specify a level \`\`e.g.: ${message.content} 4\`\``);
		}
		const hh = h['adora'][parseInt(args[0])];
		if (!hh)
			return message.channel.send(
				'Please specify a valid hero level!\nThe command usage is ``q!<hero> <level>``'
			);
		const heroEmbed = new Discord.RichEmbed()
			.setTitle('Adora')
			.addField('cost', `${hh.cost}`)
			.addField('desc', `${hh.desc}`)
			.setFooter('use q!ap for help and elaboration')
			.setColor(colour);
		message.channel.send(heroEmbed);
	}
};