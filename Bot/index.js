const fs = require("node:fs");
const path = require("node:path");
const {
  Client,
  GatewayIntentBits,
  InteractionResponse,
} = require("discord.js");
const { token, clientId, guildId } = require("./config.json");
const { Client: DB } = require("pg");
const {
  MessageActionRow,
  MessageButton,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");
let currentindex = 0;
const wait = require("node:timers/promises").setTimeout;
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const e = require("express");
const db = new DB({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "",
  database: "MyTourni",
});
db.connect();
const commands = [];
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});
client.login(token);

client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  let tournis;
  let embed1;
  let buttons;
  if (interaction.commandName === "tournaments") {
    let currentindex = 0;
    await interaction.deferReply({ ephemeral: true });
    db.query(
      `SELECT * FROM "tournaments" ORDER BY "tournament_ID" asc`,
      (err, res) => {
        if (!err) {
          tournis = res.rows;
          if (tournis.length == 0) {
            interaction.editReply({
              content:
                "There are no current tournaments, stay tuned for more soon!",
              ephemeral: true,
            });
          } else {
            currentindex = 0;
            const row = new ActionRowBuilder().addComponents(
              new ButtonBuilder()
                .setCustomId("previous")
                .setLabel("Previous")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(true),

              new ButtonBuilder()
                .setCustomId("register")
                .setLabel("Register")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false),

              new ButtonBuilder()
                .setCustomId("next")
                .setLabel("Next")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false)
            );
            buttons = row;
            const tournamentEmbed = new EmbedBuilder()
              .setColor("#0099ff")
              .setTitle("Current Tournaments")
              .setURL("https://Mytourni.com/tournaments.html")
              .setDescription("Tournaments you can register for!")
              .setTimestamp()
              .setThumbnail("https://mytourni.com/images/logo.png")
              .addFields(
                { name: "Game:", value: `${tournis[0].Game}` },
                {
                  name: "Prize:",
                  value: `${tournis[0].Prize}`,
                  inline: true,
                }
              )
              .setFooter({
                text: "MyTourni 2022",
              });
            embed1 = tournamentEmbed;

            tournamentEmbed.addFields(
              {
                name: "Entry Fee:",
                value: `${
                  tournis[0].entry == 0
                    ? "Free Entry!"
                    : tournis[currentindex].entry
                }`,
              },

              {
                name: "Date",
                value: `${tournis[0].Day}`,
                inline: true,
              },
              {
                name: "Time",
                value: `${tournis[0].Time}`,
                inline: true,
              },
              { name: "Sponsor:", value: `${tournis[0].sponsor}` }
            );

            switch (tournis[0].Game) {
              case "Call Of Duty":
                tournamentEmbed.setImage(
                  "https://mytourni.com/images/warzone-logo.webp"
                );
                break;

              case "Clash Royale":
                tournamentEmbed.setImage(
                  "https://mytourni.com/images/clash-royale-logo.jpg"
                );
                break;

              case "FIFA":
                tournamentEmbed.setImage(
                  "https://mytourni.com/images/fifa-logo.jpg"
                );
                break;

              case "Brawlhalla":
                tournamentEmbed.setImage(
                  "https://mytourni.com/images/brawl-logo.jpg"
                );
                break;

              case "Rocket League":
                tournamentEmbed.setImage(
                  "https://mytourni.com/images/rocket-league-logo.jpg"
                );
                break;

              default:
                tournamentEmbed.setImage(
                  "https://mytourni.com/images/warzone-logo.webp"
                );
                break;
            }
            console.log(tournis);
            interaction.editReply({
              embeds: [tournamentEmbed],
              components: [buttons],
              ephemeral: true,
            });
          }
        }
      }
    );
  }
  if (interaction.customId === "tourneyModal") {
    // console.log(
    //   "Modal clicked interaction is " +
    //     interaction.fields.getTextInputValue("confirmInput")
    // );
    // db.query(`SELECT * FROM TOURNAMENTS`, (err, res) => {
    //   console.log(res);
    // });
    if (
      interaction.fields.getTextInputValue("confirmInput").toLowerCase() ==
      "yes"
    ) {
      db.query(
        `SELECT * FROM "tournaments" WHERE "tournament_ID" = ${
          currentindex + 1
        } `,
        (err, res) => {
          if (!err) {
            console.log("Here@");
            let participants = res.rows;

            participants.forEach((row) => {
              console.log(row.Participants);
              if (
                row.Participants != null &&
                row.Participants.includes(interaction.user.id)
              ) {
                interaction.reply({
                  content: "You are already registered for this tournament",
                  ephemeral: true,
                });
              } else {
                db.query(
                  `UPDATE TOURNAMENTS SET "Participants" =array_append("Participants",${interaction.user.id}) WHERE "tournament_ID" = ${currentindex}`
                );
                interaction.reply({
                  content:
                    "You have successfully registered. a DM will be sent to you shortly with more info",
                  ephemeral: true,
                });
                interaction.user.send("More information");
              }
            });
            // if (
            //   participants != null &&
            //   participants.includes(interaction.user.id)
            // ) {
            //   interaction.reply({
            //     content: "You are already registered for this tournament",
            //     ephemeral: true,
            //   });
            // } else {
            //   db.query(
            //     `UPDATE TOURNAMENTS SET "Participants" =array_append("Participants",${interaction.user.id}) WHERE "tournament_ID" = ${currentindex}`
            //   );
            //   interaction.reply({
            //     content:
            //       "You have successfully registered. a DM will be sent to you shortly with more info",
            //     ephemeral: true,
            //   });
            // }
          }
        }
      );
    } else {
      interaction.reply({
        content: "You did not register.",
        ephemeral: true,
      });
    }
  }
  if (interaction.customId == "register") {
    db.query(
      `SELECT * FROM "tournaments" ORDER BY "tournament_ID" asc`,
      (err, res) => {
        if (!err) {
          tourni = res.rows;
          console.log(currentindex, " ", tourni[currentindex].Game);
          const modal = new ModalBuilder()
            .setCustomId("tourneyModal")
            .setTitle(`MyTourni ${tourni[currentindex].Game} Registration`);

          const tourniConfirm = new TextInputBuilder()
            .setCustomId("confirmInput")
            .setPlaceholder('Type "Yes" to confirm')
            .setLabel(`Registration for ${tourni[currentindex].Game}. `)
            .setStyle(TextInputStyle.Short);
          const row = new ActionRowBuilder().addComponents(tourniConfirm);
          modal.addComponents(row);
          interaction.showModal(modal);
        }
      }
    );
  }
  if (interaction.customId == "next") {
    // interaction.deferReply({ ephemeral: true });
    currentindex = currentindex + 1;
    let row;
    db.query(
      `SELECT * FROM "tournaments" ORDER BY "tournament_ID" asc `,
      (err, res) => {
        if (!err) {
          tournis = res.rows;

          if (tournis[currentindex + 1] == undefined) {
            row = new ActionRowBuilder().addComponents(
              new ButtonBuilder()
                .setCustomId("previous")
                .setLabel("Previous")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false),

              new ButtonBuilder()
                .setCustomId("register")
                .setLabel("Register")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false),

              new ButtonBuilder()
                .setCustomId("next")
                .setLabel("Next")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(true)
            );
          } else {
            row = new ActionRowBuilder().addComponents(
              new ButtonBuilder()
                .setCustomId("previous")
                .setLabel("Previous")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false),

              new ButtonBuilder()
                .setCustomId("register")
                .setLabel("Register")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false),

              new ButtonBuilder()
                .setCustomId("next")
                .setLabel("Next")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false)
            );
          }
          buttons = row;
          const tournamentEmbed = new EmbedBuilder()
            .setColor("#0099ff")
            .setTitle("Current Tournaments")
            .setURL("https://Mytourni.com/tournaments.html")
            .setDescription("Tournaments you can register for!")
            .setTimestamp()
            .setThumbnail("https://mytourni.com/images/logo.png")
            .addFields(
              { name: "Game:", value: `${tournis[currentindex].Game}` },
              {
                name: "Prize:",
                value: `${tournis[currentindex].Prize}`,
                inline: true,
              }
            )
            .setFooter({
              text: "MyTourni 2022",
            });
          embed1 = tournamentEmbed;

          tournamentEmbed.addFields(
            {
              name: "Entry Fee:",
              value: `${
                tournis[currentindex].entry == 0
                  ? "Free Entry!"
                  : tournis[currentindex].entry
              }`,
            },

            {
              name: "Date",
              value: `${tournis[currentindex].Day}`,
              inline: true,
            },
            {
              name: "Time",
              value: `${tournis[currentindex].Time}`,
              inline: true,
            },
            { name: "Sponsor:", value: `${tournis[currentindex].sponsor}` }
          );

          if (tournis[currentindex].Game === "Call Of Duty") {
            tournamentEmbed.setImage(
              "https://mytourni.com/images/warzone-logo.webp"
            );
          }
          if (tournis[currentindex].Game === "Clash Royale") {
            tournamentEmbed.setImage(
              "https://mytourni.com/images/clash-royale-logo.jpg"
            );
          }

          if (tournis[currentindex].Game === "FIFA") {
            tournamentEmbed.setImage(
              "https://mytourni.com/images/fifa-logo.jpg"
            );
          }

          if (tournis[currentindex].Game === "Brawlhalla") {
            tournamentEmbed.setImage(
              "https://mytourni.com/images/brawl-logo.jpg"
            );
          }

          if (tournis[currentindex].Game === "Rocket League") {
            tournamentEmbed.setImage(
              "https://mytourni.com/images/rocket-league-logo.jpg"
            );
          }
          interaction.reply({
            embeds: [tournamentEmbed],
            components: [buttons],
            ephemeral: true,
          });
        }
      }
    );
  }
  if (interaction.customId == "previous") {
    currentindex = currentindex - 1;
    let row;
    console.log(currentindex);
    db.query(
      `SELECT * FROM "tournaments" ORDER BY "tournament_ID" asc `,
      (err, res) => {
        if (!err) {
          tournis = res.rows;

          if (tournis[currentindex - 1] == undefined) {
            row = new ActionRowBuilder().addComponents(
              new ButtonBuilder()
                .setCustomId("previous")
                .setLabel("Previous")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(true),

              new ButtonBuilder()
                .setCustomId("register")
                .setLabel("Register")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false),

              new ButtonBuilder()
                .setCustomId("next")
                .setLabel("Next")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false)
            );
          } else {
            row = new ActionRowBuilder().addComponents(
              new ButtonBuilder()
                .setCustomId("previous")
                .setLabel("Previous")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false),

              new ButtonBuilder()
                .setCustomId("register")
                .setLabel("Register")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false),

              new ButtonBuilder()
                .setCustomId("next")
                .setLabel("Next")
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false)
            );
          }
          buttons = row;
          const tournamentEmbed = new EmbedBuilder()
            .setColor("#0099ff")
            .setTitle("Current Tournaments")
            .setURL("https://Mytourni.com/tournaments.html")
            .setDescription("Tournaments you can register for!")
            .setTimestamp()
            .setThumbnail("https://mytourni.com/images/logo.png")
            .addFields(
              { name: "Game:", value: `${tournis[currentindex].Game}` },
              {
                name: "Prize:",
                value: `${tournis[currentindex].Prize}`,
                inline: true,
              }
            )
            .setFooter({
              text: "MyTourni 2022",
            });
          embed1 = tournamentEmbed;

          tournamentEmbed.addFields(
            {
              name: "Entry Fee:",
              value: `${
                tournis[currentindex].entry == 0
                  ? "Free Entry!"
                  : tournis[currentindex].entry
              }`,
            },

            {
              name: "Date",
              value: `${tournis[currentindex].Day}`,
              inline: true,
            },
            {
              name: "Time",
              value: `${tournis[currentindex].Time}`,
              inline: true,
            },
            { name: "Sponsor:", value: `${tournis[currentindex].sponsor}` }
          );

          switch (tournis[currentindex].Game) {
            case "Call Of Duty":
              tournamentEmbed.setImage(
                "https://mytourni.com/images/warzone-logo.webp"
              );
              break;

            case "Clash Royale":
              tournamentEmbed.setImage(
                "https://mytourni.com/images/clash-royale-logo.jpg"
              );
              break;

            case "FIFA":
              tournamentEmbed.setImage(
                "https://mytourni.com/images/fifa-logo.jpg"
              );
              break;

            case "Brawlhalla":
              tournamentEmbed.setImage(
                "https://mytourni.com/images/brawl-logo.jpg"
              );
              break;

            case "Rocket League":
              tournamentEmbed.setImage(
                "https://mytourni.com/images/rocket-league-logo.jpg"
              );
              break;

            default:
              tournamentEmbed.setImage(
                "https://mytourni.com/images/warzone-logo.webp"
              );
              break;
          }
          interaction.reply({
            embeds: [tournamentEmbed],
            components: [buttons],
            ephemeral: true,
          });
        }
      }
    );
  }
});
