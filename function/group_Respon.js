//GUA SUKA KAMU
//SIMPLE KEREN RAPIH

const fs = require('fs') 

//const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:conn\nitem1.TEL;waid=6283834558105:6283834558105\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
  
exports.groupResponse_Welcome = async (conn, update) => {
	try {
		let metadata = await conn.groupMetadata(update.id)
		for (let num of update.participants) {
			if (update.action == 'add') {
				let ppuser = await conn.profilePictureUrl(num, 'image').catch(_ => 'https://telegra.ph/file/265c672094dfa87caea19.jpg')
				let buttons = [{ buttonId: '.verify', buttonText: { displayText: 'Verify Me !'}, type: 1 }]
				await conn.sendMessage(update.id, { image: { url: ppuser }, caption: `*Hello @${num.split('@')[0]}*\n*Welcome to ${metadata.subject}* \n\n*Jangan Lupa Intro*\n*Nama:*\n*Umur:*\n*Hobi:*\n*Askot:*\n\n*Sering² Baca Deskripsi Ya Kak🙏*\njangan lupa tekan tombol verify me agar bisa menggunakan bot ya kak 😳`, footer: metadata.subject, buttons, mentions: [fkontak] })
			}
		}
	} catch (err) {
		console.log(err)
	}
}

exports.groupResponse_Remove = async (conn, update) => {
	try {
		let metadata = await conn.groupMetadata(update.id)
		for (let num of update.participants) {
			if (update.action == 'remove') {
				let ppuser = await conn.profilePictureUrl(num, 'image').catch(_ => 'https://telegra.ph/file/265c672094dfa87caea19.jpg')
				let buttons = [{ buttonId: '!text_grup', buttonText: { displayText: 'Goodbye👋'}, type: 1 }]
				await conn.sendMessage(update.id, { image: { url: ppuser }, caption: `*Goodbye @${num.split('@')[0]} *\n*${metadata.subject}*`, footer: metadata.subject, buttons, mentions: [num] })
			}
		}
	} catch (err) {
		console.log(e)
	}
}
    
exports.groupResponse_Promote = async (conn, update) => {  
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Naik jabatan jadi admin grup*`,
buttons: button, 
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Demote = async (conn, update) => {  
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} telah dihapus admin grup*`,
buttons: button, 
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
			}