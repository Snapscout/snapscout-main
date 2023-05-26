'use client'

import { Raleway } from 'next/font/google'
import { Auth0Provider } from '@auth0/auth0-react'
import Sidebar from '@/components/dashboard/sidebar'
import ProfileSidebar from '@/components/dashboard/profile-sidebar'

const raleway = Raleway({ subsets: ['latin'] })

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <Sidebar />
      <div className="flex flex-1 bg-[#EFFCFB] px-5 py-4">{children}</div>
      <ProfileSidebar />
    </div>
  )
}
