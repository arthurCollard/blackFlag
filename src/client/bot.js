import Discord from 'discord.js'
import dotenv from 'dotenv'

import { connection } from '../repository/repositoryConnection'
import commands, { prefix } from './constants/commands'
// import { clientTokenBackup, clientTokenEmpire } from '../secrets'


dotenv.config()
let client
let clientToken


client = new Discord.Client();
connection();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        activity: {
            name: `balls`,
            type: 'WATCHING'
        },
        status: 'online'
    })
});

client.on('shardError', error => {
    console.error('A websocket connection encountered an error:', error);
});

client.on('message', async msg => {
    const embed = new Discord.MessageEmbed()
    const { content, author, channel } = msg;
    const { username, discriminator } = author;

    //split up the statement
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!msg.content.startsWith(prefix) || msg.author.bot) return
    commands.map(commandObj => {
        commandObj.aliases.includes(command){
            commandObj.manager({ msg, client })
        }
    })

});



if (process.env.NODE_ENV) {
    clientToken = process.env.clientToken
}

client.login(clientToken)