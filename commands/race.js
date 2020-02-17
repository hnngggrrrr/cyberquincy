const Discord = require("discord.js");
module.exports = {
  name: "race",
  description: "race info",
  execute(message, args, client) {
    racenum = parseInt(args[0]);
    if (racenum === 1) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("First!")
        .setDescription("Town Center, Medium, Standard\nRounds 1-60")
        .addField("Hero", "Quincy")
        .addField("Towers", "all")
        .addField("1st place", "Jajajosh (1:30.08)")
        .addField(
          "2nd place",
          "ISAB (1:34.46)\n(was awarded extra second place medal)"
        )
        .addField("3rd place", "FriarTruck (1:36.00)")
        .addField("4th place", "NOMADIA (1:37.00)")
        .addField("5th place", "ddkkoomm (1:37.21)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://i.imgur.com/9H7PKJ3.jpg) [2](https://i.imgur.com/fqcYHtz.png)"
        )
        .setFooter("date: December 12 - 19 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 2) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Primary Qualifiers")
        .setDescription(
          "Monkey Meadow, Medium, Primary Only\nRounds 1-60, No MK"
        )
        .addField("Hero", "Striker Jones")
        .addField("Towers", "Primary Only")
        .addField("1st place", "Not (2:26.00)")
        .addField("2nd place", "ISAB (2:26.93)")
        .addField("3rd place", "SJB (2:31.00)")
        .addField("4th place", "TheDarkLink (2:31.00)")
        .addField("5th place", "Matthew Lim (2:37.00)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://i.imgur.com/8rY3usd.png)\nremarks: Extra second place medal awarded"
        )
        .setFooter("date: December 20 - 23 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 3) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Red White and Green")
        .setDescription("Alpine Run, Medium, Standard\nRounds 1-60")
        .addField("Hero", "Obyn")
        .addField("Towers", "Ice, Ace, Ninja, Druid")
        .addField("1st place", "Avocado (1:50.751)")
        .addField("2nd place", "ISAB (1:55.167)")
        .addField("3rd place", "66 (1:56.134)")
        .addField("4th place", "Not (1:57.84)")
        .addField("5th place", "Pie (2:01.701)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://i.imgur.com/TtcGgNt.png)\nremarks: Hackers, Avocado got rewards for 1st and 2nd"
        )
        .setFooter("date: December 28 - 31 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 4) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Hardy Racers")
        .setDescription("Streambed, Hard, Standard\nRounds 3-80")
        .addField("Hero", "none")
        .addField("Towers", "all")
        .addField("1st place", "Avocado (2:49)")
        .addField("2nd place", "ISAB (2:59.58)")
        .addField("3rd place", "Tobi (3:00.33)")
        .addField("4th place", "TheDarkLink (3:05.98)")
        .addField("5th place", "frds (3:06.50)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://cdn.discordapp.com/attachments/454395715834216459/529139336998944782/unknown.png),[2](https://cdn.discordapp.com/attachments/543959759133474817/610940376542478338/Screenshot_20190813_225836.jpg),[3](https://i.imgur.com/qvm4XUx.jpg)\nremarks: Hackers, Avocado got rewards for 1st and 2nd"
        )
        .setFooter("date: December 28 - 31 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 5) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Happy New Years")
        .setDescription("Tree Stump, Medium, Standard\nRounds 1-60, 1 Life")
        .addField("Hero", "Any Hero (but everyone chose Gwen)")
        .addField("Towers", "Banned: Wizard")
        .addField("1st place", "ISAB (1:05.251)")
        .addField("2nd place", "Loaf (1:08.634)")
        .addField("3rd place", "Avocado (1:09.534)")
        .addField("4th place", "Pie (1:10.1)")
        .addField("5th place", "ZX Cai (1:11.534)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://i.imgur.com/6OAoAkQ.jpg),[2](https://i.imgur.com/qKy8ZhW.png)\nremarks: Hacker, 1st, 2nd & 3rd compensated"
        )
        .setFooter("date: January 1 - 4  08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 6) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Military Qualifiers")
        .setDescription("Tree Stump, Medium, Standard\nRounds 1-60, No MK")
        .addField("Hero", "Churchill")
        .addField("Towers", "Military Only")
        .addField("1st place", "Polaritz (4:34.401)")
        .addField("2nd place", "Avocado (4:34.501)")
        .addField("3rd place", "Brady (4:58.751)")
        .addField("4th place", "Not (5:05.484)")
        .addField("5th place", "FX420blazeit (5:15.884)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://cdn.discordapp.com/attachments/454395715834216459/580201485997047816/image0.png),[2](https://i.imgur.com/YAegLTa.jpg)"
        )
        .setFooter("date: January 4 - 7  08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 7) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Sharp Turns")
        .setDescription("In The Loop, Hard, Standard\nRounds 3-80")
        .addField("Hero", "Quincy")
        .addField(
          "Towers",
          "Dart, Tack, Sub, Ace, Heli, Super, Ninja, Spactory"
        )
        .addField("1st place", "Corn (2:52.61)")
        .addField("2nd place", "Avocado (2:57.53)")
        .addField("3rd place", "Seclate (3:01.26)")
        .addField("4th place", "WestNileVirus (3:05.91)")
        .addField(
          "5th place",
          "Krzysztofsuski (3:09.75) [potentially incorrect]"
        )
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://cdn.discordapp.com/attachments/543959759133474817/610942819166847012/image0.png),[2](https://i.imgur.com/YcVHT8F.jpg)\nRemarks: ISAB accquired free 3rd place medal"
        )
        .setFooter("date: January 11 - 14 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 8) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("A Good Alternative")
        .setDescription("Monkey Meadow, Easy, ABR\nRounds 1-56")
        .addField("Hero", "Ezili")
        .addField(
          "Towers",
          "Boomer, Tack, Glue, Sniper, Heli, Druid, Farm, Spactory, Village"
        )
        .addField("1st place", "Hacker(Dark?) (N/A)")
        .addField("2nd place", "Corn (2:07.51)")
        .addField("3rd place", "Seclate (2:08.50)")
        .addField("4th place", "Avocado (2:10.18)")
        .addField("5th place", "Kinsboy (2:12.08)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://i.imgur.com/sACEwmB.jpg),[2](https://i.imgur.com/Dp2k2zt.jpg)\nremarks: Hacker, 1st, 2nd & 3rd not compensated, screenshots differ for unknown reasons"
        )
        .setFooter("date: January 18 - 21 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 9) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Po-Tay-Toes!")
        .setDescription("Logs, Medium, Standard\nRounds 1-80")
        .addField("Hero", "Any Hero (but everyone chose Gwen)")
        .addField("Towers", "2 Towers Max, All Towers")
        .addField("1st place", "Kinsboy (1:46.18)")
        .addField("2nd place", "Avocado (1:50.13)")
        .addField("3rd place", "Hacker(Dark?) [missing info]")
        .addField("4th place", "ZXCAI(?) [missing info]")
        .addField("5th place", "Tobi(?) [missing info]")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://i.imgur.com/darWojH.png),[2](https://i.imgur.com/DMEinvq.png),[3](https://i.imgur.com/zUnc5Os.png)"
        )
        .setFooter("date: January 25 - 28 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 10) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Burning Rubber")
        .setDescription(
          "KartsNDarts, Hard, Standard\nRounds 3-80, Faster Bloon Speed, No MK"
        )
        .addField("Hero", "Gwen")
        .addField(
          "Towers",
          "Boomer(2), Tack(2), Boat(2), Mortar(2), Wizard(2), Spactory(2)"
        )
        .addField("1st place", "Avocado (5:40.11)")
        .addField("2nd place", "Tobi (5:42.05)")
        .addField("3rd place", "Kinsboy (5:51.86)")
        .addField("4th place", "Orangutan (6:01.48)")
        .addField("5th place", "VIII (6:30.36)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://media.discordapp.net/attachments/454395715834216459/544731030033006602/Screenshot_2019-02-10-23-59-46-799_com.ninjakiwi.bloonstd6.png?width=1352&height=676),[2](https://i.imgur.com/zvIApXl.jpg)"
        )
        .setFooter("date: February 8 - 11 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 11) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Let It Go")
        .setDescription("Frozen Over, Hard, Standard\nRounds 3-80")
        .addField("Hero", "Striker Jones")
        .addField("Towers", "Dart, Bomb, Ice, Glue, Heli, Wizard")
        .addField("1st place", "Avocado (2:56.35)")
        .addField("2nd place", "Crimey (2:57.11)")
        .addField("3rd place", "Kinsboy (2:58.76)")
        .addField("4th place", "frds (3:01.61)")
        .addField("5th place", "Wind (3:09.36)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField("source", "[1](https://i.imgur.com/weWGyh3.jpg)")
        .setFooter("date: Feburary 15 - 18 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 12) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Monkeying Around on the Moon")
        .setDescription("Moon Landing, Medium, Standard\nRounds 1-60")
        .addField("Hero", "Any Hero (but everyone chose Gwen)")
        .addField("Towers", "Sniper, Ace, Heli, Mortar")
        .addField("1st place", "Avocado (1:08.68)")
        .addField("2nd place", "Seclate (1:09.43)")
        .addField("3rd place", "Wind (1:09.78)")
        .addField("4th place", "DTEO (1:10.93)")
        .addField("5th place", "Polaritz (1:14.66)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField("source", "[1](https://i.imgur.com/BAHmiF8.jpg)")
        .setFooter("date: Febuary 22 - 25 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 13) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("An Easy CHIMPS Race")
        .setDescription("Four Circles, Easy, Chimps\nRounds 6-60")
        .addField("Hero", "Obyn")
        .addField("Towers", "Banned: Bomb, Ace, Wizard")
        .addField("1st place", "Avocado (2:25.83)")
        .addField("2nd place", "Scission (2:32.31)")
        .addField("3rd place", "Flam (2:33.03)")
        .addField("4th place", "Tobi (2:44.46)")
        .addField("5th place", "Chalupa (2:45.68)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://i.imgur.com/x4QtY0X.jpg)\nremarks: 1st, 2nd & 3rd acquired Double Medals"
        )
        .setFooter("date: March 1 - 4     08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 14) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Do You Need a Hug")
        .setDescription("Pat's Pond, Hard, Reverse\nRounds 3-80")
        .addField("Hero", "Pat")
        .addField(
          "Towers",
          "Banned: Bomb, Ice, Ace, Wizard, Super, Alch, Druid"
        )
        .addField("1st place", "Flam (5:22.83)")
        .addField("2nd place", "Tobi (6:18.60)")
        .addField(
          "3rd place",
          "JPCV24 (>6:18.60 or <7:08.05) [no time/potentially incorrect]"
        )
        .addField("4th place", "Crimey (7:08.05)")
        .addField("5th place", "Mahersmg (7:18.10)")
        .addField(
          "Total # of people playing: <350",
          "position for top 1%: none"
        )
        .addField(
          "source",
          "[1](https://cdn.discordapp.com/attachments/454395715834216459/554805328731176970/Screenshot_247.png),[2](https://i.imgur.com/WRkuln6.jpg),[3](https://i.imgur.com/Psv7aLc.png)"
        )
        .setFooter("date: March 8 - 11   08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 15) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Last Cent")
        .setDescription("High Finance, Easy, Standard\nRounds 1-80")
        .addField("Hero", "Ben")
        .addField("Towers", "all")
        .addField("1st place", "Avocado (2:22.48)")
        .addField("2nd place", "Kinsboy (2:24.61)")
        .addField("3rd place", "Crimey (2:33.70)")
        .addField("4th place", "Tarn (2:38.06)")
        .addField("5th place", "Wind (2:40.75)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://cdn.discordapp.com/attachments/503775607511973897/557405421468516371/Screenshot_20190318-202956.png)"
        )
        .setFooter("date: March 15 - 18 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 16) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Boom Boom Pow")
        .setDescription("End of the Road, Easy, Standard\nRounds 1-90")
        .addField("Hero", "Striker Jones")
        .addField("Towers", "Banned: Boomer, Bomb, Ace, Wizard")
        .addField("1st place", "Kinsboy (2:24.26)")
        .addField("2nd place", "Flam (2:29.78)")
        .addField("3rd place", "Crimey (2:29.86)")
        .addField("4th place", "Tobi (2:31.65)")
        .addField("5th place", "Wind (2:34.11)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://cdn.discordapp.com/attachments/543959759133474817/610938968628002846/image0.jpg),[2](https://cdn.discordapp.com/attachments/543959759133474817/610939852921241601/IMG_0915.JPG),[3](https://cdn.discordapp.com/attachments/528760157279092738/559669291725881344/unknown.png)"
        )
        .setFooter("date: March 22 - 25 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 17) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Deflation?")
        .setDescription("Cubism, Medium, Deflation\nRounds 31-70")
        .addField("Hero", "Obyn")
        .addField("Towers", "Banned: Boomer, Bomb, Ace, Wizard")
        .addField("1st place", "Avocado (1:27.11)")
        .addField("2nd place", "Gift (1:29.13)")
        .addField("3rd place", "frds (1:29.50)")
        .addField("4th place", "Tobi (1:30.25)")
        .addField("5th place", "Fenix (1:36.23)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://cdn.discordapp.com/attachments/454395715834216459/562396864096370698/Screenshot_264.png),[2](https://i.imgur.com/nTCEgXh.jpg)"
        )
        .setFooter("date: March 29 - April 1 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 18) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Camo Trap")
        .setDescription("Four Circles, Easy, Standard\nRounds 1-87")
        .addField("Hero", "Churchill")
        .addField(
          "Towers",
          "Banned: Dart, Bomb, Boat, Ace, Heli, Wizard, Super, Ninja, Village"
        )
        .addField("1st place", "Avocado (2:11.61)")
        .addField("2nd place", "Tobi (2:12.30)")
        .addField("3rd place", "Fenix (2:16.35)")
        .addField("4th place", "Wind (2:21.13)")
        .addField("5th place", "Gift (2:22.01)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://cdn.discordapp.com/attachments/503775607511973897/565136029271588864/Screenshot_20190408-203352.png)"
        )
        .setFooter("date: April 5 - 8        08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 19) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Forward Thinking")
        .setDescription(
          "Downstream, Medium, Standard\nRounds 1-63, Slower Moab Speed, No Selling"
        )
        .addField("Hero", "Ben")
        .addField(
          "Towers",
          "No Village, Boomer(1), Bomb(1), Tack(1), Sub(1), Boat(1), Ace(1), Wizard(1)"
        )
        .addField("1st place", "Crimey (1:42:56)")
        .addField("2nd place", "Wind (1:43.35)")
        .addField("3rd place", "Tobi (1:43.65)")
        .addField("4th place", "Pie (1:49.26)")
        .addField("5th place", "Fighter (1:50.86)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField(
          "source",
          "[1](https://cdn.discordapp.com/attachments/543959759133474817/611103739306311690/Screenshot_2019-04-22-23-02-57-767_com.ninjakiwi.bloonstd6.png),[2](https://i.imgur.com/ykBA83E.jpg)"
        )
        .setFooter("date: April 19 - 22    08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 20) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Haunted Speed")
        .setDescription(
          "Haunted, Easy, Standard\nRounds 1-80, Faster Bloon Speed, Slower Moab Speed"
        )
        .addField("Hero", "Any Hero (but everyone chose Gwen)")
        .addField("Towers", "Banned: Bomb, Ace, Wizard")
        .addField("1st place", "Gift (1:54.78)")
        .addField("2nd place", "Lolxd (1:56.18)")
        .addField("3rd place", "Fenix (1:56.23)")
        .addField("4th place", "Wind (1.57.05)")
        .addField("5th place", "Kinsboy Alt(?) (1:58.41)")
        .addField(
          "Total # of people playing: unknown",
          "position for top 1%: unknown"
        )
        .addField("source", "[1](https://i.imgur.com/SPAXEjG.png)")
        .setFooter("date: April 26 - 29    08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 21) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Bringing Around Destruction")
        .setDescription(
          "In The Loop, Medium, Standard\nRounds 59-100, Faster Moab Speed, Lower Moab Health, $50k Starting Cash"
        )
        .addField("Hero", "Pat")
        .addField("Towers", "Banned: Bomb, Tack, Ace, Mortar")
        .addField(
          "1st place",
          "Scrub (1:29.8?) [no time/potentially incorrect]"
        )
        .addField(
          "2nd place",
          "Kinsboy Alt(?) (<1:30.08) [no time/potentially incorrect]"
        )
        .addField("3rd place", "NinjaB (1:30.08)")
        .addField("4th place", "Avocado (1:30.18)")
        .addField("5th place", "[missing all infomation here]")
        .addField("Total # of people playing: ", "position for top 1%: ")
        .addField("source", "[1](https://i.imgur.com/a2ORwyp.jpg)")
        .setFooter("date: ");
      message.channel.send(raceEmbed);
    } else if (racenum === 22) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Back To The Basics")
        .setDescription(
          "Town Center, Medium, Half Cash\nRounds 1-40, 100 Lives, $750 Starting Cash"
        )
        .addField("Hero", "Churchill")
        .addField(
          "Towers",
          "Banned: Boomer, Tack, Sub, Ace, Mortar, Wizard, Farm"
        )
        .addField("1st place", "Dueave (2:15.31)")
        .addField("2nd place", "Fenix (2:16.15)")
        .addField("3rd place", "Tobi (2:18.71)")
        .addField("4th place", "Wind (2:19.28)")
        .addField("5th place", "chalupa (2.30.63)")
        .addField("Total # of people playing: ", "position for top 1%: ")
        .addField("source", "[1](https://i.imgur.com/QPb1lFG.jpg)")
        .setFooter("date: May 10 - 13    08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 23) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Sink or Swim")
        .setDescription(
          "Spice Islands, Easy, Double HP Moabs\nRounds 10-60, No MK, 100 Lives, $2000 Starting Cash"
        )
        .addField("Hero", "Pat Fusty")
        .addField("Towers", "Banned: Boomer, Tack, Ace, Heli, Mortar, Wizard")
        .addField("1st place", "Gift (1:13.13)")
        .addField("2nd place", "Fenix (1:14.88)")
        .addField("3rd place", "Crimey (1:14.88)")
        .addField("4th place", "Tobi (1:16.08)")
        .addField("5th place", "Wind (1:22.78)")
        .addField("Total # of people playing: ", "position for top 1%: ")
        .addField(
          "source",
          "[1](https://cdn.discordapp.com/attachments/543959759133474817/610952291280879780/Screenshot_20190813_234559_com.google.android.youtube.jpg),[2](https://cdn.discordapp.com/attachments/503775607511973897/580155336388771856/unknown.png)"
        )
        .setFooter("date: May 17 - 20     08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 24) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("One Foot in Quicksand")
        .setDescription(
          "Muddy Puddles, Easy, Standard\nRounds 1-60, Slower Bloon Speed"
        )
        .addField("Hero", "Any hero (but everyone chose ben)")
        .addField("Towers", "Banned: Ace, Heli, Farm, Village")
        .addField("1st place", "NinjaB (1:50.10)")
        .addField("2nd place", "Brady (1:51.43)")
        .addField("3rd place", "Fenix (1:51.90)")
        .addField("4th place", "Wind (1:53.08)")
        .addField("5th place", "Tobi (1:59.33)")
        .addField("Total # of people playing: 5032", "position for top 1%: 50")
        .addField("source", "[1](https://i.imgur.com/4UDb4phr.jpg)")
        .setFooter("date: May 24 - 27    08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 25) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("What Are Those Jugga Things Called")
        .setDescription("Hedge, Medium, Reverse\nRounds 1-60")
        .addField("Hero", "Ezili")
        .addField("Towers", "Banned: Boomer, Bomb, Tack, Ace, Mortar, Wizard")
        .addField("1st place", "Kinsboy (1:59.75)")
        .addField("2nd place", "Fenix (2:03.40)")
        .addField("3rd place", "Liike (2:03.71)")
        .addField("4th place", "Nothing (2:04.25)")
        .addField("5th place", "Dueave (2:05.28)")
        .addField("Total # of people playing: ", "position for top 1%: ")
        .addField("source", "[1](https://i.imgur.com/rnTymGr.png)")
        .setFooter("date: May 31 - June 3 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 26) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Give Me That; You Have The Little One")
        .setDescription("Cracked, Easy, Standard\nRounds 1-80, No MK, 50 Lives")
        .addField("Hero", "Ben")
        .addField("Towers", "Dart, Tack(1), Ice, Glue, Sniper, Ninja, Alch")
        .addField("1st place", "Kinsboy (2:24.01)")
        .addField("2nd place", "Fenix (2:24.13)")
        .addField("3rd place", "Kinsboy Alt(?) (2:25.65)")
        .addField("4th place", "Shwax (2:29.56)")
        .addField("5th place", "NinjaB (2:30.18)")
        .addField("Total # of people playing: ", "position for top 1%: ")
        .addField("source", "[1](https://i.imgur.com/QeXyFYk.jpg)")
        .setFooter("date: June 7 - 10     08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 27) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Anniversary Weekend (X2 Rewards)")
        .setDescription(
          "Cubism, Medium, Standard\nRounds 1-56, No MK, Faster Bloon Speed, Faster Moab Speed"
        )
        .addField("Hero", "Gwen")
        .addField("Towers", "Ice, Sniper, Sub(1), Alch, Druid, Village")
        .addField("1st place", "Kinsboy (1:45.16)")
        .addField("2nd place", "Fenix (1:45.88)")
        .addField("3rd place", "Tobi (1:46.05)")
        .addField("4th place", "NinjaB (1:48.28)")
        .addField("5th place", "Dueave (1:49.00)")
        .addField("Total # of people playing: ", "position for top 1%: ")
        .addField("source", "[1](https://i.imgur.com/4o0GUoz.jpg)")
        .setFooter("date: June 14 - 17   08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 28) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("This is One For the History Books")
        .setDescription("Four Circles, Medium, Standard\nRounds 1-60")
        .addField("Hero", "Churchill")
        .addField(
          "Towers",
          "Sniper(1), Sub(1), Boat(1), Ace(1), Heli(1), Mortar(1)"
        )
        .addField("1st place", "Fenix (1:50.46)")
        .addField("2nd place", "Kinsboy (1:51.18)")
        .addField("3rd place", "Kinsboy Alt(?) (1:52.08)")
        .addField("4th place", "NinjaB (1:52.75)")
        .addField("5th place", "Tobi (1:55.23)")
        .addField("Total # of people playing: ", "position for top 1%: ")
        .addField("source", "[1](https://i.imgur.com/yKp5Nx7.jpg)")
        .setFooter("date: June 21 - 24   08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 29) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Who's That Pokemon")
        .setDescription(
          "Tree Stump, Medium, Standard\nRounds 15-63, Higher Ceram Health, $1942 Starting Cash"
        )
        .addField("Hero", "Ezili")
        .addField(
          "Towers",
          "Banned: Tack, Bomb, Sub, Boat, Ace, Mortar, Wizard"
        )
        .addField("1st place", "Kinsboy (1:30.25)")
        .addField("2nd place", "Fenix (1:30.80)")
        .addField("3rd place", "Kinsboy Alt(?) (1:30.93)")
        .addField("4th place", "Tobi (1:32.61)")
        .addField("5th place", "NinjaB (1:33.45)")
        .addField("Total # of people playing: ", "position for top 1%: ")
        .addField(
          "source",
          "[1](https://cdn.discordapp.com/attachments/543959759133474817/611209041821302804/Screenshot_20190814_164544_com.google.android.youtube.jpg),[2](https://i.imgur.com/oCCCYtf.jpg)"
        )
        .setFooter("date: June 28 - July 1 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 42) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("All in Together (by crimey)")
        .setDescription(
          "Spring Spring, Easy, Standard\nRounds 1-80, No Selling"
        )
        .addField("Hero", "Striker Jones")
        .addField("Towers", "all")
        .addField("1st place", "")
        .addField("2nd place", "")
        .addField("3rd place", "")
        .addField("4th place", "")
        .addField("5th place", "")
        .addField(
          "Total # of people playing: 11008",
          "position for top 1%: 110"
        )
        .addField("source", "[1](https://i.imgur.com/gQUHZgm.png)")
        .setFooter("date: September 27 - 30 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 43) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Choose your champion")
        .setDescription(
          "End of the Road, Medium, Standard\nRounds 9-77, $800 Starting Cash"
        )
        .addField("Hero", "Pat Fusty")
        .addField(
          "Towers",
          "Dart, Glue, Sniper, Sub, Heli, Wiz, Super, Alch, Spactory, Engineer(1), Boat(2)"
        )
        .addField("1st place", "Fenix (2:15.93)")
        .addField("2nd place", "Kinsboy (2:16.78)")
        .addField("3rd place", "Shwax (2:17.58)")
        .addField("4th place", "TSP (2:19.18)")
        .addField("5th place", "Tobi (2:19.75)")
        .addField(
          "source",
          "[1](https://cdn.discordapp.com/attachments/612981354665082880/633506907616837632/unknown.png)"
        );
      message.channel.send(raceEmbed);
    } else if (racenum === 44) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Batten Down The Hatches")
        .setDescription("Spice Islands, Medium, Standard\nRounds 1-63")
        .addField("Hero", "Pat Fusty")
        .addField("Towers", "Ice, Sub, Boat, Ace, Super, Farm")
        .addField("1st place", "TSP (1:57.05)")
        .addField("2nd place", "Tobi (1:59.05)")
        .addField("3rd place", "Fenix (2:00.70)")
        .addField("4th place", "Kinsboy (2:05.11)")
        .addField("5th place", "exephur (2:09.96)")
        .addField(
          "Total # of people playing: 12442",
          "position for top 1%: 124"
        )
        .addField(
          "source",
          "[1](https://cdn.discordapp.com/attachments/612981354665082880/633506907616837632/unknown.png)"
        )
        .setFooter("date: October 11 - 14 08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 45) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("All in Together (by crimey)")
        .setDescription(
          "Spring Spring, Easy, Standard\nRounds 1-80, No Selling"
        )
        .addField("Hero", "Striker Jones")
        .addField("Towers", "all")
        .addField("1st place", "exephur")
        .addField("2nd place", "Fenix")
        .addField("3rd place", "Skibimi")
        .addField("4th place", "Tobi")
        .addField("5th place", "TSP")
        .addField("Total # of people playing: ", "position for top 1%: ")
        .addField("source", "[1](https://i.imgur.com/JNRQZts.png)")
        .setFooter("date: October 18 - 21   08:00 UTC");
      message.channel.send(raceEmbed);
    } else if (racenum === 45) {
      const raceEmbed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("All in Together (by crimey)")
        .setDescription(
          "Spring Spring, Easy, Standard\nRounds 1-80, No Selling"
        )
        .addField("Hero", "Striker Jones")
        .addField("Towers", "all")
        .addField("1st place", "exephur")
        .addField("2nd place", "Fenix")
        .addField("3rd place", "Skibimi")
        .addField("4th place", "Tobi")
        .addField("5th place", "TSP")
        .addField(
          "Total # of people playing: 13903",
          "position for top 1%: 139"
        )
        .addField("source", "[1](https://i.imgur.com/JNRQZts.png)")
        .setFooter("date: October 18 - 21   08:00 UTC");
      message.channel.send(raceEmbed);
    } else {
      const embed = new Discord.RichEmbed()
        .setColor("#23dbb6")
        .setTitle("Oops, something went wrong")
        .setDescription("Troubleshooting:")
        .addField(
          "1. You used a wrong race number.",
          "This command only accpets numbers 1-45"
        )
        .addField(
          "There shouldnt be any other reason",
          "if you have a problem, join the [suport server](https://discord.gg/8agRm6c)"
        );
    }
  }
};
