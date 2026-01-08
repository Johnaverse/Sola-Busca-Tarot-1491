// ===================================
// Sola Busca Tarot - Divination Logic (Localized)
// ===================================

const TRANSLATIONS = {
    'en': {
        'title': 'The Sola Busca Tarot',
        'subtitle': 'Anno Domini 1491',
        'desc': 'A digital recreation of the earliest known complete tarot deck with illustrated Minor Arcana',
        'deck_name': 'Sola Busca',
        'deck_sub': 'Divination Deck',
        'instr_initial': 'Focus on your question, then shuffle the deck.',
        'instr_shuffling': 'Shuffling...',
        'instr_ready': 'Deck is ready. Focus on your question.',
        'instr_complete': 'Your reading is complete.',
        'slot_1': 'The Situation',
        'slot_2': 'The Action',
        'slot_3': 'The Outcome',
        'btn_shuffle': 'Shuffle & Focus',
        'btn_reveal': 'Reveal Spread',
        'btn_new': 'New Reading',
        'guide_title': 'Guide to the Sola Busca',
        'guide_1_title': 'A Renaissance Masterpiece',
        'guide_1_text': 'Created in 1491, this is the oldest complete 78-card tarot deck in existence. Unlike other decks of its time, it features fully illustrated pip cards (Minor Arcana) depicting dynamic scenes of daily life, alchemy, and warfare.',
        'guide_2_title': 'The Heroes of Antiquity',
        'guide_2_text': 'The 22 Major Arcana (Trumps) deviate from traditional tarot archetypes. You will meet historical figures from the Roman Empire and biblical history, such as Mato (The Fool), Panfilio, and Nabuchodenasor.',
        'guide_3_title': 'Single Card Reading',
        'guide_3_text': 'Focus on a single question and draw one card for direct, clear insight.',
        'guide_3_note': 'Ideal for daily guidance or when you need a straightforward answer.',
        'guide_4_title': 'Three-Card Spread',
        'guide_4_text': 'A classic Situation-Action-Outcome spread:',
        'guide_4_li1': 'I. The Situation: The core energy of your current moment.',
        'guide_4_li2': 'II. The Action: Guidance on what to do (or avoid).',
        'guide_4_li3': 'III. The Outcome: The potential result if advice is followed.',
        'guide_5_title': 'Celtic Cross',
        'guide_5_text': 'A comprehensive 10-card spread revealing the complete picture of your situation, influences, and potential outcomes.',
        'guide_5_note': 'Perfect for complex questions requiring deep insight into past, present, future, and hidden forces.',
        'footer_main': 'The Sola Busca Tarot (1491) • Preserved by the Pinacoteca di Brera, Milan',
        'footer_sub': 'Digital facsimile for historical study and divination',
        'instr_selecting': 'Select 3 cards from the deck.',
        'history_title': 'Reading Journal',
        'btn_save': 'Save to Journal',
        'btn_clear': 'Clear History',
        'btn_history': 'Journal',
        'empty_history': 'Your journal is empty.',
        'mode_3': 'Three-Card Spread',
        'mode_1': 'Single Card Reading',
        'mode_10': 'Celtic Cross',
        'slot_cc_1': 'The Heart (Present)',
        'slot_cc_2': 'The Crossing (Challenge)',
        'slot_cc_3': 'The Root (Unconscious)',
        'slot_cc_4': 'The Past',
        'slot_cc_5': 'The Crown (Higher Power)',
        'slot_cc_6': 'The Future',
        'slot_cc_7': 'Emotions (Self)',
        'slot_cc_8': 'External Influences',
        'slot_cc_9': 'Hopes and Fears',
        'slot_cc_10': 'The Outcome',
        'label_history': 'Historical Context'
    },
    'zh-TW': {
        'title': 'Sola Busca 塔羅牌',
        'subtitle': '公元 1491 年',
        'desc': '現存最早擁有完整圖繪小阿爾克那牌的塔羅牌數位重現版',
        'deck_name': 'Sola Busca',
        'deck_sub': '占卜牌組',
        'instr_initial': '專注於您的問題，然後洗牌。',
        'instr_shuffling': '洗牌中...',
        'instr_ready': '牌組已準備就緒。請專注於您的問題。',
        'instr_complete': '您的占卜已完成。',
        'slot_1': '現狀 (The Situation)',
        'slot_2': '行動 (The Action)',
        'slot_3': '結果 (The Outcome)',
        'btn_shuffle': '洗牌與專注',
        'btn_reveal': '揭示牌陣',
        'btn_new': '重新占卜',
        'guide_title': 'Sola Busca 指南',
        'guide_1_title': '文藝復興傑作',
        'guide_1_text': '創作於 1491 年，這是現存最古老的完整 78 張塔羅牌。與當時的其他牌組不同，它擁有完全圖繪的數字牌（小阿爾克那），描繪了日常生活、煉金術和戰爭的動態場景。',
        'guide_2_title': '古代英雄',
        'guide_2_text': '22 張大阿爾克那（王牌）與傳統塔羅牌原型不同。您將遇見來自羅馬帝國和聖經歷史的歷史人物，如 Mato（愚者）、Panfilio 和 Nabuchodenasor。',
        'guide_3_title': '單牌占卜',
        'guide_3_text': '專注於一個問題，抽取一張牌獲得直接、清晰的洞察。',
        'guide_3_note': '適合日常指引或需要直接答案時使用。',
        'guide_4_title': '三牌陣法',
        'guide_4_text': '經典的「情境-行動-結果」陣法：',
        'guide_4_li1': 'I. 情境：當下核心能量。',
        'guide_4_li2': 'II. 行動：關於做什麼（或避免什麼）的指引。',
        'guide_4_li3': 'III. 結果：如果遵循建議可能產生的結果。',
        'guide_5_title': '凱爾特十字法',
        'guide_5_text': '全面的 10 張牌陣法，揭示情境、影響和潛在結果的完整圖景。',
        'guide_5_note': '適合需要深入洞察過去、現在、未來和隱藏力量的複雜問題。',
        'footer_main': 'Sola Busca 塔羅牌 (1491) • 米蘭布雷拉畫廊珍藏',
        'footer_sub': '用於歷史研究和占卜的數位摹本',
        'instr_selecting': '請從牌組中選擇 3 張牌。',
        'history_title': '占卜紀錄',
        'btn_save': '儲存至紀錄',
        'btn_clear': '清除紀錄',
        'btn_history': '紀錄',
        'empty_history': '尚無紀錄。',
        'mode_3': '三牌陣法',
        'mode_1': '單牌占卜',
        'mode_10': '凱爾特十字法',
        'slot_cc_1': '核心 (現狀)',
        'slot_cc_2': '阻礙 (挑戰)',
        'slot_cc_3': '根源 (潛意識)',
        'slot_cc_4': '過去',
        'slot_cc_5': '冠冕 (高層力量)',
        'slot_cc_6': '未來',
        'slot_cc_7': '自我 (情緒)',
        'slot_cc_8': '外在影響',
        'slot_cc_9': '希望與恐懼',
        'slot_cc_10': '結果',
        'label_history': '歷史背景'
    }
};

