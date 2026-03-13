// ==================== commands/repo.js ====================

const scriptLink = "https://github.com/rentech12/ROSA";
const channelLink = "https://whatsapp.com/channel/0029VbCAIZYA2pLGKFWCbX09";
const devChannel2 = "https://whatsapp.com/channel/0029VbBy5o5It5s4zZZRgo1y"
const videoMenuUrl = "https://image2url.com/r2/default/videos/1769892528235-7b251060-9471-45fb-8d30-a9006bc8f68a.mp4";

async function repoCommand(sock, chatId, message) {
    try {
        const text = `
╭━〔 ~*𝗥𝗢𝗦𝗔 𝗔𝗜 SYSTEM*~ 〕━⬣
┃ 🧠 Developer: *BLACK~~KING*
┃
┣━━〔 📜 SCRIPT 〕━⬣
┃ 🔗 ${scriptLink}
┃
┣━━〔 📡 CHANNELS 〕━⬣
┃ 🌟 Main: ${channelLink}
┃ 🚀 Dev 2: ${devChannel2}
┃
┣━━〔 🌍 COMMUNITIES 〕━⬣
┃ 🏠 WhatsApp: ${groupLink}
┃ 📱 Telegram: ${telegramGroupLink}
┃
┣━━〔 🎬 MEDIA 〕━⬣
┃ ▶ YouTube: Coming Soon
┃
╰━━━━━━━━━━━━━━━━━━━━━⬣
`;

        await sock.sendMessage(chatId, {
            video: { url: videoMenuUrl },
            caption: text,
            gifPlayback: true // vidéo en boucle comme un GIF
        }, { quoted: message });

    } catch (err) {
        console.error("Repo Error:", err);
        await sock.sendMessage(chatId, { text: "❌ Repo menu failed." }, { quoted: message });
    }
}

module.exports = repoCommand;
