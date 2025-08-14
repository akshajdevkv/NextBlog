import { getBlogPosts } from '@/utils/blog/queries'
import Link from 'next/link'

export default async function BlogPosts() {
  const { data: posts, error } = await getBlogPosts()
  
  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Blog Posts</h2>
        <div className="text-red-600">Error loading blog posts</div>
      </div>
    )
  }

  // Get first 4 posts
  const displayPosts = posts?.slice(0, 4) || []

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Recent Blog Posts</h3>
      
      {displayPosts.length === 0 ? (
        <div className="border-2 border-gray-300 border-dashed rounded-lg p-12 text-center">
          <div className="text-gray-500 text-lg">No blog posts found</div>
        </div>
      ) : (
        <div className="grid gap-6">
          {displayPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="hover:text-gray-900">
                <div key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
              <div className="text-sm text-gray-500">
                {new Date(post.created_at).toLocaleDateString()}
              </div>
            </div>  
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
