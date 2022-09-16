let handler = async m => m.reply(`
            𝐛𝐨𝐭 𝐢𝐧𝐢 𝐦𝐞𝐧𝐠𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐒𝐜 CasperAgario 𒅒 
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^sc$/i

module.exports = handler