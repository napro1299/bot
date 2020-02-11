const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

class EmbedCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'embed',
            group: 'random',
            memberName: 'embed',
            description: 'Embed text',
            examples: ['This is an embed.'],
            args: [
                { 
                    key: 'text',
                    prompt: 'Text to embed',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, { text }) { 
        const embed = new RichEmbed()
            .setDescription(text)
            .setAuthor(msg.author.username, msg.author.displayAvatarURL)
            .setColor(0x00AE86)
        .setTimestamp();

        return msg.embed(embed);
    }
}

module.exports = EmbedCommand;