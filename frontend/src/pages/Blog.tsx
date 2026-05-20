import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import axios from 'axios'

interface BlogPost {
  _id?: string
  title: string
  excerpt: string
  author: string
  publishedAt: string
  image?: string
}

const defaultPosts: BlogPost[] = [
  {
    title: 'Naxen Exim India Expands Recycling Capacity by 40%',
    excerpt: 'Our Ghaziabad facility now processes 5,000+ batteries annually with 95% material recovery rates.',
    author: 'Naxen Exim India Team',
    publishedAt: '2024-10-15',
  },
  {
    title: 'New Graphene-Enhanced EV Pack Launched',
    excerpt: '50% faster charging and 40% extended cycle life for premium e-scooter applications.',
    author: 'Amit Patel, CTO',
    publishedAt: '2024-09-22',
  },
  {
    title: 'NSE SME Listing: A Milestone for Indian Battery Manufacturing',
    excerpt: 'Naxen Exim India becomes one of the first dedicated lithium battery manufacturers on NSE SME platform.',
    author: 'Priya Singh, CFO',
    publishedAt: '2024-07-10',
  },
  {
    title: 'Partnership with Leading E-Rickshaw OEMs',
    excerpt: 'Strategic supply agreements bring Naxen Exim India packs to 8 new states across North India.',
    author: 'Rajesh Kumar, MD',
    publishedAt: '2024-06-05',
  },
  {
    title: 'AIS 156 Certification Achieved',
    excerpt: 'All EV battery packs now meet Automotive Industry Standard safety requirements.',
    author: 'Quality Team',
    publishedAt: '2024-03-18',
  },
  {
    title: 'Solar-Integrated ESS for Telecom Towers',
    excerpt: 'Hybrid energy storage solutions reduce diesel dependency by 70% for tower operators.',
    author: 'Product Team',
    publishedAt: '2024-01-30',
  },
]

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(defaultPosts)

  useEffect(() => {
    axios
      .get<BlogPost[]>('/api/blogs')
      .then((res) => {
        if (res.data?.length > 0) setPosts(res.data)
      })
      .catch(() => {
        /* use default posts when API unavailable */
      })
  }, [])

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    } catch {
      return dateStr
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-16">
      <section className="bg-gradient-to-r from-slate-950 to-slate-900 text-white py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">News & Insights</h1>
          <p className="text-xl text-gray-300">Latest updates from India's circular lithium energy platform</p>
        </motion.div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.article
                key={post._id ?? idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 hover:border-accent-green/50 hover:shadow-2xl transition group"
              >
                <div className="h-48 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900 flex items-center justify-center text-5xl">
                  {['📰', '🔋', '📈', '🤝', '✅', '☀️'][idx % 6]}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-accent-green transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <button className="flex items-center gap-2 text-accent-cyan font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
