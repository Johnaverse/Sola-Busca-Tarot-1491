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
        'guide_3_title': 'The Three-Card Spread',
        'guide_3_text': 'This deck performs a classic Situation-Action-Outcome spread:',
        'guide_3_li1': 'I. The Situation: The core energy of your current moment.',
        'guide_3_li2': 'II. The Action: Guidance on what to do (or avoid).',
        'guide_3_li3': 'III. The Outcome: The potential result if advice is followed.',
        'guide_3_note': 'Allow the intricate 15th-century imagery to speak to your intuition directly.',
        'footer_main': 'The Sola Busca Tarot (1491) • Preserved by the Pinacoteca di Brera, Milan',
        'footer_sub': 'Digital facsimile for historical study and divination'
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
        'guide_3_title': '三牌陣法',
        'guide_3_text': '此牌組使用經典的「現狀-行動-結果」牌陣：',
        'guide_3_li1': 'I. 現狀：您當下的核心能量。',
        'guide_3_li2': 'II. 行動：關於做什麼（或避免什麼）的指引。',
        'guide_3_li3': 'III. 結果：如果遵循建議可能產生的結果。',
        'guide_3_note': '讓精緻的 15 世紀圖像直接與您的直覺對話。',
        'footer_main': 'Sola Busca 塔羅牌 (1491) • 米蘭布雷拉畫廊珍藏',
        'footer_sub': '用於歷史研究和占卜的數位摹本'
    }
};

// Data with Translations
const rawMajors = [
    {
        n: '0', img: 'major-00-mato.jpg',
        name: 'Mato (The Fool)', name_zh: 'Mato (愚者)',
        desc: 'Divine madness, freedom, new journey.', desc_zh: '神聖的瘋狂、自由、新的旅程。',
        desc_rev: 'Insanity, poor judgment, recklessness.', desc_rev_zh: '瘋狂、判斷力差、魯莽。'
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
        desc: 'Authority, structure, control.', desc_zh: '權威、結構、控制。',
        desc_rev: 'Tyranny, rigidity, loss of control.', desc_rev_zh: '暴政、僵化、失控。'
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
        desc: 'Courage, inner strength, patience.', desc_zh: '勇氣、內在力量、耐心。',
        desc_rev: 'Self-doubt, weakness, insecurity.', desc_rev_zh: '自我懷疑、軟弱、不安全感。'
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
let selectedCards = []; // New state for manually selected cards

// Build Deck with full translation data
rawMajors.forEach(m => {
    deck.push({
        id: `major-${m.n}`,
        type: 'major',
        imageUrl: `assets/cards/${m.img}`,
        en: { name: m.name, desc: m.desc, desc_rev: m.desc_rev },
        'zh-TW': { name: m.name_zh, desc: m.desc_zh, desc_rev: m.desc_rev_zh }
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

// ===== Functions =====

// ===== Functions =====

function updateLanguage(lang) {
    currentLang = lang;

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

    // Render 78 cards in a simple horizontal layout
    const totalCards = 78;

    for (let i = 0; i < totalCards; i++) {
        const cardEl = document.createElement('div');
        cardEl.className = 'fan-card';
        cardEl.dataset.index = i;

        cardEl.addEventListener('click', () => handleCardSelect(cardEl, i));

        fanContainer.appendChild(cardEl);
    }
}

function handleCardSelect(cardEl, index) {
    if (selectedCards.length >= 3) return;
    if (cardEl.classList.contains('selected')) return;

    cardEl.classList.add('selected');

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

    if (selectedCards.length === 3) {
        setTimeout(revealSpread, 500);
    }
}

function shuffleDeck() {
    const t = TRANSLATIONS[currentLang];
    instructionText.textContent = t['instr_shuffling'];
    deckStack.classList.add('shuffling');

    // Actual Fisher-Yates Shuffle of the `deck` array
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    selectedCards = []; // Reset selection

    setTimeout(() => {
        deckStack.classList.remove('shuffling');
        instructionText.textContent = "Select 3 cards from the deck."; // Custom text without translation key for now or update dict
        shuffleBtn.classList.add('hidden');
        shuffleBtn.disabled = true;
        // drawBtn.disabled = false; // Disable draw button, we use auto-reveal or fan interaction
        drawBtn.classList.add('hidden'); // Hide reveal button, fan interaction drives it

        isShuffled = true;

        renderFan();
    }, 1500);
}

function revealSpread() {
    if (!isShuffled || selectedCards.length < 3) return;

    // cleanup fan
    const fanContainer = document.getElementById('fanContainer');
    if (fanContainer) fanContainer.innerHTML = ''; // or remove, but keep for smooth transition if needed

    document.getElementById('deckContainer').classList.add('hidden');
    spreadContainer.classList.remove('hidden');

    const slots = ['cardSlot1', 'cardSlot2', 'cardSlot3'];

    slots.forEach((slotId, index) => {
        const selection = selectedCards[index];
        const card = selection.card;
        const isReversed = selection.isReversed;

        const slotEl = document.getElementById(slotId);
        const content = card[currentLang];

        // Determine text and class
        const descText = isReversed && content.desc_rev ? content.desc_rev : content.desc;
        const revClass = isReversed ? 'reversed' : '';

        // Create Card HTML with data-card-id for re-translation
        const cardHtml = `
            <div class="spread-card hidden-card ${revClass}" data-card-id="${card.id}" style="animation-delay: ${index * 0.5}s">
                <div class="img-wrapper">
                    <img src="${card.imageUrl}" alt="${content.name}" class="${isReversed ? 'reversed-img' : ''}">
                </div>
                <div class="spread-info">
                    <h4>${content.name}</h4>
                    <p>${descText}</p>
                </div>
            </div>
        `;

        slotEl.querySelector('.card-placeholder').innerHTML = cardHtml;

        setTimeout(() => {
            slotEl.querySelector('.spread-card').classList.remove('hidden-card');
            slotEl.querySelector('.spread-card').classList.add('revealed');
        }, index * 500 + 100);
    });

    setTimeout(() => {
        resetBtn.classList.remove('hidden');
        instructionText.textContent = TRANSLATIONS[currentLang]['instr_complete'];
    }, 2000);
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

    instructionText.textContent = TRANSLATIONS[currentLang]['instr_initial'];

    document.querySelectorAll('.card-placeholder').forEach(el => el.innerHTML = '');
}

// Event Listeners
shuffleBtn.addEventListener('click', shuffleDeck);
drawBtn.addEventListener('click', revealSpread);
resetBtn.addEventListener('click', resetReading);

langSelect.addEventListener('change', (e) => {
    updateLanguage(e.target.value);
});

// Init
console.log("Sola Busca Divination App Initialized");
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage('en');
});
