import { logout } from '@/redux/auth/authSlice';
import React from 'react'
import { TbLogout } from "react-icons/tb";
import { TbTriangleFilled } from "react-icons/tb";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { LOGIN_PAGE } from '@/constants/routes';
const ProfileOptions = () => {
    //use router
    const router = useRouter()

    //use dispatch
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        router.push(LOGIN_PAGE);
    }

    return (
        <>
            <div className="absolute -right-58 mt-4 z-10 lg:w-70 bg-white divide-y  rounded-lg shadow-sm w-40 dark:bg-gray-700 ">
                {/* upward arrow */}
                <div className='relative'>
                    <TbTriangleFilled className='lg:text-2xl dark:text-gray-700 text-white absolute -top-3 left-6' />
                </div>
                <div className='dark:divide-gray-600 divide-gray-100'>
                    <ul className="py-2  text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                        <li>
                            <a href="#" className=" px-4 py-2 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <div className='rounded-full w-8 h-8 bg-gray-500 flex items-center justify-center p-[5px]'>
                                    <TbLogout className='size-full text-gray-200 ' />
                                </div>
                                <button onClick={handleLogout} className='text-[1rem] font-medium'>Log out</button>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

        </>



    )
}

export default ProfileOptions;