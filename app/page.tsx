export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Your App
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground text-center">
            This is your home page. Start building your application here.
          </p>
        </div>
      </main>
    </div>
  )
}
