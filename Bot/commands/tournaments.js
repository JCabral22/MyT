const { SlashCommandBuilder } = require("discord.js");
const { Client: DB } = require("pg");
const db = new DB({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "postgres",
  database: "MyTourni",
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tournaments")
    .setDescription("Shows all upcoming tournaments!"),
};
