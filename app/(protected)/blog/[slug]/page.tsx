import { getBlogPost, deleteBlogPost } from '@/utils/blog/queries'
import { notFound, redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'

interface PageProps {
  params: {
    slug: string
  }
}

async function handleDeletePost(formData: FormData) {
  'use server'
  
  const slug = formData.get('slug') as string
  if (!slug) return
  
  const { data, error } = await deleteBlogPost(slug)
  
  if (error) {
    console.error('Failed to delete post:', error)
    return
  }
  
  revalidatePath('/blog')
  redirect('/blog')
}

export default async function BlogPostPage({ params }: PageProps) {
    const slug = await params.slug
  const { data: post, error } = await getBlogPost( slug)
 

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* Navigation */}
      <div className="mb-8">
        <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
          ← Back to blog
        </Link>
      </div>

      {/* Article */}
      <article>
        {/* Header */}
        <header className="mb-8">
          <time className="text-sm text-gray-500 mb-2 block">
            {new Date(post.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
            {post.content}
          </div>
        </div>

                {/* Actions */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-end">
            <form action={handleDeletePost}>
              <input type="hidden" name="slug" value={post.slug} />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-red-700 bg-white border border-red-300 rounded-md hover:bg-red-50 transition-colors"
                
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </article>
    </div>
  )
}
