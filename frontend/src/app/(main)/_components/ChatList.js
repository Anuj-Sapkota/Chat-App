'use client'
import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import SearchBar from './SearchBar';
import { FaArrowLeft } from "react-icons/fa";
import { getAllUsers } from '@/api/user';
import SearchedShowModal from './SearchedShowModal';

const ChatList = () => {
    const [userList, setUserList] = useState([]);
    const [showBack, setShowBack] = useState(false);
    const [query, setQuery] = useState("");

    const backRef = useRef()

    const { user } = useSelector((state) => state.auth);
    const middleName = user.middleName ?? " ";
    const fullName = user.firstName + " " + middleName + " " + user.lastName



    const handleSearch = async (search) => {
        const res = await getAllUsers(search);
        setUserList(res.data);
    }

    const handleBack = () => {
        setUserList(null);
        setQuery("")
        console.log("users1:", userList)
        setShowBack(false);


    }

    return (
        <div className='w-[25%] h-[100%] bg-secondary-1 px-4'>
            <div className='flex justify-between py-4'>
                <h1 className='text-gray-200 font-bold text-3xl'>{fullName}</h1>
            </div>

            {/* Search */}
            <div className='flex w-full gap-2' onBlur={handleBack}>
                {showBack && <button onClick={handleBack} className=' hover:bg-[#383838] rounded-full p-3'><FaArrowLeft className='text-gray-300 text-xl cursor-pointer transition-all duration-550 ' /></button>}
                <SearchBar handleSearch={handleSearch} handleBack={handleBack} showBack={showBack} setShowBack={setShowBack} query={query} setQuery={setQuery} />
            </div>
            {/* Searched Results */}
            {userList?.length !== 0 &&  showBack && <SearchedShowModal users={userList} />}

        </div>
    )
}

export default ChatList