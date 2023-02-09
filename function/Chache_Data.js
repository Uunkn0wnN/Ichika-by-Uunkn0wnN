const fs = require('fs');
const chalk = require('chalk')
const moment = require('moment')
const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')

function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

function nocache(module, cb = () => { }) {
console.log(chalk.gray(`[DEBUG]`) + chalk.cyanBright(`| Loaded module "${module}" ✅`))
console.log(chalk.cyanBright(`________`))
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

// HOME

require('../config')
nocache('../config', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../conn')
nocache('../conn', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../help')
nocache('../help', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../kategorimenu')
nocache('../kategorimenu', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../main')
nocache('../main', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../nsfw.js')
nocache('../nsfw.js', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../nsfw.json')
nocache('../nsfw.json', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

// FUNCTION

require('./Chache_Data.js')
nocache('./Chache_Data.js', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./console')
nocache('./console', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./Data_Location')
nocache('./Data_Location', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./Exif_Write')
nocache('./Exif_Write', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./func_Addlist')
nocache('./func_Addlist', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./func_Bugfc')
nocache('./func_Bugfc', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./func_Server')
nocache('./func_Server', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./func_Spam')
nocache('./func_Spam', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./func_Stalker')
nocache('./func_Stalker', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./group_Respon')
nocache('./group_Respon', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./jadibot')
nocache('./jadibot', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./module')
nocache('./module', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./myfunc')
nocache('./myfunc', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./scrape_Mediafire')
nocache('./scrape_Mediafire', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./Search_Cerpen')
nocache('./Search_Cerpen', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./set_WM_Sticker')
nocache('./set_WM_Sticker', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./update_Group')
nocache('./update_Group', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./uploader_Media')
nocache('./uploader_Media', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('./Webp_Tomp4')
nocache('./Webp_Tomp4', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

// FUNCTION/Data_Server_Bot
require('../function/Data_Server_Bot/Call_AutoBlock')
nocache('../function/Data_Server_Bot/Call_AutoBlock', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Data_Server_Bot/Console_Data')
nocache('../function/Data_Server_Bot/Console_Data', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Data_Server_Bot/Memory_Store')
nocache('../function/Data_Server_Bot/Memory_Store', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Data_Server_Bot/Status_Connect')
nocache('../function/Data_Server_Bot/Status_Connect', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

// FUNCTION/RANDOM_IMAGE

require('../function/Random_IMAGE/bocil')
nocache('../function/Random_IMAGE/bocil', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Random_IMAGE/boneka')
nocache('../function/Random_IMAGE/boneka', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Random_IMAGE/cecan')
nocache('../function/Random_IMAGE/cecan', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Random_IMAGE/cogan')
nocache('../function/Random_IMAGE/cogan', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Random_IMAGE/darkjokes')
nocache('../function/Random_IMAGE/darkjokes', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Random_IMAGE/hijaber')
nocache('../function/Random_IMAGE/hijaber', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Random_IMAGE/islamic')
nocache('../function/Random_IMAGE/islamic', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Random_IMAGE/mobil')
nocache('../function/Random_IMAGE/mobil', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Random_IMAGE/programing')
nocache('../function/Random_IMAGE/programing', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Random_IMAGE/rika')
nocache('../function/Random_IMAGE/rika', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Random_IMAGE/santuy')
nocache('../function/Random_IMAGE/santuy', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Random_IMAGE/tatasurya')
nocache('../function/Random_IMAGE/tatasurya', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Random_IMAGE/ukhty')
nocache('../function/Random_IMAGE/ukhty', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/Random_IMAGE/wallhp')
nocache('../function/Random_IMAGE/wallhp', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

//FUNCTION/VIRTEX

require('../function/virtex/ngazap')
nocache('../function/virtex/ngazap', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/virtex/philips')
nocache('../function/virtex/philips', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../function/virtex/virus')
nocache('../function/virtex/virus', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

//DATABASE

require('../database/antilink')
nocache('../database/antilink', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../database/db_addlist')
nocache('../database/db_addlist', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../database/func_error')
nocache('../database/func_error', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../database/instaDown')
nocache('../database/instaDown', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../database/menfess')
nocache('../database/menfess', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

 require('../database/message')
nocache('../database/message', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../database/pengguna')
nocache('../database/pengguna', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../database/tiktokDown')
nocache('../database/tiktokDown', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../database/ytDown')
nocache('../database/ytDown', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../database/welcome')
nocache('../database/welcome', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../package')
nocache('../package', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))

require('../package-lock')
nocache('../package-lock', module => console.log(chalk.greenBright('[ SYSTEM ]  ') + chalk.cyanBright(`"${module}" perubahan terdeteksi!`)))



module.exports = { nocache, uncache }   