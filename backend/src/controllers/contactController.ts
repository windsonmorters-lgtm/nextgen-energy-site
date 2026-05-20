import Contact from '../models/Contact.js'

export const getContacts = async (req: any, res: any) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' })
  }
}

export const createContact = async (req: any, res: any) => {
  try {
    const contact = new Contact(req.body)
    await contact.save()
    res.status(201).json(contact)
  } catch (error) {
    res.status(400).json({ error: 'Failed to create contact' })
  }
}

export const updateContactStatus = async (req: any, res: any) => {
  try {
    const { status } = req.body
    const contact = await Contact.findByIdAndUpdate(req.params.id, { status }, { new: true })
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' })
    }
    res.json(contact)
  } catch (error) {
    res.status(400).json({ error: 'Failed to update contact' })
  }
}
