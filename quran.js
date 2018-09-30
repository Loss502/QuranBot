const Discord = require("discord.js");
const client = new Discord.Client();
const yt = require('ytdl-core');

client.on('ready', () => {
console.log('Logging into discord..');
console.log(`
By Majd
`);

});






function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('.' + str);
}

function pluck(array) {
    return array.map(function(item) { return item['name']; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }





var servers = {};






var q1 = ".quran 1"

var q2 = ".quran 2"

var q3 = ".quran 3"

var q4 = ".quran 4"





function play(connection, message) {
	var server = servers[message.guild.id];

	server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));

	server.queue.shift();

	server.dispatcher.on("end", function() {
		if (server.queue[0]) play(connection, message);
		else connection.disconnect();
	});
}

client.on("ready", () => {
	console.log(`Quran bot is in ${client.guilds.size} servers `)
});

var PREFIX = ".";



//sowar


client.on("message", message => {

	                    if (message.content === q1 ) {
                  message.react('ðŸ”Š')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`ÙŠØ±Ø¬Ù‰ Ø£Ù† ØªÙƒÙˆÙ† ÙÙŠ Ù‚Ù†Ø§Ø© ØµÙˆØªÙŠÙ‡ Ø£ÙˆÙ„Ø§!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=V4b9f9BQTKI', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
  	                    if (message.content === q2 ) {
                  message.react('ðŸ”Š')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`ÙŠØ±Ø¬Ù‰ Ø£Ù† ØªÙƒÙˆÙ† ÙÙŠ Ù‚Ù†Ø§Ø© ØµÙˆØªÙŠÙ‡ Ø£ÙˆÙ„Ø§!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/0m02xNtR8gA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
    	                    if (message.content === q3 ) {
                  message.react('ðŸ”Š')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`ÙŠØ±Ø¬Ù‰ Ø£Ù† ØªÙƒÙˆÙ† ÙÙŠ Ù‚Ù†Ø§Ø© ØµÙˆØªÙŠÙ‡ Ø£ÙˆÙ„Ø§!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=4JvY-MccxNk', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
      	                    if (message.content === q4 ) {
                  message.react('ðŸ”Š')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`ÙŠØ±Ø¬Ù‰ Ø£Ù† ØªÙƒÙˆÙ† ÙÙŠ Ù‚Ù†Ø§Ø© ØµÙˆØªÙŠÙ‡ Ø£ÙˆÙ„Ø§!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
    
    
    //outher_cummon  
    
  
  if(message.content === ".stop" ) {
      			var servers = {};

			if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	
  }

  if(message.content === ".help") {
    message.channel.send(` QuranBot
:mosque: .quran 1  :   Ø§Ù„Ù‚Ø±Ø§Ù† Ø§Ù„ÙƒØ±ÙŠÙ… ÙƒØ§Ù…Ù„ Ø¨ØµÙˆØª Ø§Ù„Ø´ÙŠØ® Ø¹Ø¨Ø¯Ø§Ù„Ø¨Ø§Ø³Ø· Ø¹Ø¨Ø¯Ø§Ù„ØµÙ…Ø¯ 

:mosque: .quran 2  :   Ø³ÙˆØ±Ø© Ø§Ù„Ø¨Ù‚Ø±Ø© ÙƒØ§Ù…Ù„Ø© - Ø§Ù„Ù‚Ø§Ø±Ø¦ Ø§Ù„Ø­Ø§Ø¬ Ù…ÙŠØ«Ù… Ø§Ù„ØªÙ…Ø§Ø± (QURAN)

:mosque: .quran 3  :   Ø§Ù„Ù‚Ø±Ø¢Ù† Ø§Ù„ÙƒØ±ÙŠÙ… ÙƒØ§Ù…Ù„ Ø¨ØµÙˆØª Ø§Ù„Ø´ÙŠØ® Ø¹Ø¨Ø¯ Ø§Ù„Ø±Ø­Ù…Ù† Ø§Ù„Ø³Ø¯ÙŠØ³ ÙˆØ³Ø¹ÙˆØ¯ Ø§Ù„Ø´Ø±ÙŠÙ… 

:mosque: .quran 4  :   Ø§Ù„Ù‚Ø±Ø¢Ù† Ø§Ù„ÙƒØ±ÙŠÙ… ÙƒØ§Ù…Ù„ Ø¨ØµÙˆØª Ø§Ù„Ø´ÙŠØ® Ø§Ù„Ù…Ø¹ÙŠÙ‚Ù„ÙŠ

:mosque: .stop     : Ù„Ù€ Ø£ÙŠÙ‚Ø§Ù ØªØ´ØºÙŠÙ„ Ø§Ù„Ø¨ÙˆØª `)
}
 
	    
});



client.login("NDk2MDYwMDY1MDMyNDM3Nzgw.DpLH5w.T_0NzlDRdJICx3drLLsnsaZh9YA");
