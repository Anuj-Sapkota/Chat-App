'use client'
import React, { useRef, useState, useEffect } from 'react'

import ProfileImage from './ProfileImage';
import ProfileOptions from './ProfileOptions';
import { TbArchive } from 'react-icons/tb';

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
        <div className='relative [&>div]:mb-6 [&>div]:w-12 [&>div]:h-12 [&>div]:hover:bg-[#383838] [&>div]:rounded-xl  [&>div]:p-2'>
            <div>
                <button onClick={() => setShowProfileOptions(prev => !prev)}><ProfileImage /></button>
                {/* Dropdown for profile options */}
                <div ref={modalRef}>
                    {showProfileOptions && <ProfileOptions />}
                </div>
            </div>
            <div className='cursor-pointer'>
                <TbArchive className='text-gray-400 text-3xl' />
            </div>
        </div>
    )
}

export default SideBar