// Data with Translations
const rawMajors = [
    {
        n: '0', img: 'major-00-mato.jpg',
        name: 'Mato (The Fool)', name_zh: 'Mato (愚者)',
        desc: 'Divine madness, freedom, new journey. Mato represents the innocent soul embarking on a spiritual quest.',
        desc_zh: '神聖的瘋狂、自由、新的旅程。Mato 代表著踏上精神追求的純真靈魂。',
        desc_rev: 'Insanity, poor judgment, recklessness.', desc_rev_zh: '瘋狂、判斷力差、魯莽。',
        history: 'In the Sola Busca, Mato is shown as a festive figure, possibly a court jester, playing a bagpipe.',
        history_zh: '在 Sola Busca 中，Mato 被描繪成一個節日人物，可能是一個宮廷弄臣，正在吹奏風笛。'
    },
    {
        n: 'I', img: 'major-01-panfilio.jpg',
        name: 'Panfilio (The Magician)', name_zh: 'Panfilio (魔術師)',
        desc: 'Willpower, mastery, manifestation.', desc_zh: '意志力、精通、顯化。',
        desc_rev: 'Manipulation, trickery, blocked creativity.', desc_rev_zh: '操縱、欺騙、創造力受阻。'
    },
    {
        n: 'II', img: 'major-02-postumio.jpg',
        name: 'Postumio', name_zh: 'Postumio',
        desc: 'Intuition, hidden knowledge, duality.', desc_zh: '直覺、隱藏的知識、二元性。',
        desc_rev: 'Secrets revealed, confusion, repressed intuition.', desc_rev_zh: '秘密揭示、困惑、直覺受壓抑。'
    },
    {
        n: 'III', img: 'major-03-lenpio.jpg',
        name: 'Lenpio', name_zh: 'Lenpio',
        desc: 'Creativity, fertility, nature.', desc_zh: '創造力、富饒、自然。',
        desc_rev: 'Creative block, dependence, emptiness.', desc_rev_zh: '創作瓶頸、依賴、空虛。'
    },
    {
        n: 'IIII', img: 'major-04-mario.jpg',
        name: 'Mario (The Emperor)', name_zh: 'Mario (皇帝)',
        desc: 'Authority, structure, control. Mario embodies the power of the Roman general Gaius Marius.',
        desc_zh: '權威、結構、控制。Mario 體現了羅馬將軍蓋烏斯·馬略的力量。',
        desc_rev: 'Tyranny, rigidity, loss of control.', desc_rev_zh: '暴政、僵化、失控。',
        history: 'Gaius Marius was a Roman general and statesman, known for his reforms of Roman armies.',
        history_zh: '蓋烏斯·馬略（Gaius Marius）是羅馬將軍和政治家，以改革羅馬軍隊而聞名。'
    },
    {
        n: 'V', img: 'major-05-catulo.jpg',
        name: 'Catulo (The Hierophant)', name_zh: 'Catulo (教皇)',
        desc: 'Tradition, spiritual guidance.', desc_zh: '傳統、精神指引。',
        desc_rev: 'Blind faith, rebellion, unconventionality.', desc_rev_zh: '盲目信仰、叛逆、非傳統。'
    },
    {
        n: 'VI', img: 'major-06-sesto.jpg',
        name: 'Sesto (The Lovers)', name_zh: 'Sesto (戀人)',
        desc: 'Choice, union, harmony.', desc_zh: '選擇、結合、和諧。',
        desc_rev: 'Disharmony, imbalance, bad choices.', desc_rev_zh: '不和諧、失衡、錯誤選擇。'
    },
    {
        n: 'VII', img: 'major-07-deotauro.jpg',
        name: 'Deo Tauro (The Chariot)', name_zh: 'Deo Tauro (戰車)',
        desc: 'Willpower, triumph, movement.', desc_zh: '意志力、勝利、前進。',
        desc_rev: 'Loss of direction, aggression, defeat.', desc_rev_zh: '失去方向、侵略、失敗。'
    },
    {
        n: 'VIII', img: 'major-08-nerone.jpg',
        name: 'Nerone (Strength)', name_zh: 'Nerone (力量)',
        desc: 'Courage, inner strength, patience. Represented by Emperor Nero, reflecting raw power and complex will.',
        desc_zh: '勇氣、內在力量、耐心。由尼祿皇帝代表，反映了原始的力量和複雜的意志。',
        desc_rev: 'Self-doubt, weakness, insecurity.', desc_rev_zh: '自我懷疑、軟弱、不安全感。',
        history: 'Nero was the last Roman emperor of the Julio-Claudian dynasty; his reign is often associated with tyranny.',
        history_zh: '尼祿（Nero）是朱里亞·克勞狄王朝的最後一位羅馬皇帝；他的統治通常與暴政聯繫在一起。'
    },
    {
        n: 'VIIII', img: 'major-09-falco.jpg',
        name: 'Falco (The Hermit)', name_zh: 'Falco (隱士)',
        desc: 'Introspection, solitude, guidance.', desc_zh: '內省、孤獨、指引。',
        desc_rev: 'Isolation, withdrawal, loneliness.', desc_rev_zh: '孤立、退縮、孤獨。'
    },
    {
        n: 'X', img: 'major-10-venturio.jpg',
        name: 'Venturio (Wheel of Fortune)', name_zh: 'Venturio (命運之輪)',
        desc: 'Cycles, karma, destiny.', desc_zh: '循環、業力、命運。',
        desc_rev: 'Bad luck, resistance to change, breaking cycles.', desc_rev_zh: '厄運、抗拒改變、打破循環。'
    },
    {
        n: 'XI', img: 'major-11-tulio.jpg',
        name: 'Tulio (Justice)', name_zh: 'Tulio (正義)',
        desc: 'Fairness, truth, cause and effect.', desc_zh: '公平、真理、因果。',
        desc_rev: 'Unfairness, dishonesty, lack of accountability.', desc_rev_zh: '不公、不誠實、缺乏問責。'
    },
    {
        n: 'XII', img: 'major-12-carbone.jpg',
        name: 'Carbone (The Hanged Man)', name_zh: 'Carbone (倒吊人)',
        desc: 'Surrender, new perspective, sacrifice.', desc_zh: '臣服、新視角、犧牲。',
        desc_rev: 'Stalling, indecision, playing the victim.', desc_rev_zh: '拖延、優柔寡斷、扮演受害者。'
    },
    {
        n: 'XIII', img: 'major-13-catone.jpg',
        name: 'Catone (Death)', name_zh: 'Catone (死神)',
        desc: 'Endings, transformation, transition.', desc_zh: '結束、轉化、過渡。',
        desc_rev: 'Resistance to change, stagnation, decay.', desc_rev_zh: '抗拒改變、停滯、衰敗。'
    },
    {
        n: 'XIIII', img: 'major-14-bocho.jpg',
        name: 'Bocho (Temperance)', name_zh: 'Bocho (節制)',
        desc: 'Balance, moderation, patience.', desc_zh: '平衡、節制、耐心。',
        desc_rev: 'Imbalance, excess, impatience.', desc_rev_zh: '失衡、過度、不耐煩。'
    },
    {
        n: 'XV', img: 'major-15-metelo.jpg',
        name: 'Metelo (The Devil)', name_zh: 'Metelo (惡魔)',
        desc: 'Shadow self, attachment, restriction.', desc_zh: '陰影自我、執著、限制。',
        desc_rev: 'Release, detachment, exploring dark thoughts.', desc_rev_zh: '釋放、超脫、探索黑暗思想。'
    },
    {
        n: 'XVI', img: 'major-16-olivo.jpg',
        name: 'Olivo (The Tower)', name_zh: 'Olivo (高塔)',
        desc: 'Sudden change, upheaval, revelation.', desc_zh: '驟變、動盪、啟示。',
        desc_rev: 'Avoidance of disaster, fear of change, rebuilding.', desc_rev_zh: '避免災難、恐懼改變、重建。'
    },
    {
        n: 'XVII', img: 'major-17-ipeo.jpg',
        name: 'Ipeo (The Star)', name_zh: 'Ipeo (星星)',
        desc: 'Hope, inspiration, serenity.', desc_zh: '希望、靈感、寧靜。',
        desc_rev: 'Despair, lack of faith, discouragement.', desc_rev_zh: '絕望、缺乏信心、氣餒。'
    },
    {
        n: 'XVIII', img: 'major-18-lentulo.jpg',
        name: 'Lentulo (The Moon)', name_zh: 'Lentulo (月亮)',
        desc: 'Illusion, subconscious, intuition.', desc_zh: '幻覺、潛意識、直覺。',
        desc_rev: 'Confusion, fear, misinterpretation.', desc_rev_zh: '困惑、恐懼、誤解。'
    },
    {
        n: 'XVIIII', img: 'major-19-sabino.jpg',
        name: 'Sabino (The Sun)', name_zh: 'Sabino (太陽)',
        desc: 'Joy, success, clarity.', desc_zh: '喜悅、成功、清晰。',
        desc_rev: 'Temporary depression, lack of clarity, burnout.', desc_rev_zh: '暫時的抑鬱、缺乏清晰度、倦怠。'
    },
    {
        n: 'XX', img: 'major-20-nenbroto.jpg',
        name: 'Nenbroto (Judgement)', name_zh: 'Nenbroto (審判)',
        desc: 'Awakening, renewal, calling.', desc_zh: '覺醒、更新、召喚。',
        desc_rev: 'Self-doubt, refusal of call, lack of self-awareness.', desc_rev_zh: '自我懷疑、拒絕召喚、缺乏自我意識。'
    },
    {
        n: 'XXI', img: 'major-21-nabuchodenasor.jpg',
        name: 'Nabuchodenasor (The World)', name_zh: 'Nabuchodenasor (世界)',
        desc: 'Completion, fulfillment, wholeness.', desc_zh: '完成、圓滿、完整。',
        desc_rev: 'Incompletion, emptiness, lack of closure.', desc_rev_zh: '未完成、空虛、缺乏結局。'
    }
];

