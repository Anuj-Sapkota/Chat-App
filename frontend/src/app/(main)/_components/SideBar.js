'use client'
import React, { useRef, useState, useEffect } from 'react'

import ProfileImage from './ProfileImage';
import ProfileOptions from './ProfileOptions';
import { TbArchive } from 'react-icons/tb';
import { FaRegBell } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";

const SideBar = () => {
    //use states
    const [showProfileOptions, setShowProfileOptions] = useState(false);

    // use Ref
    const modalRef = useRef(null);

    //use Effect
    useEffect(() => {

        if (showProfileOptions) {
            document.addEventListener("click", handleModalClose)
        }
        return () => {
            document.removeEventListener("click", handleModalClose)
        }

    }, [showProfileOptions]);

    //function to handle the closing of the modal when clicked outside of it
    const handleModalClose = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setShowProfileOptions(false);
        }
    }
    return (
        <div className='flex flex-col justify-center'>
            <div className='relative mb-6 w-12 h-12 hover:bg-[#383838] rounded-xl  p-2' >
                <button onClick={() => setShowProfileOptions(prev => !prev)}><ProfileImage /></button>
                {/* Dropdown for profile options */}
                <div ref={modalRef}>
                    {showProfileOptions && <ProfileOptions />}
                </div>
            </div>
            <div className=' [&>div]:mb-6 [&>div]:w-10 [&>div]:h-10 [&>div]:hover:bg-[#383838] [&>div]:rounded-xl  [&>div]:p-2 flex flex-col justify-center items-center'>
                <div className='cursor-pointer'>
                    <TbArchive className='text-gray-400 text-2xl' />
                </div>
                {/* Notification*/}
                <div className='cursor-pointer'>
                    <FaRegBell className='text-gray-400 text-2xl' />
                </div>
                {/* Requests */}
                <div className='cursor-pointer'>
                    <MdOutlinePeopleAlt className='text-gray-400 text-2xl' />

                </div>
            </div>
        </div>
    )
}

export default SideBar