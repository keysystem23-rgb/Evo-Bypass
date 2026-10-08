# 🚀 Complete Deployment Guide - EVO Bypass

## ✅ What's New

### Black & White Theme
- Pure black (#000000) background
- White (#FFFFFF) accents
- Clean, professional design
- High contrast for better readability

### Powerful Server
- Enhanced error handling
- Better logging
- Increased rate limits (200 req/15min)
- Detailed stats tracking
- Production-ready security

### Production-Ready UI
- Real-time bypass functionality
- Copy & open bypassed links
- Live stats display
- Responsive design
- Loading states & error handling

---

## 🏃 Quick Start

### 1. Start Backend Server
```bash
cd server
npm install
npm run dev
```

Server runs at: **http://localhost:3000**

### 2. Start Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: **http://localhost:3001**

### 3. Test the API
```bash
curl http://localhost:3000/api/health
```

---

## 🌐 Deploy to Production

### Option 1: Vercel (Frontend) + Railway (Backend)

#### Deploy Frontend to Vercel
```bash
cd frontend
npm install -g vercel
vercel login
vercel
```

#### Deploy Backend to Railway
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository
4. Set root directory to `/server`
5. Add environment variables:
   ```
   PORT=3000
   NODE_ENV=production
   CORS_ORIGIN=https://your-frontend.vercel.app
   API_KEY=your-secret-key
   ```

### Option 2: Render (Full Stack)

#### Backend on Render
1. Go to [render.com](https://render.com)
2. New → Web Service
3. Connect GitHub repository
4. Settings:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node
5. Add environment variables

#### Frontend on Render
1. New → Static Site
2. Settings:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `.next`

### Option 3: VPS (DigitalOcean, AWS, etc.)

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone https://github.com/akatsukixpain12-stack/Evo-Bypass.git
cd Evo-Bypass

# Setup backend
cd server
npm install
npm install -g pm2

# Create .env file
cat > .env << EOF
PORT=3000
NODE_ENV=production
CORS_ORIGIN=*
API_KEY=your-secret-key
EOF

# Start with PM2
pm2 start server.js --name evo-bypass-api
pm2 save
pm2 startup

# Setup frontend
cd ../frontend
npm install
npm run build

# Start frontend
pm2 start npm --name evo-bypass-web -- start
pm2 save
```

---

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=3000
NODE_ENV=production
CORS_ORIGIN=https://your-domain.com
API_KEY=your-secret-api-key-here
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

---

## 🔒 Security Checklist

- [ ] Change default API_KEY
- [ ] Set proper CORS_ORIGIN
- [ ] Enable HTTPS
- [ ] Set up rate limiting
- [ ] Configure firewall
- [ ] Regular security updates
- [ ] Monitor logs
- [ ] Backup database (if using)

---

## 📊 Monitoring

### Check Server Health
```bash
curl https://your-api.com/api/health
```

### View Stats
```bash
curl https://your-api.com/api/stats
```

### PM2 Monitoring (VPS)
```bash
pm2 status
pm2 logs evo-bypass-api
pm2 monit
```

---

## 🐛 Troubleshooting

### Server won't start
```bash
# Check if port is in use
netstat -ano | findstr :3000

# Kill process
taskkill /PID <PID> /F

# Restart server
npm run dev
```

### CORS errors
Update `server/.env`:
```env
CORS_ORIGIN=*
```

### Frontend can't connect to backend
Update `frontend/app/page.tsx`:
```typescript
const API_URL = 'https://your-api-domain.com';
```

### Module not found
```bash
# Backend
cd server
rm -rf node_modules package-lock.json
npm install

# Frontend
cd frontend
rm -rf node_modules package-lock.json .next
npm install
```

---

## 🚀 Performance Optimization

### Backend
- Use PM2 cluster mode
- Enable compression
- Add Redis caching
- Use CDN for static assets

### Frontend
- Enable Next.js image optimization
- Use static generation where possible
- Implement lazy loading
- Minimize bundle size

---

## 📈 Scaling

### Horizontal Scaling
- Deploy multiple server instances
- Use load balancer (Nginx, HAProxy)
- Implement session management

### Vertical Scaling
- Upgrade server resources
- Optimize database queries
- Use caching strategies

---

## 🔄 CI/CD Setup

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: cd server && npm install
      - run: cd frontend && npm install && npm run build
```

---

## 📱 Mobile App (Optional)

Convert to mobile app using:
- React Native
- Capacitor
- Ionic

---

## 🎯 Next Steps

1. ✅ Deploy to production
2. ✅ Set up custom domain
3. ✅ Configure SSL certificate
4. ✅ Set up monitoring
5. ✅ Add analytics
6. ✅ Implement caching
7. ✅ Add more tools

---

## 📞 Support

- **GitHub**: https://github.com/akatsukixpain12-stack/Evo-Bypass
- **Issues**: https://github.com/akatsukixpain12-stack/Evo-Bypass/issues
- **Docs**: Check README.md

---

**Your production-ready EVO Bypass is ready to deploy! 🎉**
