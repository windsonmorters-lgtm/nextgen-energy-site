import mongoose, { Schema, Document } from 'mongoose'

interface IProduct extends Document {
  name: string
  category: string
  price: number
  description: string
  specifications: string[]
  rating: number
  image?: string
  createdAt: Date
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    category: { type: String, required: true, enum: ['scooter', 'rickshaw', 'inverter'] },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    specifications: [String],
    rating: { type: Number, default: 0 },
    image: String,
  },
  { timestamps: true }
)

export default mongoose.model<IProduct>('Product', productSchema)
