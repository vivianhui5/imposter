# Deployment Guide

## Deploy Backend (Vercel)

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Deploy backend
```bash
cd backend
vercel
```

Follow the prompts and Vercel will give you a URL like:
`https://imposter-backend-xxx.vercel.app`

### 3. Test your backend
Visit: `https://your-backend-url.vercel.app/api/random-word`

You should see: `{"word":"airport"}` (or another random word)

---

## Deploy Frontend (Vercel)

### 1. Update the API URL
Edit `frontend/.env.production` and replace with your backend URL:
```
VITE_API_URL=https://your-actual-backend-url.vercel.app/api/random-word
```

### 2. Deploy frontend
```bash
cd frontend
vercel
```

### 3. Done!
Your app is live! Share the frontend URL with friends.

---

## Alternative: Deploy Both Together

You can also deploy the entire project as one:

```bash
# From project root
vercel
```

But you'll need to configure Vercel to handle both frontend and backend routing.

---

## Other Options

### Railway.app (Backend)
1. Go to railway.app
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository
4. Railway will auto-detect Node.js and deploy

### Netlify (Frontend)
1. Go to netlify.com
2. Drag and drop the `frontend/dist` folder after running `npm run build`
3. Set environment variable `VITE_API_URL` in Netlify dashboard

### Render (Backend)
1. Go to render.com
2. New → Web Service
3. Connect your repo
4. Set build command: `cd backend && npm install`
5. Set start command: `node backend/server.js`

---

## Quick Commands

**Build frontend for production:**
```bash
cd frontend
npm run build
```

**Preview production build locally:**
```bash
cd frontend
npm run preview
```

**Redeploy (after changes):**
```bash
vercel --prod
```

