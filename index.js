const Commando = require('discord.js-commando');
const { prefix, token } = require('./config.json');
const client = new Commando.Client();

client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

client.login(token);