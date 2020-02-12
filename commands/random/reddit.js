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
            examples: ['!reddit aww'],
            args: [
                { 
                    key: 'subreddit',
                    prompt: 'Subreddit',
                    type: 'string'
                }
            ]
        });
    }

     run(msg, { subreddit }) {
        let reddit = [
            "aww",
            "gifs"
        ];

        //reddit[Math.floor(Math.random() * reddit.length - 1)];
    

        msg.channel.startTyping();

        randompuppy(subreddit).then(url => {
            snekfetch.get(url).then(async res => {
                await msg.say({
                    files: [{
                        attachment: res.body,
                        name: 'meme.png'
                    }]
                }).then(() => msg.channel.stopTyping());
            }).catch(err => {console.error(err); 
                msg.channel.stopTyping();
            });
        }).catch(err => {console.error(err); 
            msg.channel.stopTyping();
        });
    }
}

module.exports = RedditCommand;
