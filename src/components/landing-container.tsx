'use client'

import { ReactNode } from 'react'

const LandingContainer = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col items-center pt-4 pb-12 px-20 justify-center md-ex:justify-normal">
      {children}
    </main>
  )
}

export default LandingContainer
