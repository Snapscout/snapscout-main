'use client'

import './globals.css'
import { Raleway } from 'next/font/google'
import { Auth0Provider } from '@auth0/auth0-react'

const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Auth0Provider
        domain={String(process.env.NEXT_PUBLIC_AUTH0_URL)}
        clientId={String(process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID)}
        authorizationParams={{
          redirect_uri:
            typeof window !== 'undefined' ? window.location.origin : undefined,
        }}
      >
        <body className={raleway.className}>{children}</body>
      </Auth0Provider>
    </html>
  )
}
