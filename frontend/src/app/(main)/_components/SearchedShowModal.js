import React from 'react'
import Image from 'next/image'
import defaultUser from "@/assets/images/default-user-pic.png"
const SearchedShowModal = ({ users }) => {
    console.log("users: ")
    return (
        <div className='w-full py-6'>

            {users?.map((user, indx) => {
                const middleName = user.middleName ?? "";
                const fullName = user.firstName + " " + middleName + " " + user.lastName; return (
                    <li key={indx} className='text-white flex gap-6 items-center hover:bg-secondary-3 py-2 px-4 rounded-lg'>
                        <Image src={user.profilePicture ?? defaultUser} width={50} height={50} alt={user.firstName} className='rounded-full object-cover object-center' />
                        <div>
                            <h1 className='text-white'>{fullName}</h1>
                        </div>
                    </li>
                )
            })}
        </div>
    )
}

export default SearchedShowModal