const Commando = require('discord.js-commando');
const randompuppy = require('random-puppy');
const snekfetch = require('snekfetch');

class RedditCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'reddit',
            group: 'random',
            memberName: 'reddit',
            description: 'reddit bruh',
            examples: ['!reddit aww']
        });
    }

    run(msg, args) {
        let reddit = [
            "aww",
            "Gifs",
            "NatureIsMetal",
            "pics",
        ];

        let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];

        msg.startTyping();

        randompuppy(subreddit).then(url => {
            snekfetch.get(url).then(async res => {
                await msg.say({
                    files: [{
                        attachment: res.body,
                        name: 'meme.png'
                    }]
                }).then(() => msg.stopTyping());
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));
    }
}

module.exports = RedditCommand;