import React from 'react'
import SideBar from '../_components/SideBar';
import ChatList from '../_components/ChatList';
import Chat from '../_components/Chat';
const HomePage = () => {
  return (
    <>
    <div className='w-[3%] bg-black flex flex-col items-center py-4'>
      {/* Profile Image & options */}
      <SideBar />

    </div>

    <div className='w-[97%]  p-4 flex gap-4 [&>div]:rounded-xl'>
      <ChatList/>
      <Chat/>
    </div>
    </>
  )
}

export default HomePage