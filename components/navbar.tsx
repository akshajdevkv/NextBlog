import Link from 'next/link'
import { logout } from '@/utils/actions/auth'

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center h-20">
          {/* All Navigation Items - Evenly Spaced */}
          <div className="flex items-center space-x-16">
            <Link
              href="/home"
              className="text-black hover:text-gray-700 pr-6 py-3 text-lg font-bold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/create"
              className="text-black hover:text-gray-700 px-6 py-3 text-lg font-bold transition-colors"
            >
              Create
            </Link>
            <Link
              href="/blog"
              className="text-black hover:text-gray-700 px-6 py-3 text-lg font-bold transition-colors"
            >
              Blog
            </Link>
            
            {/* Logout Button */}
            <form action={logout}>
              <button
                type="submit"
                className="btext-white  px-6 py-3 hover:text-gray-700 rounded text-lg font-bold  "
              >
                Logout
              </button>
            </form>
          </div>

      
        </div>

        
      </div>
    </nav>
  )
}
