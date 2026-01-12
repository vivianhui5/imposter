# Quick Start Guide 🚀

Get the Imposter game running in 3 simple steps!

## Prerequisites

Make sure you have Node.js installed (version 16 or higher):
```bash
node --version
```

If you don't have Node.js, download it from [nodejs.org](https://nodejs.org/)

## Setup & Run

### Step 1: Install Dependencies

From the project root directory:

```bash
npm run install:all
```

This will install dependencies for the root, backend, and frontend.

### Step 2: Start the App

```bash
npm run dev
```

This starts both the backend API and frontend development server.

### Step 3: Open in Browser

Open your browser and navigate to:
```
http://localhost:3000
```

**For best experience:** Open Chrome DevTools (F12), toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M), and select "iPhone 14 Pro" or similar mobile device.

## What's Running?

- **Frontend:** http://localhost:3000 (React + Vite)
- **Backend API:** http://localhost:3001 (Express)

## Troubleshooting

**Port already in use:**
- Stop other applications using ports 3000 or 3001
- Or modify the ports in `frontend/vite.config.js` and `backend/server.js`

**Can't fetch word:**
- Make sure backend is running (check terminal)
- Verify backend URL in browser: http://localhost:3001/api/random-word

**Dependencies not installing:**
- Try deleting all `node_modules` folders and running `npm run install:all` again
- Clear npm cache: `npm cache clean --force`

## Testing on Your Phone

1. Find your computer's local IP address:
   - Mac/Linux: `ifconfig | grep "inet "`
   - Windows: `ipconfig`

2. Make sure your phone is on the same WiFi network

3. Update `frontend/vite.config.js` to allow external access:
   ```js
   server: {
     host: '0.0.0.0',
     port: 3000,
     // ... rest of config
   }
   ```

4. On your phone, open: `http://YOUR_IP_ADDRESS:3000`

## Next Steps

- Read `README.md` for full documentation
- Check `specs.txt` for complete game specifications
- Ready to deploy? See deployment section in README

---

Have fun playing! 🎉

