'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
export async function login(formData: FormData) {
  const supabase = await createClient()
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  const { error } = await supabase.auth.signInWithPassword(data)
  if (error) {
    console.log(error)
    redirect('/error')
  }
  revalidatePath('/dashboard', 'page')
  redirect('/dashboard')
}

export async function logout() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    console.log('❌ Logout error:', error)
    redirect('/error')
  }
  
  revalidatePath('/home', 'page')
  redirect('/home')
}
export async function signup(formData: FormData) {
  const supabase = await createClient()
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  
  // Debug: Log the exact data being sent
  console.log('📧 Email being sent:', JSON.stringify(data.email))
  console.log('📧 Email length:', data.email.length)
  console.log('📧 Email trimmed:', data.email.trim())
  
  const { error } = await supabase.auth.signUp(data)
  if (error) {
    console.log('❌ Signup error:', error)
    redirect('/error')
  }
  
  // revalidatePath() clears Next.js cache for '/dashboard' to ensure fresh data after authentication
  revalidatePath('/dashboard', 'page')
  redirect('/dashboard')
}