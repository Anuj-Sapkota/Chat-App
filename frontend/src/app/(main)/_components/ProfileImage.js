import React from 'react'
import Image from 'next/image';
import defaultUser from "@/assets/images/default-user-pic.png"
import { useSelector } from 'react-redux';

const ProfileImage = () => {
    const {user} = useSelector((state)=>state.auth)
    return (

        <>
            <Image src={user.profilePicture??defaultUser} data-dropdown-placement="bottom-start" alt={user.firstName} className=" rounded-full w-8 h-8 object-center object-cover transition-all ease-in-out cursor-pointer" />
        </>
    )
}

export default ProfileImage