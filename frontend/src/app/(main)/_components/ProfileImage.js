import React from 'react'
import Image from 'next/image'
import randomImage from '@/assets/images/musashi-miyamoto.webp';

const ProfileImage = () => {
    return (

        <>
            <Image src={randomImage} data-dropdown-placement="bottom-start" alt='Profile Image' className=" rounded-full w-8 h-8 object-center object-cover hover:brightness-130 transition-all ease-in-out cursor-pointer" />
        </>
    )
}

export default ProfileImage