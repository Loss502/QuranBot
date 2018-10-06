const Discord = require("discord.js");
const client = new Discord.Client();
const yt = require('ytdl-core');

client.on('ready', () => {
client.user.setGame('.help | .invite | Bot By: DzDev99','https://www.twitch.tv/peery13');
console.log('Logging into discord..');
console.log(`
By DzDev99
`);

});




client.on('message', message => {
    if(message.content.startsWith('.st')) {
        var arg = message.content.split(' ').slice(1).join(' ');
        client.user.setGame(arg, "https://www.twitch.tv/9ivv");
        console.log('Streaming.');
    }
});

client.l



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






var q1 = ".quranfullb"

var q2 = ".quranbhaitham"

var q3 = ".quranfulls"

var q4 = ".quranfulllm"





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
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=vqXLGtZcUm8', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
  	                    if (message.content === q2 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/0m02xNtR8gA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
    	                    if (message.content === q3 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=4JvY-MccxNk', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
      	                    if (message.content === q4 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
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
    message.channel.send(` 
╭━━━╮╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃╭━╮┃╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃┃╱┃┣╮╭┳━┳━━┳━╮┃╰╯╰┳━┻╮╭╯
┃┃╱┃┃┃┃┃╭┫╭╮┃╭╮┫╭━╮┃╭╮┃┃
┃╰━╯┃╰╯┃┃┃╭╮┃┃┃┃╰━╯┃╰╯┃╰╮
╰━━╮┣━━┻╯╰╯╰┻╯╰┻━━━┻━━┻━╯
╱╱╱╰╯
╭━━╮╱╱╱╱╱╭━━━╮╱╱╱╭━━━╮╱╱╱╱╱╭━━━┳━━━╮
┃╭╮┃╱╱╱╱╱╰╮╭╮┃╱╱╱╰╮╭╮┃╱╱╱╱╱┃╭━╮┃╭━╮┃
┃╰╯╰┳╮╱╭╮╱┃┃┃┣━━━╮┃┃┃┣━━┳╮╭┫╰━╯┃╰━╯┃
┃╭━╮┃┃╱┃┃╱┃┃┃┣━━┃┃┃┃┃┃┃━┫╰╯┣━━╮┣━━╮┃
┃╰━╯┃╰━╯┃╭╯╰╯┃┃━━╋╯╰╯┃┃━╋╮╭╋━━╯┣━━╯┃
╰━━━┻━╮╭╯╰━━━┻━━━┻━━━┻━━╯╰╯╰━━━┻━━━╯
╱╱╱╱╭━╯┃
╱╱╱╱╰━━╯

:mosque: .quranfullb  :   القران الكريم كامل بصوت الشيخ عبدالباسط عبدالصمد 

:mosque: .quranbhaitham  :   سورة البقرة كاملة - القارئ الحاج ميثم التمار (QURAN)

:mosque: .quranfulls  :   القرآن الكريم كامل بصوت الشيخ عبد الرحمن السديس وسعود الشريم 

:mosque: .quranfullm  :   القرآن الكريم كامل بصوت الشيخ المعيقلي

:mosque: .stop     : لـ أيقاف تشغيل البوت

:mosque: .st     : لـ تغيير حالة البوت

                  :mosque:  By : DzDev99
`)
}
 
	    
});

client.login("NDk4MjA1OTYxMDg5OTc0Mjgy.DpqYUQ.4A3xuOcN6HNU7ywg9ESkBVGZAcw");
