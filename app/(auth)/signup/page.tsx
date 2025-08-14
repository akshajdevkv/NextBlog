import { signup } from '@/utils/actions/auth'
import Link from 'next/link'
import AuthError from '@/components/auth-error'

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams
  const error = params.error
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/login" className="font-medium text-black hover:text-gray-700 underline">
              sign in to your existing account
            </Link>
          </p>
        </div>

        <AuthError error={error} title="Sign up failed" />
        
        <form className="mt-8 space-y-6" action={signup}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-black placeholder-gray-500 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-black placeholder-gray-500 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Create a password"
              />
            </div>
            
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-black">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-black placeholder-gray-500 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150 ease-in-out"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
