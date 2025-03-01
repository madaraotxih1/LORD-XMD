


const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📲",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `
*╭┉┉┉┉┅┅┅══════┈┈┈┉┉┉┉*
*╏▸ رد على هذه الرسالة برقم القائمة التي تريدها*
*╏▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*╏▸* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*╏▸* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*╏▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╏▸* *ᴄʀᴇᴀᴛᴏʀ* : *➺ᴛᴇᴄʜ ʟᴏʀᴅ࿐*
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*
  ─┈┈┄┉┉┉┅┅┅☻┅┅┅┅┉┈┈┈─
*╭━━┉┉━━┉┉━━┉*
*┋☛ ➊ • ᴏᴡɴᴇʀ / المطور*
*┋☛ ➋ • ᴄᴏɴᴠᴇʀᴛ / التحويلات*
*┋☛ ➌ • ᴀɪ / الذكاء الاصطناعي*
*┋☛ ➍ • sᴇᴀʀᴄʜ / البحث*
*┋☛ ➎ • ᴅᴏᴡɴʟᴏᴀᴅ / التحميلات*
*┋☛ ➏ • ᴍᴀɪɴ / الرئيسية*
*┋☛ ➐ • ɢʀᴏᴜᴘ / المجموعات
*┋☛ ➑ • ғᴜɴ / الترفيه*
*┋☛ ➒ • ᴀɴɪᴍᴇ / االإنمي
*╿☛ ➓ • ᴏᴛʜᴇʀ / الأدوات*
*╰━━┉┉┉━━┉┉━━┉*⁠⁠

*╰┈➤ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ sᴇʟᴇᴄᴛ*

>*‏❖═══ •『𝙍𝙀𝙉🩶𝘽𝙊𝙏』 ═══❖*`;

        const vv = await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`❕ 𝙾𝚆𝙽𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ❗

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
*╏▸هناك شرح أمام كل أمر*
*╏▸من الضروري طلب الأمر باللغة الانجليزية*
╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *.ᴏᴡɴᴇʀ / المطور*
┋ ◉ *.ʀᴇᴘᴏ / المستودع*
┋ ◉ *.ꜱʏꜱᴛᴇᴍ / نظام*
┋ ◉ *.ꜱᴛᴀᴛᴜꜱ / االحالة
┋ ◉ *.ʙʟᴏᴄᴋ / حظر*
┋ ◉ *.ᴜɴʙʟᴏᴄᴋ / إلغاء الحظر*
┋ ◉ *.ᴄʟᴇᴀʀᴄʜᴀᴛs / مسح الدردشات*
┋ ◉ *.sᴇᴛᴘᴘ / تغيير بروفايل البوت*
┋ ◉ *.ʙʀᴏᴀᴅᴄᴀsᴛ / إرشال جماعي*
┋ ◉ *.ᴊɪᴅ / المستعملون*
┋ ◉ *.ɢᴊɪᴅ / معرف المستعملون*
┋ ◉ *.ʀᴇꜱᴛᴀʀᴛ / إعادة التشغيل*
┋ ◉ *.ᴜᴘᴅᴀᴛᴇ / تحديث*
┋ ◉ *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ / أمر التحديث*
┋ ◉ *.sʜᴜᴛᴅᴏᴡɴ / إقاف التشغيل*
┋ ◉ *.ᴀʟɪᴠᴇ / البث المباشر*
┋ ◉ *.ᴀʙᴏᴜᴛ / حول*
┋ ◉ *.ᴅᴇʟᴇᴛᴇ / مسح*
╰━━━━∙⋆⋅⋆∙━ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴡɴᴇʀ: 18*

>*‏❖═══ •『𝙍𝙀𝙉🩶𝘽𝙊𝙏』 ═══❖*`);
                        break;
                    case '2':               
                        reply(`❕ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ❗

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
*╏▸هناك شرح أسفل كل أمر*
*╏▸من الضروري طلب الأمر باللغة االانجليزية*
╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ᴄᴏɴᴠᴇʀᴛ / تحويل* 
┋ ◉ *s* 
┋ ◉ *sᴛɪᴄᴋᴇʀ / لملصق*
╰━━━━∙⋆⋅⋆∙━ •─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 2*

>*‏❖═══ •『𝙍𝙀𝙉🩶𝘽𝙊𝙏』 ═══❖*`);
                        break;
                    case '3':               
                        reply(`❗𝙰𝙸 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ❓

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
*╏▸هناك شرح أسفل كل أمر*
*╏▸من الضروري طلب الأمر باللغة االانجليزية*
╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ᴀɪ / الذكاء الاصطناعي* 
┋ ◉ *ɢᴏᴏɢʟᴇ / غوغل*
┋ ◉ *ɢᴇᴍɪɴ / جيميني*
┋ ◉ *ʟᴏʀᴅx / محادثة البوت*
╰━━━━∙⋆⋅⋆∙━ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴀɪ: 4*

