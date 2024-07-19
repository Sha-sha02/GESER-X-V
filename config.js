const fs = require('fs')
//===========================//

const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')

//===========================//

global.d = new Date()
global.calender = d.toLocaleDateString('id')

//===========================//
/* DILARANG JUAL SC DASAR JB */
//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = ""
global.apikey = ""
global.capikey = ""

//BOT BY CAESAR//
//EDIT TEKS DI //LIST YA 
// Text By @yangtaggasik (Fanz) Biltol
//===========================//
//—————「 Set Nama Own & Bot 」—————//=====================//
//Ini Waktu | Waktu adalah emas,maka dari itu sentuh lah rumput.dan jangan nolep dikamar terus,usahakan tu kontol jangan dikocok terus.Lutut ama sikut lu kopong nanti
global.prefa = ['/']                                      //
global.owner = ['2349060509982','2348078112891']                                  //
global.ownMain = '2349060509982,2348078112891'                               //
global.gris = '`'                                                 //
global.namaowner = "Caesar"                         //
global.namaowner2 = "Caesar"                       //
global.namaowner = 'Caesar'                        //
global.NamaOwner = 'Caesar' //CAE      //
global.namabot = 'Caesar' //CAE.            //
global.namabot2 = 'Caesar' //CAE.          //
//==================================================//
global.saluran = 'https://chat.whatsapp.com/GaJPTKxSLHT33L3ue2jpNY' //
global.idsaluran = "120363198449115557@newsletter" // opsional ID saluran //
//———————————————————————————————————————//
//SYSTEM LAINNYA
global.author = `Outlaw` // ubah aja ini nama sticker
global.hiasan = `	◦  `
global.tTeks = '      ◦‎‎‎  .'
global.tTeks2 = '> '

global.author = 'Dingin' //ganti aj klo mau
global.packname = 'Uchiha' //ganti aj klo mau
global.footer = (`_simple whatsapp bot made by _`) // Ganti Aja Tanda ` ` Jan Dihapus
global.footer2 = (`simple whatsapp bot made by `) // Ganti Aja Tanda ` ` Jan Dihapus
global.yt = '-' //gausah diganti

// SESSION
global.sessionName = 'session' // Gausah Di Ganti 

// PAIRING OR SCAN?
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code

//FITUR EVENT//
//========== Setting Event ==========//
global.antibug = true // TERSERAH MAU FALSE ATAU TRUE
global.owneroff = false // TERSERAH MAU FALSE ATAU TRUE

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = 08111
global.gopay = 08111
global.ovo = 081111
global.qris = fs.readFileSync("./media/qris.jpg")

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500
//===========================//
//APIKEYS
global.skizo = `Twelve`
global.skizo2 = `kyuu`
//===========================//

global.listr = ` │⬡ 1GB Cpu: 50% - 3.000/bln
 │⬡ 2GB Cpu: 70% - 5.000/bln
 │⬡ 3GB Cpu: 90% - 7.000/bln
 │⬡ 4GB Cpu: 110% - 9.000/bln
 │⬡ 5GB Cpu: 130% - 11.000/bln
 │⬡ 6GB Cpu: 150% - 13.000/bln
 │⬡ 7GB Cpu: 170% - 15.000/bln
 │⬡ 8GB Cpu: 200% - 17.000/bln`
 
//===========================//

global.country = `62`
global.system = {
gmail: `bzzyour@gmail.com`,
}

//===========================//

global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',

	menut: '––––––『',
menuh: '』––––––',
menub: '┊☃︎ ',
menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',

	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}

//===========================//

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '📊',
limit: '🎫',
health: '❤️',
exp: '✨',
atm: '💳',
money: '💰',
bank: '🏦',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🛍️',
mythic: '🎁',
legendary: '🗃️',
superior: '💼',
pet: '🔖',
trash: '🗑',
armor: '🥼',
sword: '⚔️',
pickaxe: '⛏️',
fishingrod: '🎣',
wood: '🪵',
rock: '🪨',
string: '🕸️',
horse: '🐴',
cat: '🐱',
dog: '🐶',
fox: '🦊',
robo: '🤖',
petfood: '🍖',
iron: '⛓️',
gold: '🪙',
emerald: '❇️',
upgrader: '🧰',
bibitanggur: '🌱',
bibitjeruk: '🌿',
bibitapel: '☘️',
bibitmangga: '🍀',
bibitpisang: '🌴',
anggur: '🍇',
jeruk: '🍊',
apel: '🍎',
mangga: '🥭',
pisang: '🍌',
botol: '🍾',
kardus: '📦',
kaleng: '🏮',
plastik: '📜',
gelas: '🧋',
chip: '♋',
umpan: '🪱',
skata: '🧩'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}
}

//===========================//

   //Respon
global.mess = { // bagian ini gausah diganti 
 ingroup: 'This feature can only be used in groups.',
 admin: 'This feature is specifically for group admins.',
 error: 'This Feature Can Err',
 owner: 'You are not the owner.',
 premium: 'You are not a premium user.',
 seller: 'This feature can only be used by resellers and owners.',
 usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid? 🤓`,
 wait: '*Waiting for processing 🗿🚬*',
 success: 'Success Bang 🗿🚬',
 bugrespon: `✅Sharp🗿🚬`
}

//===========================//

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
