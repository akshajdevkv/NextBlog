import { createClient } from "../supabase/server"
import { generateExcerpt } from "./excerpt"

export async function getBlogPosts(){
    const supabase = await createClient()
    const { data, error } = await supabase
  .from('blog_posts')
  .select(`
    id,
    title,
    content,
    slug,
    created_at,
    author_id
  `)
  .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching blog posts:', error)
    return {data: [], error: error}
  }

  // Add auto-generated excerpts
  const postsWithExcerpts = data?.map(post => ({
    ...post,
    excerpt: generateExcerpt(post.content, 150)
  })) || []
  
  return {data: postsWithExcerpts, error: null}
}

export async function getBlogPost(slug: string){
    const supabase = await createClient()
    const { data, error } = await supabase
  .from('blog_posts')
  .select(`
    id,
    title,
    content,
    slug,
    created_at,
    author_id
  `)
  .eq('slug', slug)
  .eq('author_id', (await supabase.auth.getUser()).data.user?.id)
  .single()
  
  if (error) {
 
    return {data: null, error: error}
  }

  if (!data) {
    return {data: null, error: null}
  }

  // Add auto-generated excerpt for meta/preview purposes
  const postWithExcerpt = {
    ...data,
    excerpt: generateExcerpt(data.content, 150)
  }
  
  return {data: postWithExcerpt, error: null}
}

export async function deleteBlogPost(slug: string) {
  const supabase = await createClient()
  
  // First verify the post belongs to the current user
  const { data: user } = await supabase.auth.getUser()
  if (!user.user?.id) {
    return { data: null, error: { message: 'User not authenticated' } }
  }
  
  const { data, error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('slug', slug)
    .eq('author_id', user.user.id)
    .select()
    .single()
  
  if (error) {
    console.error('Error deleting blog post:', error)
    return { data: null, error: error }
  }
  
  return { data, error: null }
}
