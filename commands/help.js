const { channelInfo } = require('../lib/messageConfig');

const channelLink = 'https://whatsapp.com/channel/0029VbCAIZYA2pLGKFWCbX09';

const mainVideos = [
  'https://image2url.com/r2/default/videos/1773399956233-537b266b-dbd2-40e8-bc1c-4a7f3f3ac264.mp4',
  'https://image2url.com/r2/default/videos/1773399924369-03b3ddf0-d797-4e1b-9240-773da3602b00.mp4',
  'https://image2url.com/r2/default/videos/1773399956233-537b266b-dbd2-40e8-bc1c-4a7f3f3ac264.mp4'
];

const devVideos = [
  'https://image2url.com/r2/default/videos/1769865828614-23e460cb-7c7c-474d-9616-1a1e08f799e3.mp4',
  'https://image2url.com/r2/default/videos/1769865636958-ed88f56a-69af-48cb-afed-10b1fc2f29db.mp4',
  'https://image2url.com/r2/default/videos/1773399956233-537b266b-dbd2-40e8-bc1c-4a7f3f3ac264.mp4'
];

const randomVideo     = arr => arr[Math.floor(Math.random() * arr.length)];
const mainImages      = [
  'https://images.iimg.live/images/epic-snap-8134.webp',
  'https://images.iimg.live/images/spectacular-work-6721.webp',
  'https://images.iimg.live/images/spectacular-work-6721.webp'
];
const randomMainImage = () => mainImages[Math.floor(Math.random() * mainImages.length)];