const suits = [
    { name: 'Swords', name_zh: '寶劍', file: 'swords', mean: 'Intellect, conflict, truth', mean_zh: '智力、衝突、真理' },
    { name: 'Batons', name_zh: '權杖', file: 'batons', mean: 'Passion, will, action', mean_zh: '熱情、意志、行動' },
    { name: 'Cups', name_zh: '聖杯', file: 'cups', mean: 'Emotions, love, intuition', mean_zh: '情感、愛、直覺' },
    { name: 'Coins', name_zh: '錢幣', file: 'coins', mean: 'Material, work, resources', mean_zh: '物質、工作、資源' }
];

const ranks = [
    { r: '01', n: 'Ace', n_zh: '王牌', m: 'New beginnings, potential', m_zh: '新的開始、潛力', m_rev: 'Blocked potential, delays', m_rev_zh: '潛力受阻、延遲' },
    { r: '02', n: 'Two', n_zh: '二', m: 'Balance, partnership', m_zh: '平衡、夥伴關係', m_rev: 'Imbalance, disharmony', m_rev_zh: '失衡、不和諧' },
    { r: '03', n: 'Three', n_zh: '三', m: 'Collaboration, growth', m_zh: '合作、成長', m_rev: 'Lack of cooperation, stagnation', m_rev_zh: '缺乏合作、停滯' },
    { r: '04', n: 'Four', n_zh: '四', m: 'Stability, structure', m_zh: '穩定、結構', m_rev: 'Instability, rigidity', m_rev_zh: '不穩定、僵化' },
    { r: '05', n: 'Five', n_zh: '五', m: 'Change, challenge', m_zh: '改變、挑戰', m_rev: 'Resistance to change, minor loss', m_rev_zh: '抗拒改變、小损失' },
    { r: '06', n: 'Six', n_zh: '六', m: 'Harmony, assistance', m_zh: '和諧、協助', m_rev: 'Discord, lack of support', m_rev_zh: '不和、缺乏支持' },
    { r: '07', n: 'Seven', n_zh: '七', m: 'Strategy, assessment', m_zh: '策略、評估', m_rev: 'Hasty decisions, overlooked details', m_rev_zh: '倉促決定、忽略細節' },
    { r: '08', n: 'Eight', n_zh: '八', m: 'Action, mastery', m_zh: '行動、精通', m_rev: 'Inaction, lack of skill', m_rev_zh: '不作為、缺乏技巧' },
    { r: '09', n: 'Nine', n_zh: '九', m: 'Fruition, attainment', m_zh: '成果、達成', m_rev: 'Delays, dissatisfaction', m_rev_zh: '延遲、不滿' },
    { r: '10', n: 'Ten', n_zh: '十', m: 'Completion, cycle end', m_zh: '完成、週期結束', m_rev: 'Incomplete cycle, lingering issues', m_rev_zh: '週期未完、遺留問題' },
    { r: 'page', n: 'Page', n_zh: '侍從', m: 'Message, curiosity', m_zh: '訊息、好奇心', m_rev: 'Bad news, lack of focus', m_rev_zh: '壞消息、缺乏專注' },
    { r: 'knight', n: 'Knight', n_zh: '騎士', m: 'Action, pursuit', m_zh: '行動、追求', m_rev: 'Impulsiveness, stagnation', m_rev_zh: '衝動、停滯' },
    { r: 'queen', n: 'Queen', n_zh: '皇后', m: 'Nurturing, intuition', m_zh: '滋養、直覺', m_rev: 'Coldness, repressed intuition', m_rev_zh: '冷漠、直覺受壓抑' },
    { r: 'king', n: 'King', n_zh: '國王', m: 'Authority, control', m_zh: '權威、控制', m_rev: 'Abuse of power, weakness', m_rev_zh: '濫用權力、軟弱' }
];

