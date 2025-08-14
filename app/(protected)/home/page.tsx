import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from '@/utils/actions/auth'
import Hero from '@/components/hero'
import BlogPosts from '@/components/blog-posts'
import Footer from '@/components/footer'
  export default async function HomePage() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  // Fallback: If middleware fails, redirect to login
  if (!user) {
    redirect('/login')
  }

  return (
    <div>
      <Hero user={user} />
      <BlogPosts />
      <Footer />
    </div>
  )
}
