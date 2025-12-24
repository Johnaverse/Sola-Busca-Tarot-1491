# The Sola Busca Tarot (1491) - Digital Deck

A beautiful, historically accurate digital recreation of the Sola Busca tarot deck, the oldest known complete 78-card tarot deck with illustrated Minor Arcana, created circa 1491 in Renaissance Italy.

![Sola Busca Tarot](assets/cards/major-00-mato.png)

## ✨ Features

- **Complete 78-Card Deck**: All 22 Major Arcana and 56 Minor Arcana cards
- **Historically Accurate**: Major Arcana feature unique classical figures (Panfilio, Mario, Nerone, etc.) instead of traditional names
- **Renaissance Aesthetic**: Aged parchment colors, period typography, and engraved-style borders
- **Interactive Card Drawing**: Random card selection with no-repeat logic
- **Responsive Design**: Works beautifully on desktop and mobile devices

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
   
   Simply open `index.html` in your web browser. No build process or server required!
   
   For the best experience, you can use a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
   
   Then navigate to `http://localhost:8000`

3. **Start drawing cards!**
   - Click "Draw Card" to randomly select a card from the deck
   - Each card can only be drawn once until you reset
   - Click "Reset Deck" to return all 78 cards to the pool

## 🎨 Design Philosophy

The design evokes the feeling of handling a rare 15th-century artifact:

- **Color Palette**: Muted earth tones (aged parchment, sepia, charcoal, faded gold)
- **Typography**: Cormorant Garamond (antique serif) and Lato (clean sans-serif)
- **Visual Elements**: Engraved-style borders, subtle parchment texture, soft worn edges
- **Animations**: Smooth card flip transitions and hover effects

## 🖼️ Card Images

This project includes:
- **6 AI-generated cards**: High-quality Renaissance-style illustrations for select Major Arcana
- **72 SVG placeholders**: Elegant placeholder designs for the remaining cards

### Replacing Card Images

To use your own card images:

1. Place your images in the `assets/cards/` directory
2. Follow the naming convention:
   - Major Arcana: `major-XX-name.png` (e.g., `major-00-mato.png`)
   - Minor Arcana: `suitname-XX.png` (e.g., `swords-01.png`, `cups-queen.png`)
3. Update the file extensions in `app.js` if needed (currently supports both `.png` and `.svg`)

## 📚 Historical Context

The Sola Busca tarot deck was created around 1491 in Italy and is notable for:

- Being the **oldest known complete 78-card tarot deck**
- Featuring the **first fully illustrated Minor Arcana** (influencing later decks like Rider-Waite-Smith)
- Depicting **unique historical figures** in the Major Arcana instead of traditional archetypes
- Reflecting **Renaissance humanism** and renewed interest in classical antiquity

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks or dependencies
- **Responsive Design** - Mobile-first approach
- **Semantic HTML5** - Proper SEO and accessibility
- **Modern CSS** - Custom properties, flexbox, animations
- **Vanilla JavaScript** - Clean, readable game logic

## 📁 Project Structure

```
tarot/
├── index.html              # Main HTML structure
├── styles.css              # Renaissance-themed styles
├── app.js                  # Card data and game logic
├── generate_cards.py       # Script to generate SVG placeholders
├── assets/
│   └── cards/              # Card images (PNG and SVG)
└── README.md               # This file
```

## 🎯 Future Enhancements

Potential improvements:
- Add card meanings and interpretations
- Implement multi-card spreads (Celtic Cross, Three-Card, etc.)
- Add reading history and journal
- Include sound effects for card drawing
- Add card reversal option
- Create print-friendly card layouts

## 📜 License

This project is open source. The Sola Busca tarot deck itself is in the public domain.

## 🙏 Credits

- Historical research from various tarot history sources
- Card data based on the original 1491 Sola Busca deck
- AI-generated card illustrations created with period-appropriate styling

---

**Enjoy your journey through Renaissance tarot history!** ✦
