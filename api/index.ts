import type { VercelRequest, VercelResponse } from '@vercel/node'
// Import from compiled backend (built during vercel build step)
import app from '../backend/dist/index.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Strip the /api prefix so Express routes work correctly
  req.url = req.url?.replace(/^\/api/, '') || '/'

  // @ts-ignore - Express app is compatible with Vercel handler signature
  return app(req, res)
}
