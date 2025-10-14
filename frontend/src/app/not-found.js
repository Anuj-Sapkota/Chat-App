import React from 'react'
import AnimatedLogo from './components/AnimatedLogo'
import Link from 'next/link'
import { HOME_PAGE } from '@/constants/routes'
import { IoMdArrowRoundBack } from "react-icons/io";

const notFound = () => {
    return (
        <div className='bg-white dark:bg-gray-950 h-screen w-screen p-8 flex items-center justify-center'>
            {/* Container */}
            <div className='w-[40%] ml-[20rem]  border-y-2 border-gray-600  items-start flex justify-center'>
                <div className='p-8 pl-12 flex flex-col gap-4 justify-start items-start w-full'>
                    <div>
                        <AnimatedLogo />
                    </div>
                    <div className='text-black dark:text-white flex flex-col gap-6'>
                        <h1 className='font-bold text-red-700 text-5xl'>404</h1>
                        <h1 className='font-medium text-4xl'>The Page You're Looking For<br />Cannot Be Found</h1>
                    </div>
                    <div className='mt-6'>
                        <Link href={HOME_PAGE} className='flex items-center rounded-xl border w-fit border-primary-200 text-black dark:text-white p-4 font-semibold hover:bg-primary-900 hover:dark:border-primary-900 transition-all ease-in-out gap-2'><IoMdArrowRoundBack className='text-xl' />
                            Back To Home</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default notFound