// App State
let currentLang = 'en';
let deck = [];
let isShuffled = false;
let selectedCards = [];
let readingMode = 3; // Default to 3 cards

// Build Deck with full translation data
rawMajors.forEach(m => {
    deck.push({
        id: `major-${m.n}`,
        type: 'major',
        imageUrl: `assets/cards/${m.img}`,
        history: m.history || null,
        en: { name: m.name, desc: m.desc, desc_rev: m.desc_rev, history: m.history },
        'zh-TW': { name: m.name_zh, desc: m.desc_zh, desc_rev: m.desc_rev_zh, history: m.history_zh }
    });
});

suits.forEach(s => {
    ranks.forEach(r => {
        deck.push({
            id: `${s.file}-${r.r}`,
            type: 'minor',
            imageUrl: `assets/cards/${s.file}-${r.r}.jpg`,
            en: {
                name: `${r.n} of ${s.name}`,
                desc: `${r.m} in the realm of ${s.mean}.`,
                desc_rev: `(Reversed) ${r.m_rev} in the realm of ${s.mean}.`
            },
            'zh-TW': {
                name: `${s.name_zh}${r.n_zh}`,
                desc: `${s.mean_zh}領域中的${r.m_zh}。`,
                desc_rev: `(逆位) ${s.mean_zh}領域中的${r.m_rev_zh}。`
            }
        });
    });
});

