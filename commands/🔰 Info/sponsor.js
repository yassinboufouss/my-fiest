const {
  MessageEmbed
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  swap_pages2
} = require(`${process.cwd()}/handlers/functions`);
module.exports = {
  name: "sponsor",
  category: "🔰 Info",
  aliases: ["sponsors"],
  description: "Shows the sponsor of this BoT",
  usage: "sponsor",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let embed1 = new MessageEmbed()
      .setColor(es.color)
      .setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable1"]))
      .setURL("lol")
      .setDescription(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable2"]))
      .setImage("https://cdn.bero-host.de/img/logo/bero_white.png")
      .setFooter(client.getFooter("BERO-HOST | Code 'manga' == -5%", "https://imgur.com/jXyDEyb.png"))
    let embed2 = new MessageEmbed()
      .setColor(es.color)
      .setTimestamp()
      .setFooter(client.getFooter("Manganode.ma | Code 'x10' == -5%", 'https://imgur.com/UZo3emk.png'))
      .setImage("https://cdn.discordapp.com/attachments/807985610265460766/822982640000172062/asdasdasdasdasd.png")
      .setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable3"]))
      .setURL("lol")
      .setDescription(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable4"]));
    swap_pages2(client, message, [embed1, embed2])

  }
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://discord.gg/milrato
 * @INFO
 * Work for Milrato Development | https://milrato.dev
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
