'use client'

import React from 'react'
import ProfileCard from './profile-card'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const ProfileSidebar = () => {
  const [value, onChange] = useState(new Date())

  return (
    <div className="bg-[#E4F3F5] flex flex-col">
      <ProfileCard />
      <Calendar
        className="rounded-2xl mx-3 mt-5 !w-[384px] outline-none !border-none"
        onChange={() => {}}
        value={value}
      />
    </div>
  )
}

export default ProfileSidebar