// ===== DOM Elements =====
const shuffleBtn = document.getElementById('shuffleButton');
const drawBtn = document.getElementById('drawButton');
const resetBtn = document.getElementById('resetButton');
const deckStack = document.getElementById('deckStack');
const spreadContainer = document.getElementById('spreadContainer');
const instructionText = document.getElementById('instructionText');
const langSelect = document.getElementById('langSelect');

// History Elements
const historyOverlay = document.getElementById('historyOverlay');
const historyContent = document.getElementById('historyContent');
const historyToggleButton = document.getElementById('historyToggleButton');
const closeHistoryButton = document.getElementById('closeHistoryButton');
const clearHistoryButton = document.getElementById('clearHistoryButton');
const saveReadingButton = document.getElementById('saveReadingButton');
const saveActionContainer = document.getElementById('saveActionContainer');
const modeButtons = document.querySelectorAll('.btn-mode');

// Audio Context for synthetic sounds
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playFlipSound() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
}

function playShuffleSound() {
    if (!audioCtx) return;
    const bufferSize = audioCtx.sampleRate * 0.5;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, audioCtx.currentTime);

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    noise.start();
}


// ===== Functions =====

// ===== Functions =====

function updateLanguage(lang) {
    currentLang = lang;
    // Save language preference to localStorage
    localStorage.setItem('sola_busca_language', lang);

    // Update Static Text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang][key]) {
            el.innerHTML = TRANSLATIONS[lang][key]; // innerHTML to preserve strong/formatting if needed
        }
    });

    // Update revealed cards if any
    document.querySelectorAll('.spread-card').forEach(cardEl => {
        const cardId = cardEl.getAttribute('data-card-id');
        const isReversed = cardEl.classList.contains('reversed');
        if (cardId) {
            const card = deck.find(c => c.id === cardId);
            const content = card[currentLang];
            cardEl.querySelector('h4').textContent = content.name;
            // Use reversed desc if applicable
            cardEl.querySelector('p').textContent = isReversed && content.desc_rev ?
                content.desc_rev : content.desc;
        }
    });

    // Update Button Visibility/State
    if (isShuffled && spreadContainer.classList.contains('hidden')) {
        // Deck ready / Selecting
        instructionText.textContent = TRANSLATIONS[lang]['instr_ready'];
    } else if (!spreadContainer.classList.contains('hidden')) {
        // Reading complete state
        instructionText.textContent = TRANSLATIONS[lang]['instr_complete'];
    } else {
        // Initial state
        instructionText.textContent = TRANSLATIONS[lang]['instr_initial'];
    }
}

