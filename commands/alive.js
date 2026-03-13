const settings = require("../settings");
const os = require("os");
const axios = require("axios");

/* 🎨 Images aléatoires pour le alive */
const aliveImages = [
    "https://image2url.com/r2/default/images/1773354612638-e4dfda1e-509d-4972-a668-948de2145bf2.png",
    "https://image2url.com/r2/default/images/1773354612638-e4dfda1e-509d-4972-a668-948de2145bf2.png"
];

/* 🌟 Helper pour image random */
const getRandomImage = () => aliveImages[Math.floor(Math.random() * aliveImages.length)];

/* 📰 Newsletter context pour WhatsApp */
const newsletterContext = (imageUrl) => ({
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363423663942926@newsletter',
        newsletterName: '⌬ 𝗥𝗢𝗦𝗔 𝗔𝗜 ⌬',
        serverMessageId: Math.floor(Math.random() * 1000)
    },
    externalAdReply: {
        title: "⌬ 𝗥𝗢𝗦𝗔 𝗔𝗜  SYSTEM ⌬",
        body: "Tap to view our official channel",
        thumbnailUrl: imageUrl,
        mediaType: 1,
        renderLargerThumbnail: true,
        sourceUrl: "https://whatsapp.com/channel/0029VbCAIZYA2pLGKFWCbX09"
    }
});

/* 🎬 Commande ALIVE PREMIUM - QUEEN AI */
async function aliveCommand(sock, chatId, message, botStats = {}) {
    const randomImage = getRandomImage();

    const totalGroups = botStats.totalGroups || "N/A";
    const totalUsers  = botStats.totalUsers  || "N/A";
    const uptime      = botStats.uptime     || "N/A";

    const aliveMessage = `
╔═━━━『 🌸 ⌬ 𝗥𝗢𝗦𝗔 𝗔𝗜  𝗦𝗬𝗦𝗧𝗘𝗠 ⌬ 🌸』━━━═╗
┃          𝗩𝗲𝗿𝘀𝗶𝗼𝗻 • ${settings.version} ⚙️
╚═━━──────────────────━━═╝

╭━━〖 ⚡ 𝗦𝗧𝗔𝗧𝗨𝗦 〗━━╮
┃ 🟢 𝗢𝗻𝗹𝗶𝗻𝗲
┃ 🌍 𝗠𝗼𝗱𝗲   : 𝗣𝘂𝗯𝗹𝗶𝗰
┃ 🛡 𝗙𝗲𝗮𝘁𝘂𝗿𝗲𝘀:
┃   • 🏰 𝗚𝗿𝗼𝘂𝗽 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁
┃   • ⚔️ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸 𝗣𝗿𝗼𝘁𝗲𝗰𝘁𝗶𝗼𝗻
┃   • 🎮 𝗙𝘂𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀
┃   • ✨ 𝗔𝗻𝗱 𝗺𝗼𝗿𝗲!
╰━━━━━━━━━━━━━━╯

╭━━〖 📊 𝗕𝗢𝗧 𝗦𝗧𝗔𝗧𝗦 〗━━╮
┃ 👥 𝗚𝗿𝗼𝘂𝗽𝘀   : ${totalGroups}
┃ 🧍 𝗨𝘀𝗲𝗿𝘀    : ${totalUsers}
┃ ⏱ 𝗨𝗽𝘁𝗶𝗺𝗲    : ${uptime}
┃ 🖥 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺  : ${os.platform()} ${os.arch()}
╰━━━━━━━━━━━━━━╯

`;

    try {
        // 🔥 Télécharger l'image en buffer pour WhatsApp
        const response = await axios.get(randomImage, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data, 'binary');

        await sock.sendMessage(chatId, {
            image: imageBuffer,
            caption: aliveMessage,
            mentions: [message.key?.participant || chatId],
            contextInfo: newsletterContext(randomImage)
        }, { quoted: message });

    } catch (error) {
        console.error('Error sending ALIVE message:', error);
        // Fallback texte si problème
        await sock.sendMessage(chatId, {
            text: aliveMessage,
            mentions: [message.key?.participant || chatId],
            contextInfo: newsletterContext(randomImage)
        }, { quoted: message });
    }
}

module.exports = aliveCommand;