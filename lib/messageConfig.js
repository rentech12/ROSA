// channelInfo.js - version modernisée
const channelInfo = {
  contextInfo: {
    forwardingScore: 999,          // Score élevé pour les forwards
    isForwarded: true,             // Message considéré comme forwardé
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363423663942926@newsletter", // ID du canal officiel
      newsletterName: "⌬ 𝗥𝗢𝗦𝗔 𝗔𝗜 OFFICIAL CHANNEL ⌬", // Nom modernisé et lisible
      serverMessageId: Math.floor(Math.random() * 10000) // ID unique par message
    },
    externalAdReply: {
      title: "⌬ 𝗥𝗢𝗦𝗔 𝗔𝗜 SYSTEM ⌬",           // Titre du message interactif
      body: "Tap to view our official channel", // Texte d'appel à l'action
      mediaType: 1,                               // 1 = image
      renderLargerThumbnail: true,               // Thumbnail plus grand
      thumbnailUrl: "https://image2url.com/r2/default/images/1773353643487-b1cdf03f-2daf-4d55-837d-a5e9f0a25294.png", // Fallback image
      sourceUrl: "https://whatsapp.com/channel/0029VbCAIZYA2pLGKFWCbX09" // Lien officiel
    }
  }
};

module.exports = { channelInfo };