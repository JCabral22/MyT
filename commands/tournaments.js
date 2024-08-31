const { SlashCommandBuilder } = require("discord.js");
const { Client: DB } = require("pg");
const db = new DB({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "",
  database: "MyTourni",
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tournaments")
    .setDescription("Shows all upcoming tournaments!"),
  // async execute(interaction) {
  //   let tournis;
  //   let embed1;
  //   let buttons;
  //   await db.query(`SELECT * FROM tournaments`, (err, res) => {
  //     if (!err) {
  //       console.log("This ran");
  //       console.log(res.rows);
  //       tournis = res.rows;
  //       console.log(tournis);
  //       const row = new ActionRowBuilder().addComponents(
  //         new ButtonBuilder()
  //           .setCustomId("previous")
  //           .setLabel("Previous")
  //           .setStyle(ButtonStyle.Primary)
  //           .setDisabled(true),

  //         new ButtonBuilder()
  //           .setCustomId("register")
  //           .setLabel("Register")
  //           .setStyle(ButtonStyle.Primary)
  //           .setDisabled(false),

  //         new ButtonBuilder()
  //           .setCustomId("next")
  //           .setLabel("Next")
  //           .setStyle(ButtonStyle.Primary)
  //           .setDisabled(false)
  //       );

  //       const tournamentEmbed = new EmbedBuilder()
  //         .setColor("#0099ff")
  //         .setTitle("Current Tournaments")
  //         .setURL("https://Mytourni.com/tournaments.html")
  //         .setDescription("Tournaments you can register for!")
  //         .addFields(tournis[0].Game, tournis[0].date, true);
  //       if (tournis[0].entry == 0) {
  //         tournamentEmbed.addFields({
  //           name: "Prize:",
  //           value: "Free Entry!",
  //           inline: true,
  //         });
  //       } else {
  //         tournamentEmbed.addFields({
  //           name: "Prize:",
  //           value: tournis[0].entry + "$ entry fee",
  //           inline: true,
  //         });
  //       }
  //       if (tournis[0].game === "Call of Duty") {
  //         tournamentEmbed.setImage(
  //           "https://mytourni.com/images/warzone-logo.webp"
  //         );
  //       }
  //       if (tournis[0].game === "Clash Royale") {
  //         tournamentEmbed.setImage(
  //           "https://mytourni.com/images/clash-royale-logo.jpg"
  //         );
  //       }

  //       if (tournis[0].game === "FIFA") {
  //         tournamentEmbed.setImage(
  //           "https://mytourni.com/images/fifa-logo.webp"
  //         );
  //       }

  //       if (tournis[0].game === "Brawlhalla") {
  //         tournamentEmbed.setImage(
  //           "https://mytourni.com/images/brawl-logo.jpg"
  //         );
  //       }

  //       if (tournis[0].game === "Rocket League2") {
  //         tournamentEmbed.setImage(
  //           "https://mytourni.com/images/rocket-league-logo.jpg"
  //         );
  //       }
  //       embed1 = tournamentEmbed;
  //       buttons = row;
  //     }
  //   });
  //   await interaction.editReply({ embeds: [embed1], components: [buttons] });
  // },
};
