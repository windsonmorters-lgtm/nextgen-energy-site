import Blog from '../models/Blog.js'

export const getBlogPosts = async (req: any, res: any) => {
  try {
    const posts = await Blog.find().sort({ publishedAt: -1 })
    res.json(posts)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog posts' })
  }
}

export const getBlogPostById = async (req: any, res: any) => {
  try {
    const post = await Blog.findById(req.params.id)
    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' })
    }
    res.json(post)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog post' })
  }
}

export const createBlogPost = async (req: any, res: any) => {
  try {
    const post = new Blog(req.body)
    await post.save()
    res.status(201).json(post)
  } catch (error) {
    res.status(400).json({ error: 'Failed to create blog post' })
  }
}