function renderFan() {
    // Clear or hide the stack
    deckStack.classList.add('hidden');

    // Create Fan Container if it doesn't exist, else clear it
    let fanContainer = document.getElementById('fanContainer');
    if (!fanContainer) {
        fanContainer = document.createElement('div');
        fanContainer.id = 'fanContainer';
        fanContainer.className = 'fan-container';
        document.getElementById('deckContainer').appendChild(fanContainer);
    }
    fanContainer.innerHTML = '';

    const totalCards = 78;
    const angleRange = 120; // Tighter arc
    const startAngle = -60; // Start arc degree
    const radius = 400; // Distance from pivot

    for (let i = 0; i < totalCards; i++) {
        const cardEl = document.createElement('div');
        cardEl.className = 'fan-card';
        cardEl.dataset.index = i;

        // Calculate rotation for each card
        const angle = startAngle + (i / (totalCards - 1)) * angleRange;

        // Store base transform for hover state management in CSS or JS
        // Inverted: move down from top pivot point
        const baseTransform = `translate(-50%, 0) rotate(${angle}deg) translateY(${radius}px)`;
        cardEl.style.transform = baseTransform;
        cardEl.style.zIndex = i;

        // Hover events for "Pop Out" effect
        cardEl.addEventListener('mouseenter', () => {
            cardEl.style.transform = `translate(-50%, 0) rotate(${angle}deg) translateY(${radius + 40}px) scale(1.1)`;
        });
        cardEl.addEventListener('mouseleave', () => {
            if (!cardEl.classList.contains('selected')) {
                cardEl.style.transform = baseTransform;
            }
        });

        cardEl.addEventListener('click', () => handleCardSelect(cardEl, i));

        fanContainer.appendChild(cardEl);
    }
}

function handleCardSelect(cardEl, index) {
    if (selectedCards.length >= readingMode) return;
    if (cardEl.classList.contains('selected')) return;

    cardEl.classList.add('selected');

    // Add selection order number
    const numBadge = document.createElement('div');
    numBadge.className = 'selection-number';
    numBadge.textContent = selectedCards.length + 1;
    cardEl.appendChild(numBadge);

    // Move to fixed visual "slot" to prevent overlap
    const posIndex = selectedCards.length;
    let xOffset = 0;

    if (readingMode === 3) {
        // -180, 0, +180 (Wider spacing to prevent overlap)
        xOffset = (posIndex - 1) * 180;
    } else if (readingMode === 10) {
        // Tighter packing for 10 cards? Or just stack them visually in center
        // Let's fan them out slightly or pile them
        xOffset = (posIndex - 4.5) * 40; // Dense spread
    } else {
        // Center
        xOffset = 0;
    }

    // Override transform completely: center X + offset, fixed Y down
    // Note: base transform used translate(-50%, 0), so we keep that relative center
    cardEl.style.transform = `translate(-50%, 0) translateX(${xOffset}px) translateY(60px) rotate(0deg) scale(1.15)`;
    cardEl.style.opacity = "1";
    // Fix Bug 1: Increment Z-Index so later selections are on top
    cardEl.style.zIndex = 2000 + selectedCards.length;

    // Randomly interact with the "real" deck
    // We don't just pick index 'i' because the rendered fan is just visual 
    // but here we can map 1-to-1 to a shuffled deck or just pick random unique cards as user clicks.
    // Let's pick from a shuffled array to maintain "fate" but driven by user choice.

    // Check if we have a shuffled mapping, if not create one or just pick random available
    // Better: We said "shuffle" first, so the deck IS shuffled. 
    // The fan represents the shuffled deck. 
    // We need to map visual index to deck index? 
    // Or just say "User picked a card, let's Pop one from our shuffled deck state?"
    // To support "Sectors", let's assume the user is slicing the deck.
    // For simplicity: Map the visual card to a random remaining card in the deck to simulate 'fate' 
    // OR if we truly shuffled, card 0 is top. Fan index 0 is bottom?
    // Let's simulating picking a specific card from the shuffled set.

    // Simple approach: The deck is already randomized in memory?
    // Current `shuffleDeck` just sets a flag. Let's actually shuffle the array in memory.

    // Find a card from the deck that hasn't been selected
    const card = deck[index]; // We need to actually shuffle the `deck` array first!

    // Reversal check: Random chance (e.g. 40%)
    const isReversed = Math.random() < 0.4;

    selectedCards.push({
        card: card,
        isReversed: isReversed
    });

    initAudio();
    playFlipSound();

    if (selectedCards.length === readingMode) {
        setTimeout(revealSpread, 800);
    }
}

function shuffleDeck() {
    initAudio();
    playShuffleSound();

    const t = TRANSLATIONS[currentLang];
    instructionText.textContent = t['instr_shuffling'];
    deckStack.classList.add('shuffling');

    // Create temporary piles for animation
    const pile1 = document.createElement('div');
    pile1.className = 'shuffle-pile shuffle-left';
    const pile2 = document.createElement('div');
    pile2.className = 'shuffle-pile shuffle-right';

    deckStack.appendChild(pile1);
    deckStack.appendChild(pile2);

    // Actual Fisher-Yates Shuffle of the `deck` array
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    selectedCards = []; // Reset selection

    setTimeout(() => {
        // Animation complete cleanup
        pile1.remove();
        pile2.remove();
        deckStack.classList.remove('shuffling');

        // Dynamic instruction based on reading mode
        const modeText = readingMode === 10 ? '10 cards' : readingMode === 3 ? '3 cards' : '1 card';
        const modeTextZh = readingMode === 10 ? '10 張牌' : readingMode === 3 ? '3 張牌' : '1 張牌';
        instructionText.textContent = currentLang === 'en'
            ? `Select ${modeText} from the deck.`
            : `請從牌組中選擇 ${modeTextZh}。`;
        shuffleBtn.classList.add('hidden');
        shuffleBtn.disabled = true;

        drawBtn.classList.add('hidden');

        // Fix Bug 3: Hide mode selection during reading
        document.querySelector('.reading-modes').classList.add('hidden');

        isShuffled = true;

        renderFan();
    }, 1200); // 400ms split + 600ms riffle + buffer
}

