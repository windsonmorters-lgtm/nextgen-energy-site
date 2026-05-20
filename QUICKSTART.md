# ⚡ Quick Start Guide

## What You Got

A complete, modern energy products website with:
- ✅ Beautiful React frontend with Tailwind CSS
- ✅ Fully functional REST API backend
- ✅ MongoDB database integration
- ✅ Responsive design (mobile-first)
- ✅ Product catalog with filtering
- ✅ Blog section
- ✅ Contact form system
- ✅ Admin API for product management

---

## Installation (One Time Setup)

### Step 1: Install Node.js
Visit https://nodejs.org/ and download the **LTS version** (v20+)

### Step 2: Install Dependencies
**Option A - Using Script (Easiest):**
```bash
Double-click: install.bat
```

**Option B - Manual:**
```powershell
# Terminal 1
cd frontend
npm install

# Terminal 2  
cd backend
npm install
```

---

## Running the Project

### Start Frontend
```powershell
cd frontend
npm run dev
```
→ Opens at **http://localhost:5173**

### Start Backend (New Terminal)
```powershell
cd backend
npm run dev
```
→ Runs at **http://localhost:5000**

### First Time?
- Frontend takes 5-10 seconds to start
- Backend needs MongoDB running
- Use `Ctrl+C` to stop either server

---

## Customization in 5 Minutes

### 1. Change Colors
Edit: `frontend/tailwind.config.js`
```javascript
colors: {
  primary: '#FF6B35',     // Change this
  secondary: '#004E89',   // Change this  
  accent: '#F7931E',      // Change this
}
```

### 2. Change Company Name
Edit: `frontend/src/components/Footer.tsx`
Search for "Energy Products" and replace with your company name

### 3. Add Products (via API)
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My Product",
    "category": "scooter",
    "price": 299,
    "description": "Description here",
    "specifications": ["Spec 1", "Spec 2"]
  }'
```

---

## Build for Production

### Frontend
```powershell
cd frontend
npm run build
# Creates 'dist' folder - ready to deploy!
```

### Backend
```powershell
cd backend
npm run build
npm start
```

---

## Deployment Options

### Frontend (Choose One)
- **Vercel** (Recommended) - Connect GitHub, auto-deploy
- **Netlify** - Drag & drop `dist` folder
- **GitHub Pages** - Free hosting

### Backend (Choose One)
- **Railway.app** - Simple, great free tier
- **Render** - Connect GitHub repo
- **AWS/Google Cloud** - Full control

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm: command not found` | Install Node.js from nodejs.org |
| `Cannot find module` | Run `npm install` in that folder |
| Port 5173 in use | `taskkill /F /IM node.exe` (close Node) |
| MongoDB connection error | Install/start MongoDB or use MongoDB Atlas |
| Hot reload not working | Restart `npm run dev` |

---

## File Structure Reference

```
project/
├── frontend/          ← React app (npm run dev)
│   └── src/
│       ├── pages/     ← Homepage, Products, Blog, etc.
│       └── components/← Navbar, Footer
│
├── backend/           ← Node.js API (npm run dev)
│   └── src/
│       ├── models/    ← Database schemas
│       ├── routes/    ← API endpoints
│       └── controllers/← Business logic
│
├── README.md          ← Full documentation
├── SETUP_INSTRUCTIONS.md
├── PROJECT_SUMMARY.md
└── install.bat        ← One-click installer
```

---

## Common Tasks

### Add a New Page
1. Create file: `frontend/src/pages/YourPage.tsx`
2. Add route in: `frontend/src/App.tsx`
3. Add link in: `frontend/src/components/Navbar.tsx`

### Add a New API Endpoint
1. Create model: `backend/src/models/YourModel.ts`
2. Create controller: `backend/src/controllers/yourController.ts`
3. Create route: `backend/src/routes/your.ts`
4. Import in: `backend/src/index.ts`

### Change Database
Edit: `backend/.env`
```
MONGODB_URI=your_mongodb_connection_string
```

---

## Technology Highlights

- **React 18** - Latest stable version
- **TypeScript** - Catch errors before runtime
- **Tailwind CSS** - No CSS file needed, just classes
- **Vite** - 10x faster than Webpack
- **Framer Motion** - Beautiful animations
- **Mongoose** - Database validation & relationships

---

## API Examples

### Get All Products
```bash
curl http://localhost:5000/api/products
```

### Get Products by Category
```bash
curl http://localhost:5000/api/products?category=scooter
```

### Submit Contact Form
```bash
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "email": "john@example.com",
    "message": "Hello"
  }'
```

---

## Next Steps

1. ✅ Install Node.js (if not done)
2. ✅ Run `npm install` in both folders
3. ✅ Start with `npm run dev` in each
4. ✅ Customize colors and company info
5. ✅ Add your products via API
6. ✅ Deploy to production!

---

**Questions?** 
- See `SETUP_INSTRUCTIONS.md` for detailed setup
- See `README.md` for complete API documentation
- See `PROJECT_SUMMARY.md` for project overview

**Ready to go?** Run `npm run dev` and visit http://localhost:5173 🚀
