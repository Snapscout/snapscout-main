'use client'

import Image from 'next/image'
import CoverPhoto from '@/assets/placeholder-cover.png'
import VerifiedCheck from './verified-check'
import ProfileTaskChip from './profile-task-chip'
import { useAuth0 } from '@auth0/auth0-react'
import ProfilePhoto from '@/assets/profile_photo.webp'

const ProfileCard = () => {
  return (
    <div className="flex-grow-0 flex flex-col rounded-2xl bg-white mx-3 mt-5 overflow-hidden relative">
      <div className="relative w-[24rem] h-20 overflow-hidden">
        <Image src={CoverPhoto} alt="Cover photo" />
      </div>
      <div className="absolute top-[13%] left-1/2 transform -translate-x-1/2">
        <div className="relative w-20 h-20 overflow-hidden rounded-full">
          <Image
            style={{ objectFit: 'cover' }}
            src={ProfilePhoto}
            alt="Profile photo"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-center items-center pb-4">
        <span className="flex items-center space-x-1 font-bold text-2xl text-[#04253D]">
          <span>Jerson Carin</span> <VerifiedCheck />
        </span>
        <span className="flex items-center font-medium text-base text-[#6A6E6F]">
          Snapscout Developer
        </span>
        <div className="flex space-x-3 mt-2">
          <ProfileTaskChip count={50} type="users" />
          <ProfileTaskChip count={25} type="note" />
          <ProfileTaskChip count={30} type="time" />
          <ProfileTaskChip count={40} type="star" />
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
