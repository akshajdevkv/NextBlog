import Link from 'next/link'
import Navbar from '@/components/navbar'
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col mt-24">
       <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}
