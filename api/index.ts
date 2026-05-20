// Import from compiled backend (built during vercel build step)
import app from '../backend/dist/index.js'

export default async function handler(req: any, res: any) {
  // Strip the /api prefix so Express routes work correctly
  req.url = req.url?.replace(/^\/api/, '') || '/'

  return app(req, res)
}
