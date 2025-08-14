import { createClient } from '@/utils/supabase/server'
import { User } from '@supabase/supabase-js'

export default async function Hero({ user }: { user: User  }) {
 
  // Extract first name from email or use full email
  const firstName = user?.email?.split('@')[0] || 'Friend'

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Centered content */}
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl font-bold text-black mb-4">
              Welcome back, {firstName}! 👋
            </h1>
            <h2 className="text-2xl font-semibold text-black mb-6">
              Share Your Stories, Inspire the World
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your thoughts matter and your voice deserves to be heard. Whether it's a quick insight or a deep dive into your passions, 
              every post you create has the power to connect and inspire others.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
