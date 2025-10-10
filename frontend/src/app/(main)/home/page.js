import React from 'react'
import SideBar from '../_components/SideBar';

const HomePage = () => {
  return (
    <>
    <div className='w-[4%] bg-black flex flex-col items-center px-2 py-4'>
      {/* Profile Image & options */}
      <SideBar />

    </div>

    <div className='w-[96%] bg-secondary rounded-2xl p-4'></div>
    </>
  )
}

export default HomePage