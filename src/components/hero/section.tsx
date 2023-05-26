import { ReactNode } from 'react'
import Box from './box'

const Section = ({
  name,
  children,
  id,
}: {
  children: ReactNode
  name: string
  id: string
}) => {
  return (
    <div
      id={id}
      className="flex items-center justify-between space-x-5 rounded-[2.5rem] border-white border-2 bg-[#e0e0e038] w-full mt-16 overflow-hidden pr-10"
    >
      <div className="hidden md-ex:flex flex-1">
        <Box />
      </div>
      <div className="flex flex-col py-6 md-ex:py-0 px-3 md-ex:px-0 ">
        <span className="font-extrabold text-7xl mb-3">{name}</span>
        {children}
      </div>
    </div>
  )
}

export default Section
