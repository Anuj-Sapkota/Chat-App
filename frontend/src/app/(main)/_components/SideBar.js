'use client'
import React, { useRef, useState, useEffect } from 'react'

import ProfileImage from './ProfileImage';
import ProfileOptions from './ProfileOptions';

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
        <div className='relative'>
            <button onClick={() => setShowProfileOptions(prev => !prev)}><ProfileImage /></button>
            {/* Dropdown for profile options */}
           <div ref={modalRef}>
             {showProfileOptions && <ProfileOptions />}
           </div>
        </div>
    )
}

export default SideBar