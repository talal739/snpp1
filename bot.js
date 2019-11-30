const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("650246372536352792")
setInterval(function() {
channel.send(`#daily`);
}, 30)
})

client.login("NjUwMjQxNjU5NzkxMjEyNTQ0.XeIoyA._8JhGx33t22VuOZIexnWtqUWOcc");