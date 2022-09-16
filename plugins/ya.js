let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
    
    conn.reply(m.chat, `hallo?`) 
}

handler.help = ['kepo']
handler.tags = ['owner']
handler.command = /^hai$/
handler.rowner = true
handler.mods = true

module.exports = handler