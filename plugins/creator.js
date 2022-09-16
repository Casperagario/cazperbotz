let handler = function (m) {
  // this.sendContact(m.chat, '628886529913', 'Nurutomo', m)
  conn.sendContact(m.chat, '628886529913', 'CasperAgario', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
