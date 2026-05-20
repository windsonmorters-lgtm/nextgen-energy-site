import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import { config } from 'dotenv'

import { connectDB } from './config/database.js'
import productRoutes from './routes/products.js'
import contactRoutes from './routes/contacts.js'
import blogRoutes from './routes/blogs.js'

config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Connect to database
connectDB()

// API Routes
app.use('/api/products', productRoutes)
app.use('/api/contacts', contactRoutes)
app.use('/api/blogs', blogRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running' })
})

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal Server Error' })
})

// Only start the server if not running on Vercel (serverless environment)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
}

export default app
