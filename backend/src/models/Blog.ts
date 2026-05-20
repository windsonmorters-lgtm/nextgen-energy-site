import mongoose, { Schema, Document } from 'mongoose'

interface IBlogPost extends Document {
  title: string
  content: string
  excerpt: string
  author: string
  image?: string
  publishedAt: Date
  createdAt: Date
}

const blogSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true },
    author: { type: String, required: true },
    image: String,
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export default mongoose.model<IBlogPost>('BlogPost', blogSchema)
