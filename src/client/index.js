import { ShardingManager } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

let clientToken
if (process.env.NODE_ENV) {
    clientToken = process.env.clientToken
}

const manager = new ShardingManager(
    './dist/src/client/bot.js',
    {
        totalShards: 'auto',
        token: clientToken
    }
);

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();
