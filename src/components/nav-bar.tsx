'use client'

import React from 'react'
import SnapscoutLogo from '@/assets/snapscout-small.svg'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
import LandingButton from './landing-button'
import { useAuth0 } from '@auth0/auth0-react'

const roboto = Roboto({ weight: '700', subsets: ['latin'] })

const NavigationBar = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return (
    <nav className="flex justify-between w-full items-center">
      <Link href="/" className="hidden items-center md-ex:flex">
        <SnapscoutLogo />
        <span
          {...roboto.style}
          className="hidden font-extrabold text-5xl xl:block"
        >
          Snapscout.
        </span>
      </Link>
      <div className="hidden items-center space-x-12 md-ex:flex">
        <ul className="flex space-x-16">
          <li>
            <Link href="#about">ABOUT</Link>
          </li>
          <li>
            <Link href="#contact-us">CONTACT US</Link>
          </li>
          <li>
            <Link href="#clients">CLIENTS</Link>
          </li>
          <li>
            <Link href="#help">HELP</Link>
          </li>
        </ul>
        <LandingButton
          auth={isAuthenticated}
          href="/dashboard"
          onClick={() => loginWithRedirect()}
        >
          {isAuthenticated ? 'DASHBOARD' : 'SIGN IN'}
        </LandingButton>
      </div>
    </nav>
  )
}

export default NavigationBar
