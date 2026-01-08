# The Sola Busca Tarot (1491) - Digital Deck

A beautiful, historically accurate digital recreation of the Sola Busca tarot deck, the oldest known complete 78-card tarot deck with illustrated Minor Arcana, created circa 1491 in Renaissance Italy.

![Sola Busca Tarot](docs/assets/cards/major-00-mato.jpg)

## ✨ Features

- **Complete 78-Card Deck**: All 22 Major Arcana and 56 Minor Arcana cards.
- **Multiple Reading Modes**:
  - **Single Card**: For quick daily guidance.
  - **Three-Card Spread**: Classic Situation-Action-Outcome layout.
  - **Celtic Cross**: A comprehensive 10-card spread for deep insights.
- **Bilingual Support**: Fully localized in English and Traditional Chinese (繁體中文).
- **Reading Journal**: Automatically save and review your past readings (stored locally).
- **Immersive Experience**: featuring synthetic sound effects (Web Audio API), 3D card flips, and reversed card interpretations.
- **Historically Accurate**: Major Arcana feature unique classical figures (Panfilio, Mario, Nerone, etc.) instead of traditional names.
- **Renaissance Aesthetic**: Aged parchment colors, period typography, and engraved-style borders.

## 🎴 The Deck

### Major Arcana (22 Cards)
The Sola Busca Major Arcana uniquely depict historical and mythological figures from classical antiquity:

- **0 - Mato** (The Fool)
- **I - Panfilio** (The Magician)
- **II - Postumio**
- **III - Lenpio**
- **IIII - Mario** (The Emperor) - Gaius Marius
- **V - Catulo** (The Hierophant)
- **VI - Sesto** (The Lovers)
- **VII - Deo Tauro** (The Chariot)
- **VIII - Nerone** (Strength) - Emperor Nero
- **VIIII - Falco** (The Hermit)
- **X - Venturio** (Wheel of Fortune)
- **XI - Tulio** (Justice)
- **XII - Carbone** (The Hanged Man)
- **XIII - Catone** (Death)
- **XIIII - Bocho** (Temperance)
- **XV - Metelo** (The Devil)
- **XVI - Olivo** (The Tower)
- **XVII - Ipeo** (The Star)
- **XVIII - Lentulo** (The Moon)
- **XVIIII - Sabino** (The Sun)
- **XX - Nenbroto** (Judgement) - Nimrod
- **XXI - Nabuchodenasor** (The World) - Nebuchadnezzar

### Minor Arcana (56 Cards)
Four suits, each with 14 cards:
- **Swords** (Spade): Ace through 10, Page, Knight, Queen, King
- **Batons** (Bastoni): Ace through 10, Page, Knight, Queen, King
- **Cups** (Coppe): Ace through 10, Page, Knight, Queen, King
- **Coins** (Denari): Ace through 10, Page, Knight, Queen, King

## 🚀 Getting Started

### Running Locally

1. **Clone or download this repository**

2. **Open the application**
   
   Simply open `docs/index.html` in your web browser. No build process or server required!
   
   For the best experience, you can use a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
   
   Then navigate to `http://localhost:8000/docs/`

3. **Start drawing cards!**
   - Choose your reading mode (Single, Three-Card, or Celtic Cross).
   - Shuffle and select your cards.
   - Reveal your fate and save it to your journal.

## 🎨 Design Philosophy

The design evokes the feeling of handling a rare 15th-century artifact:

- **Color Palette**: Muted earth tones (aged parchment, sepia, charcoal, faded gold)
- **Typography**: Cormorant Garamond (antique serif) and Lato (clean sans-serif)
- **Visual Elements**: Engraved-style borders, subtle parchment texture, soft worn edges
- **Animations**: Smooth card flip transitions, fanned selection, and hover effects

## 🖼️ Card Images

This project includes:
- **Complete 78-Card Deck**: High-quality digital facsimiles/recreations in JPG format.

### Replacing Card Images

To use your own card images:

1. Place your images in the `docs/assets/cards/` directory
2. Follow the naming convention:
   - Major Arcana: `major-XX-name.jpg` (e.g., `major-00-mato.jpg`)
   - Minor Arcana: `suitname-XX.jpg` (e.g., `swords-01.jpg`, `cups-queen.jpg`)
3. Update the file extensions in `docs/app.js` if needed (currently configured for `.jpg`)

## 📚 Historical Context

The Sola Busca tarot deck was created around 1491 in Italy and is notable for:

- Being the **oldest known complete 78-card tarot deck**
- Featuring the **first fully illustrated Minor Arcana** (influencing later decks like Rider-Waite-Smith)
- Depicting **unique historical figures** in the Major Arcana instead of traditional archetypes
- Reflecting **Renaissance humanism** and renewed interest in classical antiquity

## 🛠️ Technical Details

- **Core**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Audio**: Web Audio API for synthetic sound generation (no external audio files)
- **Persistence**: LocalStorage for saving language preference and reading history
- **Responsive**: Mobile-first fluid design using Flexbox and CSS Grid
- **Accessibility**: Semantic HTML and ARIA labels

## 📁 Project Structure

```
tarot/
├── docs/
│   ├── index.html              # Main HTML structure
│   ├── styles.css              # Renaissance-themed styles
│   ├── app.js                  # Logic, state, translations, audio
│   └── assets/
│       └── cards/              # Card images (JPG)
├── wikimedia_files.json        # Source tracking for images
├── AGENT_INSTRUCTIONS.md       # AI Agent Context
└── README.md                   # This file
```

## 🎯 Future Enhancements

Potential improvements:
- More complex spreads
- Export reading to image/PDF
- "Daily Draw" notifications

## 📜 License

This project is open source. The Sola Busca tarot deck itself is in the public domain.

## 🙏 Credits

- Historical research from various tarot history sources
- Card data based on the original 1491 Sola Busca deck
- AI-generated/enhanced card illustrations created with period-appropriate styling