>*‏❖═══ •『𝙍𝙀𝙉🩶𝘽𝙊𝙏』 ═══❖*`);
                        break;
                    case '4':               
                        reply(`❗ 𝚂𝙴𝙰𝚁𝙲𝙷 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ❗

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
*╏▸هناك شرح أسفل كل أمر*
*╏▸من الضروري طلب الأمر باللغة االانجليزية*
╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ᴘʟᴀʏ / تشغيل* 
┋ ◉ *sᴏɴɢ / اغنية*
┋ ◉ *ᴠɪᴅᴇᴏ / فيديو* 
┋ ◉ *.ʏᴛ  <ᴛᴇxᴛ> / يوتيوب*
┋ ◉ *.ʟᴏʟɪ <ᴛᴇxᴛ> / صور انمي*
┋ ◉ *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ> / فيلم*
┋ ◉ *.ɪᴍɢ <ᴛᴇxᴛ> / صوره*
┋ ◉ *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ> / الطقس*
╰━━━━∙⋆⋅⋆∙━ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ sᴇᴀʀᴄʜ: 8*

>*‏❖═══ •『𝙍𝙀𝙉🩶𝘽𝙊𝙏』 ═══❖*`);
                        break;
                    case '5':               
                        reply(`❕ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ❗

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
*╏▸هناك شرح أسفل كل أمر*
*╏▸من الضروري طلب الأمر باللغة االانجليزية*
╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ɢɪᴛᴄʟᴏɴᴇ / مستودع*
┋ ◉ *ᴀᴘᴋ / تطبيق* 
┋ ◉ *ᴛᴡɪᴛᴛᴇʀ / تويتر* 
┋ ◉ *ɢᴅʀɪᴠᴇ / غوغل درايف* 
┋ ◉ *ᴍᴇᴅɪᴀғɪʀᴇ / ميديا فاير* 
┋ ◉ *ғʙ / فيسبوك*
┋ ◉ *ɪɢ / انستغرام*
┋ ◉ *ᴍᴏᴠɪᴇ / فيلم*
┋ ◉ *soɴɢ / اغنية* 
┋ ◉ *ᴠɪᴅᴇᴏ / فيديو*
┋ ◉ *ᴠɪᴅᴇᴏ2 / فيديو 2*
┋ ◉ *ᴠɪᴅᴇᴏ3 / ....3*
┋ ◉ *ᴠɪᴅᴇᴏ4 / ...4*
┋ ◉ *ᴘʟᴀʏ / تشغيل*
┋ ◉ *ᴘʟᴀʏ2 /...2*
┋ ◉ *ᴘʟᴀʏ3 /...3*
┋ ◉ *ᴘʟᴀʏ4 /...4*
┋ ◉ *ʏᴛ / يوتيوب*
┋ ◉ *ᴛɪᴋᴛᴏᴋ/ᴛᴛ / تيكتوك* 
┋ ◉ *ɪᴍɢ / صوره* 
┋ ◉ *ʏᴛᴀ / قناة يوتيوب*
╰━━━━∙⋆⋅⋆∙┉─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴅᴏᴡɴʟᴏᴀᴅ: 21*

>*‏❖═══ •『𝙍𝙀𝙉🩶𝘽𝙊𝙏』 ═══❖*`);
                        break;
                    case '6':               
                        reply(`❕ 𝙼𝙰𝙸𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ❗

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
*╏▸هناك شرح أسفل كل أمر*
*╏▸من الضروري طلب الأمر باللغة االانجليزية*
╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋ ◉ *ᴀʟɪᴠᴇ / البث* 
┋ ◉ *ᴀʙᴏᴜᴛ / حول* 
┋ ◉ *ᴍᴇɴᴜ / قائمة* 
┋ ◉ *ᴀʟʟᴍᴇɴᴜ / قائمة شاملة* 
┋ ◉ *sᴜᴘᴘᴏʀᴛ / الدعم* 
┋ ◉ *ꜱʏꜱᴛᴇᴍ / نظام* 
┋ ◉ *ᴘɪɴɢ / جودة الاتصال* 
┋ ◉ *ʀᴜɴᴛɪᴍᴇ / وقت العمل* 
╰━━━━∙⋆⋅⋆∙━  • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴍᴀɪɴ: 8*

>*‏❖═══ •『𝙍𝙀𝙉🩶𝘽𝙊𝙏』 ═══❖*`);
                        break;
                    case '7':               
                        reply(`❕ 𝙶𝚁𝙾𝚄𝙿 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ❗

╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅
*╏▸هناك شرح أسفل كل أمر*
*╏▸من الضروري طلب الأمر باللغة االانجليزية*
╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋◉ *ᴘʀᴏᴍᴏᴛᴇ / ترقية*
┋◉ *ᴅᴇᴍᴏᴛᴇ / خفض*
┋◉ *ᴋɪᴄᴋ / طرد*
┋◉ *ᴀᴅᴅ / اضافة*
┋◉ *ɢᴇᴛᴘɪᴄ / تعيين صورة المجموعة*
┋◉ *sᴇᴛᴡᴇʟᴄᴏᴍᴇ / تعيين الترحيب*
┋◉ *sᴇᴛɢᴏᴏᴅʙʏᴇ/ تعيين الوداع*
┋◉ *ᴀᴅᴍɪɴs / المشرفون*
┋◉ *ɢɴᴀᴍᴇ / تعيين اسم المجموعة*
┋◉ *ᴛᴀɢᴀʟʟ / استدعاء الاعضاء*
┋◉ *ᴛᴀɢᴀᴅᴍɪɴ / استدعاء الادمين*
┋◉ *ᴏᴘᴇɴᴛɪᴍʀ / فتح الوقت*
┋◉ *ᴄʟᴏsᴇᴛɪᴍᴇ / قفل الوقت*
┋◉ *ɢɪɴғᴏ / معلومات المجموعة*
┋◉ *ɢʟɪɴᴋ / رابط المجموعة*
┋◉ *ɢᴅᴇsᴄ / تعيين وصف المجموعة*
┋◉ *ᴍᴜᴛᴇ / كتم*
┋◉ *ᴜɴᴍᴜᴛᴇ / الغاء الكتم*
┋◉ *ʟᴏᴄᴋ / قفل*
┋◉ *ᴜɴʟᴏᴄᴋ / الغاء القفل*
┋◉ *ᴅᴇʟᴇᴛᴇ / مسح*
┋◉ *ᴋɪᴄᴋᴀʟʟ / طرد الكل*
╰━━━━∙⋆⋅⋆∙━ ─ • ─⊷
⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ɢʀᴏᴜᴘ: 21*

> *ʟᴏʀᴅ xᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɪɴɢ ᴍᴀʟᴠɪɴッ*`);
                       break;
                    case '8':               
                        reply(`❕ 𝙵𝚄𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ❗

╭┈┉┉┉┉┉┉┈┈┈┈┈┈┈
*╏▸هناك شرح أسفل كل أمر*
*╏▸من الضروري طلب الأمر باللغة االانجليزية*
╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋◉ ᴅᴏɢ
┋◉ ғᴀᴄᴛ 
┋◉ ʜᴀᴄᴋ
┋◉ ϙᴜᴏᴛᴇ
┋◉ ʀᴠɪᴅᴇᴏ
┋◉ ʙɪʙʟᴇ
╰━━━━∙⋆⋅⋆∙━ ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ғᴜɴ: 6*

> *ʟᴏʀᴅ xᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɪɴɢ ᴍᴀʟᴠɪɴッッ*`);
                       break;
                    case '9':               
                        reply(`❕ 𝙰𝙽𝙸𝙼𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ❗

╭┈┈┈┈┈┉┉┉┈┈┈┈┈┈┈
*╏▸هناك شرح أسفل كل أمر*
*╏▸من الضروري طلب الأمر باللغة االانجليزية*
╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋◉ ᴡᴀɪғᴜ
┋◉ ɴᴇᴋᴏ
┋◉ ᴍᴇɢᴜᴍɪɴ
┋◉ ᴍᴀɪᴅ
┋◉ ᴀᴡᴏᴏ
┋◉ ʟᴏʟɪ
╰━━━━∙⋆⋅⋆∙━ ─┉┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 6*

> *© ʟᴏʀᴅ xᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɪɴɢ ᴍᴀʟᴠɪɴッ*`);
                        break;
                    case '10':               
                        reply(`*❗ 𝙾𝚃𝙷𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ❗*

╭┈┈┈┈┉┉┉┉┉┉┉┉┈┈┈
*╏▸هناك شرح أسفل كل أمر*
*╏▸من الضروري طلب الأمر باللغة االانجليزية*
╭─┈┄┉┅┅┅┅┅┅┅┅┅┅┅┅
┋◉ ᴛʀᴛ
┋◉ ᴀɴɪᴍᴇ
┋◉ ᴍᴏᴠɪᴇ
┋◉ ɢɪᴛ
┋◉ ɢᴘᴀꜱꜱ
┋◉ ǫᴜᴏᴛᴇ
┋◉ ғᴀɴᴄʏ
┋◉ ᴅᴇꜰɪɴᴇ
┋◉ ᴜʀʟ
┋◉ sᴀᴠᴇ
┋◉ ᴘᴀɪʀ <ᴘᴜᴛ ᴜʀ #>
╰━━━━∙⋆⋅⋆∙━ ─┉─ ─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴛʜᴇʀ 11*

> *ʟᴏʀᴅ xᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ren botッッ*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option❗");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
