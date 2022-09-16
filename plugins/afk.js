let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  if (!text) {
  	conn.reply(m.chat,`${'@'+m.sender.split`@`[0]} sekarang afk, tanpa alasan`, m, { mentions: [m.sender] })
  } else if (text) {
      conn.reply(m.chat,`${'@'+m.sender.split`@`[0]} sekarang afk, dengan alasan ${text ? '' + text : ''}`, m, { mentions: [m.sender] })
  }
}
handler.help = ['afk [alasan]']
handler.tags = ['rpg']
handler.command = /^afk$/i
handler.acc = true

module.exports = handler