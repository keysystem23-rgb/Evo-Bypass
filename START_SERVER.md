# 🚀 Quick Start Guide - Zen Bypass Server

## Installation & Setup

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Environment
Create `server/.env` file:
```env
PORT=3000
NODE_ENV=development
CORS_ORIGIN=*
API_KEY=my-secret-key-12345
```

### 3. Start the Server

**Development Mode (with auto-reload):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

Server will run at: `http://localhost:3000`

## Test the API

### Using cURL:
```bash
# Test health check
curl http://localhost:3000/api/health

# Test bypass
curl -X POST http://localhost:3000/api/bypass \
  -H "Content-Type: application/json" \
  -d '{"url":"https://linkvertise.com/123456/example"}'

# Get stats
curl http://localhost:3000/api/stats
```

### Using Browser:
Open: `http://localhost:3000/api/health`

## Connect Frontend to Backend

Update your frontend to use the API:

```javascript
const API_URL = 'http://localhost:3000/api';

async function bypassLink(url) {
  const response = await fetch(`${API_URL}/bypass`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url })
  });
  return await response.json();
}
```

## Available Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server health check |
| GET | `/api/stats` | Get bypass statistics |
| GET | `/api/supported` | List supported services |
| POST | `/api/bypass` | Bypass single URL |
| POST | `/api/bypass/bulk` | Bypass multiple URLs (API key required) |

## Supported Services

✅ Linkvertise  
✅ Work.ink  
✅ Lootlabs  
✅ Rekonise  
✅ Platoboost  
✅ Admaven  
✅ Lockr.so  
✅ Shrtfly  
✅ Sub2Unlock  
✅ Boost.ink  
✅ mBoost  
✅ 20+ more via Universal bypass  

## Troubleshooting

**Port already in use?**
Change PORT in `.env` file

**CORS errors?**
Set `CORS_ORIGIN=*` in `.env` or specify your frontend URL

**Module not found?**
Run `npm install` in the server directory

## Next Steps

1. ✅ Server is running
2. Test API endpoints
3. Connect your frontend
4. Deploy to production (Render, Railway, Heroku, etc.)

---

**Need help?** Check `server/README.md` for detailed documentation.
