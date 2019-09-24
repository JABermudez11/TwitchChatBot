const TwitchJs = require('twitch-js').default;

const token = 'oauth:chy2dzb5xvrs4y8csj0y0o9qlp2oxo';   // from twitchapps
const username = 'ViewerPicker';                        // username of bot
const channel = 'thejurtle';                            // the best channel

const { api, chat, chatConstants } = new TwitchJs({ token, username });

chat.connect().then(() => {

  chat.join(channel, 'Bot is kinda HERE')
  chat.say(channel, 'Bot is NOW!');                  // puts message out with wrong user

  chat.on('PRIVMSG', privateMessage => {

    chat.say(channel, 'SORRY, I cannot respond to private msgs :)')
  })

})
