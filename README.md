# Energy Products - Full Stack Application

Modern energy product showcase website with battery and power solutions.

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend
- **Node.js** with Express
- **TypeScript** - Type safety
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── App.tsx        # Main app component
│   │   └── main.tsx       # Entry point
│   ├── public/            # Static assets
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   ├── models/        # Mongoose schemas
│   │   ├── controllers/   # Route controllers
│   │   ├── routes/        # API routes
│   │   ├── config/        # Configuration
│   │   └── index.ts       # Server entry
│   ├── package.json
│   └── tsconfig.json
│
└── .github/
    └── copilot-instructions.md
```

## Features

- **Product Showcase** - Display battery products with filtering
- **Product Details** - Individual product pages with specifications
- **Blog Section** - Articles about energy solutions
- **Contact Form** - Customer inquiry management
- **Responsive Design** - Mobile-first approach
- **Admin API** - Product and contact management

## Getting Started

### Prerequisites
- Node.js 16+
- MongoDB running locally or Atlas connection

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:5000`

## Available API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Contacts
- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Submit contact form

### Blog
- `GET /api/blogs` - Get all blog posts
- `GET /api/blogs/:id` - Get blog post by ID
- `POST /api/blogs` - Create blog post

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/energy-products
PORT=5000
NODE_ENV=development
```

## Development Commands

### Frontend
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start dev server with hot reload
- `npm run build` - Compile TypeScript
- `npm start` - Run production build

## Customization

### Colors (Tailwind)
Edit [frontend/tailwind.config.js](frontend/tailwind.config.js):
- `primary: '#FF6B35'` - Main brand color (Red-Orange)
- `secondary: '#004E89'` - Secondary color (Blue)
- `accent: '#F7931E'` - Accent color (Orange)

### Content
- Update company info in [frontend/src/components/Footer.tsx](frontend/src/components/Footer.tsx)
- Modify product categories in [backend/src/models/Product.ts](backend/src/models/Product.ts)

## Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the dist folder
```

### Backend (Railway/Heroku)
```bash
npm run build
npm start
```

## License

MIT License - Feel free to use this for your project!
