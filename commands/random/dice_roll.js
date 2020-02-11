const Commando = require('discord.js-commando');

class DiceRollCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'roll die',
            throttling: {
                usages: 2,
                duration: 10
            }
        });
    }

    run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("you rolled a " + roll);
    }

}

module.exports = DiceRollCommand;