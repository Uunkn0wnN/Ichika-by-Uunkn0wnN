
// disini atur aja kak list kategori menu bot nya
// jangan lupa hapus fitur yg ga aktif

var monoSpace = '```'

exports.listmain = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}

⌬ *MAIN MENU* ⌬
   ╟ menu
   ╟ nsfw
   ╟ iklan
   ╟ rules
   ╟ owner
   ╟ script
   ╟ infobot
   ╟ donasi
   ╟ donate
   ╟ jadibot
   ╟ listjadibot
   ╟ sewabot
   ╟ groupbot
   ╟ ownerinfo
   ╙ infoowner
`
}
exports.listuser = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *USER MENU* ⌬
   ╟ verify
   ╟ report
   ╟ request
   ╟ transfer
   ╟ menfess
   ╟ buatroom
   ╟ secretchat
   ╟ cekprem
   ╟ premium
   ╙ changename
`
}
exports.listowner = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *OWNER MENU* ⌬
   ╟ error
   ╟ clearerr
   ╟ siaran
   ╟ session
   ╟ db
   ╟ send
   ╟ sendconn
   ╟ sendmain
   ╟ sendmenu
   ╟ sendnsfw
   ╟ senddblist
   ╟ resetdb
   ╟ runtime
   ╟ setexif
   ╟ setwm
   ╟ setfooter
   ╟ setppbot
   ╟ addprem
   ╟ delprem
   ╟ bc
   ╟ bctext
   ╟ bcvideo
   ╟ bcaudio
   ╟ bcimage
   ╙ broadcast
`
}
exports.liststore = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *STORE MENU* ⌬
   ╟ kali 1 2
   ╟ bagi 1 2
   ╟ kurang 1 2
   ╟ tambah 1 2
   ╟ dellist key
   ╟ addlist key@response
   ╟ update key@response
   ╟ done <reply orderan>
   ╟ proses <reply orderan>
   ╟ list <only group>
   ╙ shop <only group>
`
}
exports.listgroup = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *GROUP MENU* ⌬
   ╟ fitnah
   ╟ delete
   ╟ revoke
   ╟ tagall
   ╟ hidetag
   ╟ setdesc
   ╟ linkgrup
   ╟ infogroup
   ╟ setppgrup
   ╟ setnamegrup
   ╟ group open
   ╟ group close
   ╟ antilink on
   ╟ antilink off
   ╟ welcome on
   ╟ welcome off
   ╟ tiktokauto on
   ╟ tiktokauto off
   ╟ ytauto on
   ╟ ytauto off
   ╟ kick @tag
   ╟ demote @tag
   ╙ promote @tag
`
}
exports.listdect = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *AUTODECT MENU* ⌬
   ╟ sadcat
   ╟ translate
   ╟ stalkff
   ╟ stalknpm
   ╟ stalkgithub
   ╟ balikhuruf
   ╟ balikangka
   ╟ besarkecil
   ╙ bilangangka
`
}
exports.listinternet = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *INTERNET MENU* ⌬
   ╟ tiktok
   ╟ play
   ╟ ytmp3
   ╟ ytmp4 
   ╟ google
   ╟ pinterest
   ╟ fb
   ╟ lirik
   ╟ steam
   ╟ itunes
   ╟ playmp3
   ╟ playmp4
   ╟ gitclone
   ╟ mediafire
   ╟ wikimedia
   ╟ wikipedia
   ╟ soundcloud
   ╙ infogempa
`
}
exports.listcovert = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *CONVERT MENU* ⌬
   ╟ tts
   ╟ ttp
   ╟ ttp2
   ╟ attp
   ╟ attp2
   ╟ tourl
   ╟ upload
   ╟ toimg
   ╟ toimage
   ╟ tomp3
   ╟ toaudio
   ╟ tomp4
   ╟ tovideo
   ╟ emojimix (api error)
   ╟ emojmix (api error)
   ╟ emojinua (api error)
   ╟ mixemoji (api error)
   ╟ stiker (error)
   ╟ sticker(error)
   ╟ sgif (api error)
   ╟ stikergif (api error)
   ╟ stickergif( api error)
   ╟ swm ( api error)
   ╟ stikerwm (api error)
   ╟ stickerwm (api error)
   ╟ smeme (api error)
   ╟ memestiker (api error)
   ╟ stikermeme (api error)
   ╟ stickermeme (api error)
   ╟ takesticker (api error)
   ╟ emojinua2 (error)
   ╟ mixemoji2(error)
   ╟ emojmix2 (error)
   ╙ emojimix2 (error)
`
}
exports.listtools = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *TOOLS MENU* ⌬
   ╟ spamcall
   ╟ qrcode
   ╟ mcskin
   ╟ morse
   ╟ binary
   ╟ binary-translate
   ╟ translate
   ╟ ssweb
   ╟ bitly_short
   ╟ cuttly_short
   ╟ tinyurl_short
   ╟ base32
   ╟ base64
   ╟ debase32
   ╙ debase64
