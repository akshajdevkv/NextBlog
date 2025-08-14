import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from '@/utils/actions/auth'
export default async function HomePage() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  // Fallback: If middleware fails, redirect to login
  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-4xl font-bold text-black mb-6">
            Welcome back!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Hello, {user.email}! We're glad to see you again.
          </p>
        </div>
        
        <div className="space-y-4">
          <form action={logout}>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150 ease-in-out"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
