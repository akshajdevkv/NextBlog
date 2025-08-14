interface AuthErrorProps {
  error?: string
  title?: string
}

export default function AuthError({ error, title = "Authentication failed" }: AuthErrorProps) {
  if (!error) return null

  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
      <div className="flex">
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            {title}
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{error}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