function revealSpread() {
    if (!isShuffled || selectedCards.length < readingMode) return;

    // cleanup fan
    const fanContainer = document.getElementById('fanContainer');
    if (fanContainer) fanContainer.innerHTML = ''; // or remove, but keep for smooth transition if needed

    document.getElementById('deckContainer').classList.add('hidden');
    spreadContainer.classList.remove('hidden');

    // spreadContainer is global
    spreadContainer.innerHTML = ''; // Clear existing static slots
    spreadContainer.classList.remove('hidden');
    spreadContainer.classList.remove('celtic-cross');

    let slots = [];
    if (readingMode === 10) {
        spreadContainer.classList.add('celtic-cross');

        // Create Left and Right containers
        const leftContainer = document.createElement('div');
        leftContainer.className = 'celtic-cross-left';

        const rightContainer = document.createElement('div');
        rightContainer.className = 'celtic-cross-right';

        spreadContainer.appendChild(leftContainer);
        spreadContainer.appendChild(rightContainer);

        // Generate 10 slots
        for (let i = 1; i <= 10; i++) {
            const slotEl = document.createElement('div');
            slotEl.className = 'spread-card-slot';
            slotEl.id = `cardSlot${i}`;

            const labelEl = document.createElement('div');
            labelEl.className = 'slot-label';
            labelEl.setAttribute('data-i18n', `slot_cc_${i}`);
            labelEl.textContent = TRANSLATIONS[currentLang][`slot_cc_${i}`];

            const placeholderEl = document.createElement('div');
            placeholderEl.className = 'card-placeholder';

            slotEl.appendChild(labelEl);
            slotEl.appendChild(placeholderEl);

            // Append to correct container
            if (i <= 6) {
                leftContainer.appendChild(slotEl);
            } else {
                rightContainer.appendChild(slotEl);
            }
            slots.push(`cardSlot${i}`);
        }
    } else {
        // Standard Flex Layout (1 or 3)
        // Re-create standard slots dynamically to match new approach
        // Or just use appended logic
        const count = readingMode;
        for (let i = 1; i <= count; i++) {
            const slotEl = document.createElement('div');
            slotEl.className = 'spread-card-slot';
            slotEl.id = `cardSlot${i}`;

            const labelEl = document.createElement('div');
            labelEl.className = 'slot-label';
            const labelKey = count === 1 ? 'slot_1' : `slot_${i}`; // Reuse slot_1 for single? Or Make generic?
            // Actually existing code had slot_1, slot_2, slot_3 hardcoded for 3-card.
            // For Single card, maybe just "The Insight"?
            // Existing logic: "The Situation" used for slot 1.

            labelEl.setAttribute('data-i18n', labelKey);
            labelEl.textContent = TRANSLATIONS[currentLang][labelKey] || (count === 1 ? 'The Insight' : `Card ${i}`);

            const placeholderEl = document.createElement('div');
            placeholderEl.className = 'card-placeholder';

            slotEl.appendChild(labelEl);
            slotEl.appendChild(placeholderEl);
            spreadContainer.appendChild(slotEl);
            slots.push(`cardSlot${i}`);
        }
    }

    slots.forEach((slotId, index) => {
        const selection = selectedCards[index];
        const card = selection.card;
        const isReversed = selection.isReversed;

        const slotEl = document.getElementById(slotId);
        const content = card[currentLang];

        // Determine text and class
        const descText = isReversed && content.desc_rev ? content.desc_rev : content.desc;
        const revClass = isReversed ? 'reversed' : '';
        const historyLabel = TRANSLATIONS[currentLang]['label_history'];

        // Create Card HTML with 3D flip structure
        const cardHtml = `
            <div class="spread-card hidden-card ${revClass}" data-card-id="${card.id}" style="animation-delay: ${index * 0.4}s">
                <div class="card-inner">
                    <div class="card-back"></div>
                    <div class="card-front">
                        <div class="img-wrapper">
                            <img src="${card.imageUrl}" alt="${content.name}">
                        </div>
                    </div>
                </div>
                <div class="spread-info">
                    <h4>${content.name}</h4>
                    <p>${descText}</p>
                    ${content.history ? `<div class="card-history"><strong>${historyLabel}:</strong> ${content.history}</div>` : ''}
                </div>
            </div>
            `;

        slotEl.querySelector('.card-placeholder').innerHTML = cardHtml;

        setTimeout(() => {
            slotEl.querySelector('.spread-card').classList.remove('hidden-card');
            slotEl.querySelector('.spread-card').classList.add('revealed');
        }, index * 500 + 100);
    });

    // Special handling for Celtic Cross: Move Card 2 info to Card 1 area
    if (readingMode === 10) {
        const slot1 = document.getElementById('cardSlot1');
        const slot2 = document.getElementById('cardSlot2');
        if (slot1 && slot2) {
            const info2 = slot2.querySelector('.spread-info');
            const card1Wrapper = slot1.querySelector('.spread-card');
            if (info2 && card1Wrapper) {
                // Add a separator style or wrapper if needed, but simple append works for vertical stack
                info2.style.marginTop = '1rem';
                info2.style.borderTop = '1px solid var(--gold)';
                info2.style.paddingTop = '1rem';
                // Optional: Add a label to distinguish
                const label = document.createElement('h4');
                label.style.fontSize = '0.9rem';
                label.style.marginBottom = '0.5rem';
                label.style.color = 'var(--gold)';
                label.textContent = TRANSLATIONS[currentLang]['slot_cc_2']; // "The Crossing"
                info2.insertBefore(label, info2.firstChild);

                card1Wrapper.appendChild(info2);
            }
        }
    }

    setTimeout(() => {
        resetBtn.classList.remove('hidden');
        saveActionContainer.classList.remove('hidden');
        instructionText.textContent = TRANSLATIONS[currentLang]['instr_complete'];
    }, 2000);
}

