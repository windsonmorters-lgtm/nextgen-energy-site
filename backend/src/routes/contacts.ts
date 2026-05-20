import express from 'express'
import * as contactController from '../controllers/contactController.js'

const router = express.Router()

router.get('/', contactController.getContacts)
router.post('/', contactController.createContact)
router.put('/:id', contactController.updateContactStatus)

export default router
