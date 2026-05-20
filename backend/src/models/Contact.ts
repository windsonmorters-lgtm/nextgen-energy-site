import mongoose, { Schema, Document } from 'mongoose'

interface IContact extends Document {
  name: string
  email: string
  message: string
  phone?: string
  company?: string
  companyType?: string
  status: 'new' | 'replied' | 'resolved'
  createdAt: Date
}

const contactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    phone: String,
    company: String,
    companyType: String,
    status: { type: String, default: 'new', enum: ['new', 'replied', 'resolved'] },
  },
  { timestamps: true }
)

export default mongoose.model<IContact>('Contact', contactSchema)
