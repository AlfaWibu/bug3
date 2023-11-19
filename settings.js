//base by Novi (Novi Bot Inc.)
//YouTube: @novi Official 
//Instagram: novinnvl_21
//Telegram: t.me/NoviRaiden
//GitHub: @Novi
//WhatsApp: +6287715768324
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@Novi_Novy

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "6287715768324"
global.ownername = "Alfa"
global.ytname = "YT: AlfaBree"
global.socialm = "GitHub: AlfaWibu"
global.location = "Indonesia, Jawa Tengah"

global.ownernumber = '6287715768324'  //creator number
global.ownername = 'Alfa' //owner name
global.botname = 'Fa-Code' //name of the bot

//sticker details
global.packname = ''
global.author = 'Alfa'

//console view/theme
global.themeemoji = '🪀'
global.wm = "Alfa"

//theme link
global.link = 'https://chat.whatsapp.com/CpUJUvcd7XN9WrIZApfBlb'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})