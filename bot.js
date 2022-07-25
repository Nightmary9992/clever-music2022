const Cluster = require('discord-hybrid-sharding');
const Discord = require('discord.js');

const client = new Discord.Client({
    shards: Cluster.data.SHARD_LIST, // An array of shards that will get spawned
    shardCount: Cluster.data.TOTAL_SHARDS, // Total number of shards
});

client.cluster = new Cluster.Client(client); // initialize the Client, so we access the .broadcastEval()
client.login('OTYxOTg4NzY3MDU1NDk1MjI5.GRDEgl.yXJRCzx7AGY_ms1T18sUXGU-QGlK0X8Sgq5SKE');