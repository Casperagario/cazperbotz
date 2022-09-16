let handler = async (m, { conn, participants }) => {
	global.db.data.users[m.sender].banned = true
	global.db.data.users[m.sender].bannedPoint += 1
	conn.sendButton('6285828357727@g.us', `*「 Toxic 」*\nOwner Ada Yang Toxic Tuh\nNomor : wa.me/${m.sender.split`@`[0]}`, wm, { 'button[0]': 'Unban', 'row[0]': '.unban ' + m.sender.split`@`[0] }, m)
 m.reply('!!! jangan kasar😐!!!*_')
       }
       handler.help = ['Bot']
       handler.customPrefix = /^Pepek|Ppek|Kontol|Kntl|Kntol|Kontl|Mmek|Memek|Bgst|Ngentod|Nudes|Nude|Milf|N u d e s|N u d e|M i l f$/i
       handler.command = new RegExp
                                           module.exports = handler