`
}
exports.listvirus = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *VIRUS MENU* ⌬
   ╟ sendbug 628xxx
   ╟ philips 628xxx
   ╟ philips2 628xxx
   ╟ philips3 628xxx
   ╟ santet @tag
   ╟ santet2 @tag
   ╟ santet3 @tag
   ╟ virtex 628xxx
   ╟ virtex2 628xxx
   ╟ virtex3 628xxx
   ╟ bug1 628xxx
   ╟ bug2 628xxx
   ╟ bug3 628xxx
   ╟ bug4 628xxx
   ╙ bug5 628xxx
 `
 }
 exports.listcekrandom = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *CEKRANDOM MENU*  ⌬
   ╟ cekjelek
   ╟ cekcantik
   ╟ cekganteng
   ╟ ceksad
   ╟ cekharam
   ╟ cekhalal
   ╟ cekbego
   ╟ cekanjing
   ╟ cekbiadab
   ╟ cekramah
   ╟ ceksatir
   ╟ cekmanis
   ╟ cekpahit
   ╟ cekhitam
   ╟ cekrasis
   ╟ cekbaik
   ╟ cekjahat
   ╟ cekkaya
   ╟ cekmiskin
   ╟ cekpintar
   ╟ cekbodoh
   ╟ cekimut
   ╟ cekkocak
   ╙ cekkadang
`
}
exports.listsertifikat = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *SERTIFIKAT MENU* ⌬
   ╟ toloserti <nama>
   ╟ badgirlserti <nama>
   ╟ goodgirlserti <nama>
   ╟ fuckgirlserti <nama>
   ╙ bucinserti <nama>
 `
 }
 exports.listlogo = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *LOGO MENU* ⌬
   ╟ joker ( error server )
   ╟ digital ( error server )
   ╟ nulis ( error server )
   ╟ nulis2 ( error server )
   ╟ quoteser ( error server )
   ╟ quobucin ( error server )
   ╟ rem ( error server )
   ╟ girlneko ( error server )
   ╟ sadboy ( error server )
   ╟ kaneki ( error server )
   ╙ lolimaker ( error server )
`
}
exports.listanonymous = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *ANONYMOUS MENU* ⌬
   ╟ buatroom 628xxx
   ╟ room <only owner>
   ╟ stopchat <only room>
   ╙ menfess 628xx|bot|hai
`
}
exports.listsosmed = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *SOSMED MENU* ⌬
   ╟ pricelist <layanan>
   ╟ order <cara order>
   ╟ like jumlah|target
   ╟ view jumlah|target
   ╟ follower jumlah|username
   ╟ cekstatus <idtrx>
   ╟ komisi <owner only>
   ╙ tarikkomisi <owner only>
 `
 }
 exports.listvokal = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *VOKAL MENU*  ⌬
   ╟ hilih <text>
   ╟ halah <text>
   ╟ huluh <text>
   ╟ heleh <text>
   ╙ holoh <text>
 `
 }
 exports.listrandom = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *RANDOM MENU* ⌬ 
   ╟ nenen
   ╟ genjot
   ╟ wangy
   ╟ curhat
   ╟ perkosa
   ╟ cecan
   ╟ cogan
   ╟ mobil
   ╟ islamic
   ╟ darkjokes
   ╟ boneka
   ╟ wallhp
   ╟ tatasurya
   ╙ programing
`
}
exports.listprimbon = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *PRIMBON MENU* ⌬ 
   ╟ ramaljodoh
   ╟ ramalanjodoh
   ╟ nomorhoki
   ╟ artimimpi
   ╟ artinama
   ╟ sifatusaha
   ╟ tafsirmimpi
   ╟ pasangan
   ╟ suamiistri
   ╟ ramalcinta
   ╟ ramalancinta
   ╟ ramaljodohbali
   ╟ ramalanjodohbali
   ╟ cocoknama
   ╟ kecocokannama
   ╟ cocokpasangan
   ╙ kecocokanpasangan
`
}
exports.listgacha = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *GACHA MENU* ⌬
   ╟ rika
   ╟ bocil
   ╟ ukhty
   ╟ santuy
   ╙ hijaber
`
}
exports.listaudioc = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *AUDIO CHANGER MENU* ⌬
   ╟ fat
   ╟ fast
   ╟ slow
   ╟ bass
   ╟ deep
   ╟ tupai
   ╟ robot
   ╟ blown
   ╟ smooth
   ╟ earrape
   ╟ reverse
   ╙ nightcore
`
}
exports.listinformation = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *INFOMATION MENU* ⌬ 
   ╟ gempa
   ╟ jadwaltv
   ╟ gempanow
   ╟ bioskopnow
   ╟ latintoaksara
   ╙ aksaratolatin
