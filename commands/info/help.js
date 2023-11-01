const { Client, GatewayIntentBits, Partials,EmbedBuilder, Collection ,  ButtonBuilder, ActionRowBuilder,ButtonStyle, SlashCommandBuilder} = require('discord.js');
const client = require('../..');
const config = client.config;
const db = client.db;

module.exports = {
	name: 'ping',
	description: "Check bot's ping.",
	aliases: [],
	cooldown: 3000,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {
        const helpe = new EmbedBuilder()
        .setColor(config.color)
        .setTitle('help list')
        .setDescription(`** info: **
        ${config.prefix}help 
        ${config.prefix}ping
        

        ** utility: **
        ${config.prefix}buy
        ${config.prefix}points
        

        ** admins: **
        ${config.prefix}add
        ${config.prefix}remove
        

        ** owners: **
        ${config.prefix}set-avatar
        ${config.prefix}set-name
        
        `)

	}
};