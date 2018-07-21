var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, { colorize: true });

logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0].toUpperCase();
       
        args = args.splice(1);
        switch(cmd) {
			// Lists all commands
			case 'HELP':
				bot.sendMessage({
					to: channelID,
					message: 'Current Commands:\n!help\n!Share(Disabled)'
				});
			break;
			
			case 'DAKKA':
				bot.sendMessage({
					to: channelID,
					message: '<blockquote class="imgur-embed-pub" lang="en" data-id="kEBM36H"><a href="//imgur.com/kEBM36H">Make the casings green arrows and the muzzle fire red, would make for a great downvote gif.</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>'
				});
			break;
			
			// Gives the link to the shared google drive
			/*case 'Share':
				bot.sendMessage({
					to: channelID,
					message: 'https://drive.google.com/open?id=1rG4nQaK-i-NjJsfoNKGNQLpsvuWCGZXH'
				})
			break;;*/
         }
     }
});