`
}
exports.liststicker = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *STICKER RANDOM MENU* ⌬ 
   ╟ dadu
   ╟ anjing
   ╟ patrick
   ╟ bucinstick
   ╟ gawrgura
   ╙ amongus
`
}
exports.listaudio = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *AUDIO MENU* ⌬ 
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╟ audio${ad++}
   ╙ audio${ad++}
 `
 }
 exports.listcekmenu = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *CEK MENU* ⌬ 
   ╟ goblokcek 
   ╟ jelekcek 
   ╟ gaycek
   ╟ lesbicek
   ╟ gantengcek 
   ╟ cantikcek
   ╟ begocek 
   ╟ suhucek
   ╟ pintercek
   ╟ jagocek
   ╟ nolepcek
   ╟ babicek
   ╟ bebancek
   ╟ baikcek
   ╟ jahatcek
   ╟ anjingcek
   ╟ haramcek
   ╟ pakboycek
   ╟ pakgirlcek
   ╟ sangecek 
   ╟ bapercek
   ╟ fakboycek
   ╟ alimcek
   ╟ suhucek
   ╟ fakgirlcek
   ╟ kerencek
   ╙ wibucek
`
}
exports.listwallpaper = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *WALLPAPER MENU* ⌬
   ╟ milf
   ╟ loli
   ╟ wallml
   ╟ waifu
   ╟ husbu
   ╟ cosplay
   ╟ ppcouple
   ╟ wallpaperislami
   ╟ wallpaperinori
   ╟ wallpaperanime
   ╟ wallpapergamer
   ╟ wallpapermeme
   ╟ wallpaperprogamer
   ╟ wallpaperteknologi
   ╙ wallpapercyber
`
}
exports.listanime = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *ANIME MENU* ⌬
   ╟ manga
   ╟ characters
   ╟ anime 
   ╟ genres
   ╟─────
   ╟ genshin
   ╟ akira 
   ╟ akiyama
   ╟ anna 
   ╟ asuna 
   ╟ ayuzawa 
   ╟ boruto 
   ╟ chiho 
   ╟ chitoge   
   ╟ deidara 
   ╟ eba 
   ╟ elaina    
   ╟ emilia 
   ╟ erza 
   ╟ gremory 
   ╟ hestia 
   ╟ hinata 
   ╟ inori  
   ╟ isuzu  
   ╟ itachi    
   ╟ itori  
   ╟ kaga   
   ╟ kagura  
   ╟ kaori   
   ╟ kaneki   
   ╟ kotori  
   ╟ kurumi  
   ╟ madara 
   ╟ megumin    
   ╟ mikasa 
   ╟ miku 
   ╟ minato 
   ╟ naruto  
   ╟ nezuko  
   ╟ onepiece 
   ╟ rize   
   ╟ sagiri     
   ╟ sakura    
   ╟ sasuke     
   ╟ shina   
   ╟ shinka    
   ╟ shinomia   
   ╟ shizuka 
   ╟ tejina   
   ╟ toukachan  
   ╟ tsunade  
   ╟ yotsuba 
   ╟ yuki    
   ╟ yumeko 
   ╟ cry
   ╟ hug
   ╟ pat
   ╟ bully
   ╟ lick
   ╟ kiss
   ╟ awoo
   ╟ waifu
   ╟ shinobu
   ╟ cuddle
   ╟ megumin
   ╟ slap
   ╟ neko
   ╟ wink
   ╟ dance
   ╟ poke
   ╟ glomp
   ╟ bite
   ╟ nom
   ╟ handhold
   ╟ highfive
   ╟ wave
   ╟ smug
   ╟ smile
   ╙ bonk
`
}
exports.listcerpen = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *CERPEN MENU* ⌬
   ╟ cerpen-sejarah
   ╟ cerpen-sedih
   ╟ cerpen-sastra
   ╟ cerpen-romantis
   ╟ cerpen-rohani
   ╟ cerpen-rindu
   ╟ cerpen-remaja
   ╟ cerpen-ramadhan
   ╟ cerpen-petualangan
   ╟ cerpen-persahabatan
   ╟ cerpen-perpisahan
   ╟ cerpen-perjuangan
   ╟ cerpen-penyesalan
   ╟ cerpen-pengorbanan
   ╟ cerpen-pengalaman
   ╟ cerpen-pendidikan
   ╟ cerpen-penantian
   ╟ cerpen-patahhati
   ╟ cerpen-olahraga
   ╟ cerpen-nasionalisme
   ╟ cerpen-nasihat
   ╟ cerpen-motivasi
   ╟ cerpen-misteri
   ╟ cerpen-mengharukan
   ╟ cerpen-malaysia
   ╟ cerpen-liburan
   ╟ cerpen-kristen
   ╟ cerpen-korea
   ╟ cerpen-kisahnyata
   ╟ cerpen-keluarga
   ╟ cerpen-kehidupan
   ╟ cerpen-jepang
   ╟ cerpen-inspiratif
   ╟ cerpen-gokil
   ╟ cerpen-galau
   ╟ cerpen-cintasejati
   ╟ cerpen-cintasegitiga
   ╟ cerpen-cintasedih
   ╟ cerpen-cintaromantis
   ╟ cerpen-cintapertama
   ╟ cerpen-cintaislami
   ╟ cerpen-cinta
   ╟ cerpen-budaya
   ╟ cerpen-bahasasunda
   ╟ cerpen-bahasajawa
   ╟ cerpen-bahasainggris
   ╟ cerpen-bahasadaerah
   ╙ cerpen-anak
