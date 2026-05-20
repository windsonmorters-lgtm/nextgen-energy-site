import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/energy-products'
    await mongoose.connect(uri)
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.warn('MongoDB connection failed — server will run without database:', error)
  }
}
