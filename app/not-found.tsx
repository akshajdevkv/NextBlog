import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-black mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-black mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/home"
          className="inline-block bg-black text-white hover:bg-gray-800 px-4 py-2 rounded text-sm font-medium transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}