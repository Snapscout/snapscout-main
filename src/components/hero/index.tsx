'use client'

import { useAuth0 } from '@auth0/auth0-react'
import LandingButton from '../landing-button'
import HeroLogo from './logo'
import HeroScout from './scout'

const Hero = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return (
    <div className="flex items-center justify-center">
      <div className="w-full md-ex:w-2/4">
        <HeroLogo />
        <div className="hidden md-ex:block mt-8">
          <LandingButton
            href="/dashboard"
            auth={isAuthenticated}
            onClick={() => loginWithRedirect()}
          >
            {isAuthenticated ? 'Go to dashboard' : 'SIGN UP'}
          </LandingButton>
        </div>
      </div>
      <div className="hidden w-3/4 md-ex:block">
        <HeroScout />
      </div>
    </div>
  )
}

export default Hero
