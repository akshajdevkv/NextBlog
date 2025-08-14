import { ReactNode } from 'react'
import Navbar from '@/components/navbar'

export default function HomeLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col mt-24">
      <Navbar />
      {children}
    </div>
  )
}
