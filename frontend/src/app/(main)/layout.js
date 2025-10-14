'use client'
import { LOGIN_PAGE } from '@/constants/routes';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner';

const layout = ({ children }) => {
    //get user from redux store
    const { user } = useSelector((state) => state.auth);

    //use router for Routing
    const router = useRouter();

    useEffect(() => {
        if (!user && !user?.authToken) {
            router.push(LOGIN_PAGE);
        };
    },);

    if (!user && !user?.authToken) return <div className='flex justify-center py-14'><LoadingSpinner className="w-12 h-12 text-primary-800" /></div>
    return (
        <>
            <div className=" bg-black flex w-[100vw] h-screen py-4">
                {children}
            </div></>
    )
}

export default layout