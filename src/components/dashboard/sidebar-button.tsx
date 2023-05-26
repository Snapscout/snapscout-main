'use client'

import Link from 'next/link'
import { PropsWithChildren } from 'react'

const SidebarButton = ({
  to,
  active,
  children,
}: PropsWithChildren<{ active: boolean; to: string }>) => {
  return (
    <Link
      className={`${
        active
          ? 'ml-[0.8rem] px-4 py-3 rounded-l-3xl bg-[#EFFCFB] w-full'
          : 'ml-[1.1rem] px-2'
      }`}
      href={to}
    >
      {children}
    </Link>
  )
}

export default SidebarButton