// ===== History Logic =====

function saveReading() {
    if (selectedCards.length < 1) return; // Allow saving any reading mode

    const history = JSON.parse(localStorage.getItem('sola_busca_history') || '[]');
    const newEntry = {
        date: new Date().toLocaleString(currentLang === 'en' ? 'en-US' : 'zh-TW'),
        cards: selectedCards.map(s => ({
            id: s.card.id,
            name: s.card[currentLang].name,
            img: s.card.imageUrl,
            isReversed: s.isReversed
        }))
    };

    history.unshift(newEntry);
    localStorage.setItem('sola_busca_history', JSON.stringify(history.slice(0, 20))); // Keep last 20

    saveReadingButton.disabled = true;
    saveReadingButton.innerHTML = "✓ " + TRANSLATIONS[currentLang]['btn_save'];

    renderHistoryUI();
}

function loadHistory() {
    renderHistoryUI();
}

function renderHistoryUI() {
    const history = JSON.parse(localStorage.getItem('sola_busca_history') || '[]');

    if (history.length === 0) {
        historyContent.innerHTML = `<p class="empty-msg" data-i18n="empty_history">${TRANSLATIONS[currentLang]['empty_history']}</p>`;
        return;
    }

    historyContent.innerHTML = history.map(entry => `
            <div class="history-item">
            <span class="history-item-date">${entry.date}</span>
            <div class="history-item-cards">
                ${entry.cards.map(c => `
                    <div class="history-mini-card ${c.isReversed ? 'reversed' : ''}">
                        <img src="${c.img}" alt="${c.name}">
                        <span class="history-mini-name">${c.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
            `).join('');
}

function clearHistory() {
    localStorage.removeItem('sola_busca_history');
    renderHistoryUI();
}

function toggleHistory() {
    historyOverlay.classList.toggle('hidden');
    if (!historyOverlay.classList.contains('hidden')) {
        renderHistoryUI();
    }
}

function resetReading() {
    isShuffled = false;
    selectedCards = [];

    document.getElementById('deckContainer').classList.remove('hidden');

    // Restore stacks
    deckStack.classList.remove('hidden');
    const fanContainer = document.getElementById('fanContainer');
    if (fanContainer) fanContainer.remove();

    spreadContainer.classList.add('hidden');

    shuffleBtn.classList.remove('hidden');
    shuffleBtn.disabled = false;

    drawBtn.classList.remove('hidden');
    drawBtn.disabled = true;

    resetBtn.classList.add('hidden');
    saveActionContainer.classList.add('hidden');
    saveReadingButton.disabled = false;
    saveReadingButton.innerHTML = `<span class="btn-ornament">❦</span> <span data-i18n="btn_save">${TRANSLATIONS[currentLang]['btn_save']}</span> <span class="btn-ornament">❦</span>`;

    instructionText.textContent = TRANSLATIONS[currentLang]['instr_initial'];

    // Clear slots
    spreadContainer.innerHTML = '';

    // Restore mode selection
    document.querySelector('.reading-modes').classList.remove('hidden');
}

function setReadingMode(mode) {
    readingMode = parseInt(mode);
    modeButtons.forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.mode) === readingMode);
    });
}

// Event Listeners
shuffleBtn.addEventListener('click', shuffleDeck);
drawBtn.addEventListener('click', revealSpread);
resetBtn.addEventListener('click', resetReading);

langSelect.addEventListener('change', (e) => {
    updateLanguage(e.target.value);
    renderHistoryUI(); // Refresh history text
});

historyToggleButton.addEventListener('click', toggleHistory);
closeHistoryButton.addEventListener('click', toggleHistory);
clearHistoryButton.addEventListener('click', clearHistory);
saveReadingButton.addEventListener('click', saveReading);

historyOverlay.addEventListener('click', (e) => {
    if (e.target === historyOverlay) toggleHistory();
});

modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!isShuffled) {
            setReadingMode(btn.dataset.mode);
        }
    });
});

// Init
console.log("Sola Busca Divination App Initialized");
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference or default to 'en'
    const savedLang = localStorage.getItem('sola_busca_language') || 'en';
    langSelect.value = savedLang; // Update dropdown to match
    updateLanguage(savedLang);
});
