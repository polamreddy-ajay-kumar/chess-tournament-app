# A4MP CHESS

A fully functional chess tournament platform with a modern, mobile-first UI.

## Features

- **Tournament Lobby**: Browse and join multiple chess tournaments (Delhi, New York, Berlin, London)
- **Playable Chess Board**: Full 8x8 chess board with piece movement
- **Chess Rules Implementation**:
  - Legal piece movement
  - Turn management
  - Check detection
  - Checkmate detection
  - Stalemate detection
  - Castling
  - En passant
  - Pawn promotion
  - Move history tracking

- **Game Controls**:
  - Undo moves
  - New Game
  - Draw offer
  - Move notation display

- **Responsive Design**:
  - Mobile-first layout
  - Desktop support
  - Touch-friendly interface

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The app will open at http://localhost:3000

## Build

```bash
npm run build
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- chess.js (for chess logic)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── TopBar.tsx
│   ├── PassBanner.tsx
│   ├── TournamentCard.tsx
│   ├── BottomNav.tsx
│   └── ChessBoard.tsx
├── screens/            # Full-page screens
│   ├── TournamentLobby.tsx
│   └── ChessGame.tsx
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## License

MIT