const newsletterContext = (thumbnailUrl) => ({
  forwardingScore: 999,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: '120363423663942926@newsletter',
    newsletterName: '⌬ Rosa ᴀɪ OFFICIAL CHANNEL ⌬',
    serverMessageId: Math.floor(Math.random() * 1000)
  },
  externalAdReply: {
    title: '⌬ 𝗥𝗢𝗦𝗔 𝗔𝗜 SYSTEM ⌬',
    body: 'Tap to view our official channel',
    thumbnailUrl,
    mediaType: 1,
    renderLargerThumbnail: true,
    sourceUrl: channelLink
  }
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//   MENU PRINCIPAL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const MAIN_MENU = (prefix = '.', username = 'User') => {
  const now  = new Date();
  const days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  const day  = days[now.getDay()];
  const dd   = String(now.getDate()).padStart(2,'0');
  const mm   = String(now.getMonth()+1).padStart(2,'0');
  const yyyy = now.getFullYear();

  return (
`╭─────────────────╮
🌷  *ROSA AI SYSTEM*
╰─────────────────╯
╭─────────────────╮
│ 🌷 Prefix  : ${prefix}
│ 🌷 Hello   : ${username}
│ 🌷 Jour    : ${day}
│ 🌷 Date    : ${dd}/${mm}/${yyyy}
│ 🌷 Version : 2.0.0
│ 🌷 Plugins : 50
│ 🌷 Type    : X-MD
╰─────────────────╯

╭──[ 🌷 MENUS 🌷 ]──────╮
│
│ 🌷 .general
│ 🌷 .group
│ 🌷 .owner
│ 🌷 .ai
│ 🌷 .stickmenu
│ 🌷 .social
│ 🌷 .tools
│ 🌷 .games
│ 🌷 .misc
│ 🌷 .devinfo
│
╰─────────────────╯

*© rentech12*`
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//   SECTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const SECTIONS = {

  general:
`╭──[ 🌷 GÉNÉRAL 🌷 ]────╮
│
│ 🌷 ping
│ 🌷 alive
│ 🌷 tts
│ 🌷 weather
│ 🌷 news
│ 🌷 lyrics
│ 🌷 8ball
│ 🌷 translate
│ 🌷 autostatus
│
╰─────────────────╯`,

  group:
`╭──[ 🌷 GROUPE 🌷 ]─────╮
│
│ 🌷 ban
│ 🌷 unban
│ 🌷 kick
│ 🌷 mute
│ 🌷 unmute
│ 🌷 promote
│ 🌷 demote
│ 🌷 delete
│ 🌷 clear
│ 🌷 welcome
│ 🌷 antilink
│ 🌷 antibadword
│ 🌷 tagall
│ 🌷 hidetag
│ 🌷 purge
│
╰─────────────────╯`,

  owner:
`╭──[ 🌷 OWNER 🌷 ]──────╮
│
│ 🌷 mode
│ 🌷 update
│ 🌷 settings
│ 🌷 autotyping
│ 🌷 autoread
│ 🌷 anticall
│ 🌷 pmblocker
│ 🌷 cleartmp
│ 🌷 clearsession
│ 🌷 setpp
│
╰─────────────────╯`,

  ai:
`╭──[ 🌷 IA & FUN 🌷 ]───╮
│
│ 🌷 gpt
│ 🌷 gemini
│ 🌷 imagine
│ 🌷 flux
│ 🌷 sora
│ 🌷 compliment
│ 🌷 flirt
│ 🌷 insult
│ 🌷 stupid
│ 🌷 truth
│ 🌷 dare
│
╰─────────────────╯`,

  stickmenu:
`╭──[ 🌷 STICKERS 🌷 ]───╮
│
│ 🌷 sticker
│ 🌷 take
│ 🌷 tg
│
╰─────────────────╯`,

  social:
`╭──[ 🌷 SOCIAL 🌷 ]─────╮
│
│ 🌷 tiktok
│ 🌷 facebook
│ 🌷 instagram
│ 🌷 spotify
│ 🌷 play
│ 🌷 song
│ 🌷 video
│ 🌷 music
│
╰─────────────────╯`,

  tools:
`╭──[ 🌷 OUTILS 🌷 ]─────╮
│
│ 🌷 shorturl
│ 🌷 qrcode
│ 🌷 ss
│ 🌷 url
│ 🌷 ai
│ 🌷 setpp
│ 🌷 repo
│
╰─────────────────╯`,

  games:
`╭──[ 🌷 JEUX 🌷 ]───────╮
│
│ 🌷 tictactoe
│ 🌷 hangman
│ 🌷 trivia
│ 🌷 dice
│ 🌷 rps
│
╰─────────────────╯`,

  misc:
`╭──[ 🌷 DIVERS 🌷 ]─────╮
│
│ 🌷 quote
│ 🌷 fact
│ 🌷 joke
│ 🌷 compliment
│ 🌷 insult
│ 🌷 roseday
│ 🌷 shayari
│
╰─────────────────╯`,

  devinfo: (link) =>
`╭──[ 🌷 DEV INFO 🌷 ]───╮
│
│ 🌷 Prime   : *REN ATAME*
│ 🌷 Channel :
│ ${link}
│
╰─────────────────╯

╭─────────────────╮
│ 🌷 MATSU D ELION
│ 🌷 𝐌𝐫 ARTHUR SMITH
│ 🌷 MR REN ATAME
╰─────────────────╯

© *ren~atame*`

};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//   FONCTIONS D'ENVOI
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const sendMainMenu = async (sock, jid, quoted, captionOverride) => {
  const video   = randomVideo(mainVideos);
  const image   = randomMainImage();
  const caption = captionOverride ?? MAIN_MENU();
  return sock.sendMessage(jid, {
    video      : { url: video },
    caption,
    mimetype   : 'video/mp4',
    contextInfo: newsletterContext(image)
  }, { quoted });
};

const sendSectionMenu = async (sock, jid, quoted, caption, thumbnail) => {
  return sock.sendMessage(jid, {
    image      : { url: thumbnail },
    caption,
    contextInfo: newsletterContext(thumbnail)
  }, { quoted });
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//   COMMANDES EXPORTÉES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const helpCommand = async (sock, jid, quoted) => {
  await sendMainMenu(sock, jid, quoted, MAIN_MENU());
};

const menuSystem = async (sock, jid, quoted, section) => {
  try {
    const botId = sock.user?.id;

    let pfp;
    try {
      pfp = await sock.profilePictureUrl(botId, 'image');
    } catch {
      pfp = 'https://files.catbox.moe/t33evd.png';
    }

    if (!SECTIONS[section]) {
      return sock.sendMessage(jid, { text: '❌ Section inconnue.' });
    }

    if (section === 'devinfo') {
      const video = randomVideo(devVideos);
      return sock.sendMessage(jid, {
        video      : { url: video },
        caption    : SECTIONS.devinfo(channelLink),
        mimetype   : 'video/mp4',
        contextInfo: newsletterContext(pfp)
      }, { quoted });
    }

    const caption = typeof SECTIONS[section] === 'function'
      ? SECTIONS[section](channelLink)
      : SECTIONS[section];

    await sendSectionMenu(sock, jid, quoted, caption, pfp);

  } catch (err) {
    console.error('Error menuSystem:', err);
    await sock.sendMessage(jid, { text: "❌ Impossible d'afficher ce menu." });
  }
};

module.exports = { helpCommand, menuSystem };
