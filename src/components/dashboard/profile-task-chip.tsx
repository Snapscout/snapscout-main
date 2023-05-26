'use client'

import UsersIcon from '@/assets/users.svg'
import NoteIcon from '@/assets/note.svg'
import TimeIcon from '@/assets/time.svg'
import StartIcon from '@/assets/star.svg'

type IconType = 'users' | 'note' | 'time' | 'star'

const ProfileTaskChip = ({
  type,
  count,
}: {
  count: number
  type: IconType
}) => {
  return (
    <div className="border-[#DFE7EB] border bg-white flex flex-col rounded-lg p-2">
      {type === 'users' && <UsersIcon />}
      {type === 'note' && <NoteIcon />}
      {type === 'time' && <TimeIcon />}
      {type === 'star' && <StartIcon />}
      <div className="mt-1 flex justify-center items-center font-medium leading-tight rounded-md bg-[#D9D9D9] text-[#6A6E6F]">
        {count}
      </div>
    </div>
  )
}

export default ProfileTaskChip
