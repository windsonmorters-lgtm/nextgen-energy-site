import express from 'express'
import * as blogController from '../controllers/blogController.js'

const router = express.Router()

router.get('/', blogController.getBlogPosts)
router.get('/:id', blogController.getBlogPostById)
router.post('/', blogController.createBlogPost)

export default router
