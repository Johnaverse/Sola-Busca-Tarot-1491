# Agent Instructions: Sola Busca Tarot Project

## Project Overview
This project is a historically accurate digital recreation of the Sola Busca Tarot (1491). It focuses on presenting a premium, renaissance-aesthetic experience using modern interactions but strictly traditional technologies.

## Technology Stack
- **Core**: Vanilla HTML5, CSS3, JavaScript (ES6+).
- **Frameworks**: NONE. Do not introduce React, Vue, polished.js, Tailwind, etc.
- **Build Tools**: None. The project must run directly in the browser via `index.html`.
- **Assets**: Images in `assets/cards/`.

## Design Philosophy & Aesthetics
- **Theme**: Renaissance, 15th-century Italy, Museum Quality.
- **Color Palette**:
  - Base: `#2C241B` (Deep Brown)
  - Paper: `#D9CBAE` (Aged Parchment)
  - Text: `#3E3221` (Dark Sepia)
  - Gold: `#C0A062` (Muted Gold) - Use for accents/borders.
  - Accent: `#8B2635` (Venetian Red)
- **Typography**:
  - Headings: `Cormorant Garamond` (Serif)
  - Body: `Lato` (Sans-serif)
- **UI/UX**:
  - Smooth, slow transitions (CSS `transition: all 0.3s ease`).
  - No "gamey" or "arcade" effects. Keep it dignified and mystical.
  - Responsive: Must work on Mobile (vertical layout) and Desktop (horizontal/grid).

## Coding Conventions
### HTML
- specific IDs for interactive elements.
- Semantic tags (`<header>`, `<main>`, `<footer`).

### CSS (styles.css)
- Use CSS Variables (`:root`) defined at the top.
- Flexbox and Grid for layouts.
- Avoid inline styles in HTML (except dynamic values like rotation).

### JavaScript (app.js)
- **State Management**: Simple global variables (`currentLang`, `deck`, `isShuffled`).
- **DOM Manipulation**: Standard `document.getElementById` or `querySelector`.
- **Logic**:
  - `shuffleDeck()`: Fisher-Yates shuffle.
  - `renderFan()`: Visual card selection.
  - `revealSpread()`: The "Reading" phase.
- **Localization**: All text must be in `TRANSLATIONS` object (currently EN and ZH-TW).

## Workflow Guidelines
1. **No Build Step**: Changes must work immediately upon refreshing `index.html`.
2. **Assets**: If new assets are needed, generate placeholders or ask the user.
3. **Testing**: Verify flows: Load -> Shuffle -> Select 3 -> Reveal -> Reset.

## Critical Rules
1. **Never** suggest installing `npm` packages unless absolutely necessary for a dev script.
2. **Maintain** the "Sola Busca" lore. Major Arcana names are historic (Mato, Panfilio), NOT standard (Fool, Magician).
3. **Aesthetics First**: If it looks cheap, it is wrong.