`
}
exports.listsound = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *SOUND MENU* ⌬
   ╟ sound1
   ╟ sound2
   ╟ sound3
   ╟ sound4
   ╟ sound5
   ╟ sound6
   ╟ sound7
   ╟ sound8
   ╟ sound9
   ╟ sound10
   ╟ sound11
   ╟ sound12
   ╟ sound13
   ╟ sound14
   ╟ sound15
   ╟ sound16
   ╟ sound17
   ╟ sound18
   ╟ sound19
   ╟ sound20
   ╟ sound21
   ╟ sound22
   ╟ sound23
   ╟ sound24
   ╟ sound25
   ╟ sound26
   ╟ sound27
   ╟ sound28
   ╟ sound29
   ╟ sound30
   ╟ sound31
   ╟ sound32
   ╟ sound33
   ╟ sound34
   ╟ sound35
   ╟ sound36
   ╟ sound37
   ╟ sound38
   ╟ sound39
   ╟ sound40
   ╟ sound41
   ╟ sound42
   ╟ sound43
   ╟ sound44
   ╟ sound45
   ╟ sound46
   ╟ sound47
   ╟ sound48
   ╟ sound49
   ╟ sound50
   ╟ sound51
   ╟ sound52
   ╟ sound53
   ╟ sound54
   ╟ sound55
   ╟ sound56
   ╟ sound57
   ╟ sound58
   ╟ sound59
   ╟ sound60
   ╟ sound61
   ╟ sound62
   ╟ sound63
   ╟ sound64
   ╟ sound65
   ╟ sound66
   ╟ sound67
   ╟ sound68
   ╟ sound69
   ╟ sound70
   ╟ sound71
   ╟ sound72
   ╟ sound73
   ╙ sound74
`
}
exports.listtextpro = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *TEXTPRO MENU* ⌬
   ╟ metallic text
   ╟ naruto text
   ╟ butterfly text
   ╟ flaming text
   ╟ shadow text
   ╟ cup text
   ╟ cup1 text
   ╟ romance text
   ╟ smoke text
   ╟ burnpaper text
   ╟ lovemessage text
   ╟ undergrass text
   ╟ love text
   ╟ coffe text
   ╟ woodheart text
   ╟ woodenboard text
   ╟ summer3d text
   ╟ wolfmetal text
   ╟ nature3d text
   ╟ underwater text
   ╟ goldenrose text
   ╟ summernature text
   ╟ letterleaves text
   ╟ glowingneon text
   ╟ fallleaves text
   ╟ flamming text
   ╟ harrypotter text
   ╟ carvedwood text
   ╟ tiktok text1 text2
   ╟ arcade8bit text1 text2
   ╟ battlefield4 text1 text2
   ╙ pubg text1 text2
`
}
exports.listephoto = (sender,prefix,ad,namenya,premnya,) => {
return`
⊱━━━ ichika ━━━⊰

⌬ User information ⌬
 ⁃ Nama : @${sender.split('@')[0]}
 ⁃ Id : ${namenya}
 ⁃ Premium : ${premnya}
 
⌬ *EPHOTO MENU* ⌬
   ╟ wetglass text
   ╟ multicolor3d text
   ╟ watercolor text
   ╟ luxurygold text
   ╟ galaxywallpaper text
   ╟ lighttext text
   ╟ beautifulflower text
   ╟ puppycute text
   ╟ royaltext text
   ╟ heartshaped text
   ╟ birthdaycake text
   ╟ galaxystyle text
   ╟ hologram3d text
   ╟ greenneon text
   ╟ glossychrome text
   ╟ greenbush text
   ╟ metallogo text
   ╟ noeltext text
   ╟ glittergold text
   ╟ textcake text
   ╟ starsnight text
   ╟ wooden3d text
   ╟ textbyname text
   ╟ writegalacy text
   ╟ galaxybat text
   ╟ snow3d text
   ╟ birthdayday text
   ╟ goldplaybutton text
   ╟ silverplaybutton text
   ╙ freefire text
 `
}
