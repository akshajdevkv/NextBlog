import { getBlogPosts } from '@/utils/blog/queries'
import Link from 'next/link'

export default async function BlogPage() {
  const { data: posts, error } = await getBlogPosts()
  
  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-xl font-medium text-gray-900 mb-2">Unable to load posts</h2>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-xl font-medium text-gray-900 mb-2">No posts yet</h2>
          <p className="text-gray-600">Check back soon for new content.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
        <p className="text-gray-600">Thoughts, ideas, and insights</p>
      </div>

      {/* Posts List */}
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="space-y-3">
                {/* Date */}
                <time className="text-sm text-gray-500">
                  {new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h2>
                
                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                
                {/* Read more */}
                <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                  Read more →
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
