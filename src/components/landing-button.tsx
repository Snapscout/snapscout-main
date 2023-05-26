'use client'

import Link from 'next/link'
import { PropsWithChildren } from 'react'

const LandingButton = ({
  children,
  auth,
  href,
  ...rest
}: PropsWithChildren<any>) => {
  return auth ? (
    <Link
      className="rounded-3xl border-[2px] border-[#E6EBED] px-10 py-2"
      href={href}
    >
      {children}
    </Link>
  ) : (
    <button
      {...rest}
      className="rounded-3xl border-[2px] border-[#E6EBED] px-10 py-2"
    >
      {children}
    </button>
  )
}

export default LandingButton
