'use client'

import SnapScoutOutline from '@/assets/snapscout-outline.png'
import Image from 'next/image'
import SidebarButton from './sidebar-button'
import HomeIcon from '@/assets/home.svg'
import LeafIcon from '@/assets/leaf.svg'
import GlobeIcon from '@/assets/globe.svg'
import MailIcon from '@/assets/mail.svg'
import HangoutIcon from '@/assets/hangout.svg'
import SettingIcon from '@/assets/setting.svg'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import Link from 'next/link'

const Sidebar = () => {
  const pathname = usePathname()

  const sidebarLists = useMemo(() => {
    return [
      { to: '', icon: HomeIcon, alt: 'Home', active: false },
      { to: '/page1', icon: LeafIcon, alt: 'Home', active: false },
      { to: '/page2', icon: GlobeIcon, alt: 'Home', active: false },
      { to: '/page3', icon: MailIcon, alt: 'Home', active: false },
      { to: '/page4', icon: HangoutIcon, alt: 'Home', active: false },
      { to: '/page5', icon: SettingIcon, alt: 'Home', active: false },
    ].map((value) => ({
      ...value,
      active: pathname === `/dashboard${value.to}`,
      to: `/dashboard${value.to}`,
    }))
  }, [pathname])

  return (
    <div className="flex flex-col items-end w-[5.5rem] gradient-bg pt-3 overflow-hidden">
      <Link href="/dashboard">
        <Image src={SnapScoutOutline} alt="Snapscout" />
      </Link>
      <div className="flex flex-col space-y-10 mt-2 w-full">
        {sidebarLists.map((button, key) => (
          <SidebarButton key={key} to={button.to} active={button.active}>
            {/* <Image width={35} src={button.icon} alt={button.alt} /> */}
            <button.icon style={{ fill: 'black' }} />
          </SidebarButton>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
