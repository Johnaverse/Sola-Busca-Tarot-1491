# Agent Instructions: Sola Busca Tarot Project

## 1. Project Overview
**Title**: The Sola Busca Tarot (1491) - Digital Deck
**Goal**: Create a premium, historically accurate digital tarot reading experience entirely in vanilla web technologies.
**Aesthetics**: Renaissance Museum Quality. Dark, mystical, aged parchment, gold leaf, ambient particles.
**Deployment**: GitHub Pages compatible (all source code in `docs/` folder).

## 2. Technology Stack & Constraints
- **Frameworks**: NONE. Pure HTML5, CSS3, JavaScript (ES6+).
- **Build System**: NONE. Must run directly in browser via `index.html`.
- **Dependencies**: NONE. No npm, no external libraries (except Google Fonts).
- **Asset Path**: All images and assets must be relative to the `docs/` folder (e.g., `assets/cards/`).
- **Audio**: Use **Web Audio API** to generate synthetic sound effects (shuffling, flipping) programmatically. Do not use external audio files.

## 3. Directory Structure
```
tarot/
├── docs/
│   ├── index.html              # Main entry point
│   ├── styles.css              # styling
│   ├── app.js                  # Logic, Data, Translations, Audio
│   └── assets/
│       ├── cards/              # [major-XX-name.jpg] & [suit-rank.jpg]
│       └── card-back.png       # Back design
├── README.md
└── AGENT_INSTRUCTIONS.md
```

## 4. Core Features & Logic

### A. The Deck
- **Size**: 78 Cards.
- **Major Arcana**: 22 cards. Use **historical Sola Busca names** (Mato, Panfilio, Nerone), NOT standard names (Fool, Magician).
- **Minor Arcana**: 56 cards. 4 Suits (Swords, Batons, Cups, Coins).

### B. Reading Modes
1.  **Single Card**: Daily insight.
2.  **Three-Card Spread**: Situation / Action / Outcome.
3.  **Celtic Cross**: 10 distinct slots with specific meanings.

### C. The Divination Flow
1.  **Landing**: Show deck stack on a table.
2.  **Shuffle**: 
    -   CSS animation of deck splitting and riffle.
    -   Play synthetic "riffle" sound.
3.  **Selection (The Fan)**:
    -   Deck spreads into a semi-circle fan (Arc).
    -   Cards hover/pop-up on mouseover.
    -   User clicks *N* cards based on selected mode.
    -   Selected cards move to a temporary holding area.
4.  **Reveal**:
    -   Transition to "Spread View".
    -   Cards placed in specific slots.
    -   3D Flip animation to reveal face.
    -   Display meaning (localized).

### D. Localization
-   **Languages**: English (en) and Traditional Chinese (zh-TW).
-   **Implementation**: Store all strings in a `const TRANSLATIONS` object in `app.js`.
-   **Switching**: Update DOM elements with `data-i18n` attributes dynamically.

### E. Persistence (Journal)
-   **Storage**: Use `localStorage` key `sola_busca_history`.
-   **Data**: Store Date, Mode, Card IDs, and Reversal status.
-   **UI**: Slide-out panel to view past readings.

## 5. Design Guidelines (CSS)

### Theme Tokens
-   **Gold**: `#d4af37` (Main), `#C0A062` (Muted), `#ffd700` (Glow).
-   **Background**: Radial gradients simulating candlelight on dark wood/velvet (`#1a1510` -> `#2c241b`).
-   **Glassmorphism**: Use `backdrop-filter: blur(12px)` and `rgba(255,255,255,0.03)` for UI panels.

### Visual Effects
-   **Ambient Particles**: Use `body::before` with a moving background pattern/gradient to simulate dust motes.
-   **3D Transforms**: Use `preserve-3d` and `rotateY` for card flips.
-   **Typography**: `Cormorant Garamond` (Headings) and `Lato` (Body).

## 6. Implementation References

### Data Structure (app.js)
```javascript
const rawMajors = [
  { n: '0', name: 'Mato', name_zh: '...', desc: '...', history: '...' },
  // ...
];
// Generate full deck programmatically from raw data
```

### Audio (Synthetic)
```javascript
function playFlipSound() {
    const osc = audioCtx.createOscillator();
    // Short high-pitch burst with decay
}
```

## 7. Critical Rules for Agent
1.  **Preserve History**: Do not standardise the Major Arcana names. "Mato" is correct; "The Fool" is just a subtitle.
2.  **Filesystem**: Always write to `docs/`.
3.  **No Placeholders**: If code is provided, implementation must be complete.
4.  **Mobile First**: The "Fan" selection must work on touch devices (tap to select).
