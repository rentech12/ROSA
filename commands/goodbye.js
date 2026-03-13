const fetch = require('node-fetch');

// --- Images par défaut si la photo de profil n'existe pas ---
const GOODBYE_IMAGES = [
    'https://images.iimg.live/images/majestic-image-8955.webp',
    'https://images.iimg.live/images/wonderful-view-1995.webp',
    'https://image2url.com/r2/default/images/1773354612638-e4dfda1e-509d-4972-a668-948de2145bf2.png',
    'https://image2url.com/r2/default/images/1773353643487-b1cdf03f-2daf-4d55-837d-a5e9f0a25294.png'
];

// --- Statut Goodbye activé pour les groupes ---
const goodbyeStatus = {}; // { "groupId@g.us": true/false }

// --- Stylisation Queen AI ---
function queenStyle(text) {
    return text.split('').map(c => c).join('');
}

// --- Activer / désactiver Goodbye ---
function setGoodbye(groupId, status) {
    goodbyeStatus[groupId] = !!status;
}

function isGoodbyeOn(groupId) {
    return !!goodbyeStatus[groupId];
}

// --- Fonction principale Goodbye ---
async function handleLeaveEvent(sock, chatId, participants) {
    if (!isGoodbyeOn(chatId)) return;

    const groupMetadata = await sock.groupMetadata(chatId);
    const groupName = groupMetadata.subject;
    const totalMembers = groupMetadata.participants.length;
    const totalAdmins = groupMetadata.participants.filter(p => p.admin).length;

    const newsletterJid = '120363423663942926@newsletter';

    for (const participant of participants) {
        try {
            const participantId = typeof participant === 'string' ? participant : participant.id || participant.toString();
            const userName = participantId.split('@')[0];

            // --- Récupérer la photo de profil du participant ---
            let userPic;
            try {
                userPic = await sock.profilePictureUrl(participantId, 'image');
            } catch {
                userPic = GOODBYE_IMAGES[Math.floor(Math.random() * GOODBYE_IMAGES.length)];
            }

            const now = new Date();
            const time = now.toLocaleTimeString("en-GB", { timeZone: "Africa/Douala" });
            const date = now.toLocaleDateString("en-GB", { timeZone: "Africa/Douala" });

            // --- Message Goodbye premium encadré ---
            const goodbyeMessage = `
╔═〔 ⌬ 𝗥𝗢𝗦𝗔 𝗔𝗜  GOODBYE ⌬ 〕═╗
┃ User     : @${queenStyle(userName)}
┃ Group    : ${queenStyle(groupName)}
┃ Members  : ${totalMembers}
┃ Admins    : ${totalAdmins}
┃ Time      : ${time}
┃ Date      : ${date}
╚═━━─────────────━━━═╝

╭━〔 👑 POWERED BY 〕━╮
┃  🜲𝐌ꝛ 𝐑𝐄𝐍 𝚨𝚻𝚨𝚳𝚵
┃  ⚜ The only atame
╰━━━━━━━━━━━━━━━━━╯
`;

            await sock.sendMessage(chatId, {
                image: { url: userPic },
                caption: goodbyeMessage,
                mentions: [participantId],
                contextInfo: {
                    mentionedJid: [participantId],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: newsletterJid,
                        newsletterName: '༺『Q』『U』『E』『E』『N』 ❀『A』『i』༻',
                        serverMessageId: Math.floor(Math.random() * 1000)
                    },
                    externalAdReply: {
                        title: '༺『ǫᴜᴇᴇɴ ᴀɪ』 ❀༻',
                        body: "Tap to open the official channel",
                        thumbnailUrl: userPic,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        sourceUrl: "https://whatsapp.com/channel/0029VbBYMyZIyPtOEnuT0S04"
                    }
                }
            });

        } catch (error) {
            console.error('Error sending goodbye:', error);
        }
    }
}

// --- Commande pour activer/désactiver Goodbye ---
async function goodbyeCommand(sock, chatId, message) {
    if (!chatId.endsWith('@g.us')) {
        await sock.sendMessage(chatId, { text: '❌ This command can only be used in groups.' });
        return;
    }

    const text = message.message?.conversation || message.message?.extendedTextMessage?.text || '';
    const args = text.trim().split(' ').slice(1);

    if (args[0]?.toLowerCase() === 'on') {
        setGoodbye(chatId, true);
        await sock.sendMessage(chatId, { text: '✅ Goodbye messages enabled for this group.' });
    } else if (args[0]?.toLowerCase() === 'off') {
        setGoodbye(chatId, false);
        await sock.sendMessage(chatId, { text: '❌ Goodbye messages disabled for this group.' });
    } else if (args[0]?.toLowerCase() === 'test') {
        await handleLeaveEvent(sock, chatId, [message.key?.participant]);
    } else {
        await sock.sendMessage(chatId, {
            text: 'Usage:\n/goodbye on - enable goodbye\n/goodbye off - disable goodbye\n/goodbye test - test goodbye message'
        });
    }
}

module.exports = { handleLeaveEvent, goodbyeCommand, setGoodbye, isGoodbyeOn };