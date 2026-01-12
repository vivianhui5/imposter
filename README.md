# Imposter Party Game 🎮

A mobile-first web app for secretly distributing roles in a party game. One player is the Imposter; all others see the same word.

## Features

- 🎲 Random word generation from backend API
- 📱 Mobile-first design (optimized for iPhone)
- 🎨 Cute, modern UI with smooth animations
- 🔒 Privacy-focused (no accounts, no tracking)
- ⚡ Fast and simple to use

## Tech Stack

**Frontend:**
- React 18
- Vite
- CSS3 with custom properties

**Backend:**
- Node.js
- Express
- CORS-enabled REST API

## Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

   Or manually:
   ```bash
   npm install
   cd backend && npm install
   cd ../frontend && npm install
   ```

## Development

**Run both frontend and backend concurrently:**
```bash
npm run dev
```

This will start:
- Backend API on `http://localhost:3001`
- Frontend dev server on `http://localhost:3000`

**Or run them separately:**

Backend only:
```bash
npm run dev:backend
```

Frontend only:
```bash
npm run dev:frontend
```

## How to Play

1. Enter the number of players (3-20)
2. Tap "Start Game"
3. Pass the phone around
4. Each player taps "Reveal Word" to see their role
5. One random player will be the Imposter
6. After all reveals, start discussing!

## Project Structure

```
imposter/
├── backend/
│   ├── server.js          # Express API server
│   ├── words.js           # Word library
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Main game component
│   │   ├── main.jsx       # React entry point
│   │   └── index.css      # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── specs.txt              # Full specification
└── package.json           # Root package
```

## API Endpoints

### GET `/api/random-word`
Returns a random word from the curated library.

**Response:**
```json
{
  "word": "Airport"
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "ok"
}
```

## Design Specifications

- **Target Device:** iPhone 14/15 (390 × 844 px)
- **Orientation:** Portrait only
- **Font:** Poppins (via Google Fonts)
- **Color Scheme:** Soft pinks and corals
- **Button Height:** Minimum 56px for touch targets
- **Animations:** Smooth fade-ins and pop effects

## Deployment

**Frontend:**
- Deploy to Vercel, Netlify, or similar
- Build with: `npm run build` (from frontend directory)

**Backend:**
- Deploy as serverless function or to any Node.js host
- Ensure CORS is properly configured
- Set PORT environment variable if needed

## License

This project is for educational and personal use.

---

Built with ❤️ for fun party games!

