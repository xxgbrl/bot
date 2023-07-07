let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/simpcard', {
    avatar: await conn.profilePictureUrl(who).catch(_ => 'https://raw.githubusercontent.com/xxgbrl/imgbot/main/ppwa.jpg'),
  }), 'simpcard.png', 'simp', m)
}

handler.help = ['simpcard']
handler.tags = ['maker']

handler.command = /^(simpcard)$/i
handler.register = true
export default handler
