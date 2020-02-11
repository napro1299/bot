const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const { token } = require('./config.json');

const client = new CommandoClient({
    commandPrefix: '!',
    owner: '668954340584849409'
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['random', 'Random commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('I see you');
});

client.on('error', console.error);

client.login(token);