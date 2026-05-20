# Energy Products Website - Setup Instructions

Your modern battery/energy product showcase website has been successfully scaffolded! 

## ⚠️ Before You Start

**You need to install Node.js first:**

1. **Download Node.js** from https://nodejs.org/
   - Choose the LTS (Long Term Support) version (v20 or higher)
   - This will also install npm (Node Package Manager)

2. **Verify Installation**
   ```powershell
   node --version    # Should show v20.x.x or higher
   npm --version     # Should show 10.x.x or higher
   ```

3. **Verify MongoDB** (for backend database)
   - Download from https://www.mongodb.com/try/download/community
   - OR use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas

---

## 📁 Project Structure

```
energy-products/
├── frontend/          (React + TypeScript + Tailwind CSS)
├── backend/           (Node.js + Express + MongoDB)
├── README.md          (Full documentation)
└── .github/
    └── copilot-instructions.md
```

---

## 🚀 Quick Start (After Installing Node.js)

### Option 1: Run Both Frontend & Backend Separately

#### Terminal 1: Frontend Development Server
```powershell
cd frontend
npm install
npm run dev
```
→ Opens at http://localhost:5173

#### Terminal 2: Backend API Server
```powershell
cd backend
npm install
npm run dev
```
→ Runs at http://localhost:5000

### Option 2: Install and Build Only
```powershell
# Install frontend dependencies
cd frontend
npm install
npm run build

# Install backend dependencies
cd backend
npm install
npm run build
```

---

## 🛠️ What's Included

### Frontend Features
✅ Home page with hero section
✅ Product catalog with filtering
✅ Individual product detail pages
✅ Blog/articles section
✅ Contact form
✅ About page
✅ Responsive design (mobile + desktop)
✅ Smooth animations (Framer Motion)
✅ Professional UI with Tailwind CSS

### Backend Features
✅ REST API for products
✅ Blog management system
✅ Contact form submissions
✅ MongoDB database models
✅ TypeScript type safety
✅ Error handling middleware
✅ CORS enabled

---

## 📊 API Endpoints

### Products
```
GET    /api/products           - Get all products
GET    /api/products/:id       - Get product by ID
POST   /api/products           - Create product
PUT    /api/products/:id       - Update product
DELETE /api/products/:id       - Delete product
```

### Blog
```
GET    /api/blogs              - Get all blog posts
GET    /api/blogs/:id          - Get blog post by ID
POST   /api/blogs              - Create blog post
```

### Contact
```
GET    /api/contacts           - Get all submissions
POST   /api/contacts           - Submit contact form
```

---

## 🎨 Customization Guide

### Change Brand Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  primary: '#FF6B35',      // Red-Orange (change this)
  secondary: '#004E89',    // Dark Blue (change this)
  accent: '#F7931E',       // Orange (change this)
}
```

### Update Company Info
Edit `frontend/src/components/Footer.tsx`:
- Company name and description
- Contact details
- Phone numbers
- Email address

### Add New Products
POST to `/api/products`:
```json
{
  "name": "Product Name",
  "category": "scooter|rickshaw|inverter",
  "price": 299,
  "description": "Product description",
  "specifications": ["spec1", "spec2"]
}
```

---

## 📱 Technologies Used

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Axios** - HTTP requests

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - Database
- **Mongoose** - ODM/Schema validation
- **CORS** - Cross-origin requests

---

## 🚀 Deployment

### Deploy Frontend (Free Options)
1. **Vercel** (Recommended)
   - Connect your GitHub repo
   - Auto-deploy on push

2. **Netlify**
   - Drag & drop `frontend/dist` folder
   - Or connect GitHub

3. **GitHub Pages**
   - Free hosting included

### Deploy Backend (Free Options)
1. **Railway.app**
   - Connect MongoDB Atlas
   - Auto-deploy

2. **Render**
   - Connect GitHub
   - Free tier available

3. **Heroku** (Legacy)
   - Still available but paid now

---

## ❓ Troubleshooting

### Port Already in Use
```powershell
# Find process on port 5173
netstat -ano | findstr :5173
# Kill it
taskkill /PID <process_id> /F
```

### MongoDB Connection Error
- Ensure MongoDB is running locally: `mongod`
- OR update `.env` with MongoDB Atlas connection string

### npm: command not found
- Node.js not installed (see "Before You Start")
- Restart PowerShell after installing Node.js

---

## 📚 Next Steps

1. ✅ Install Node.js from nodejs.org
2. ✅ Run `npm install` in both frontend and backend
3. ✅ Start dev servers with `npm run dev`
4. ✅ Customize brand colors and company info
5. ✅ Add your products via API
6. ✅ Deploy to Vercel (frontend) and Railway (backend)

---

## 💡 Tips

- **Hot Reload**: Changes auto-refresh during dev
- **TypeScript**: Catches errors before runtime
- **Tailwind CSS**: Use utility classes for quick styling
- **Framer Motion**: Add animations easily
- **MongoDB Atlas**: Free database hosting in the cloud

---

## 📖 Documentation

See [README.md](../README.md) for detailed API documentation and commands.

**Questions?** Check the individual `package.json` files for all available scripts!
