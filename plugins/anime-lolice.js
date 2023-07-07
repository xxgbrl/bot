let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/lolice', {
        avatar: await conn.profilePictureUrl(who).catch(_ => 'https://raw.githubusercontent.com/xxgbrl/imgbot/main/ppwa.jpg'),
    }), '', 'Lo Pedo', m)
}

handler.help = ['lolice']
handler.tags = ['anime']
handler.command = /^(lolice)$/i

handler.limit = true

export default handler