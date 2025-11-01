import React, { useEffect, useRef, useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = ({ handleSearch, showBack, setShowBack, backRef, query, setQuery }) => {




    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(query);
    }



    return (
        <>
            <form class="w-full mx-auto" onSubmit={handleSubmit}>
                {/* <label htmlFor="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    {query && <button><FaArrowLeft className='text-gray-300 text-xl ' /></button>}
                    <input type="search" id="search" value={query} onChange={(e) => setQuery(e.target.value)} class={`block w-full ${query && 'w-[75%]'}px-4 py-3 ps-10 text-sm text-gray-900 rounded-xl bg-gray-50  focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500 outline-none" placeholder="Search People`} required />

                </div> */}

                <div className='w-full transition-all relative'>
                    <input ref={backRef} type="search" id="search" value={query} autoComplete="off" onChange={(e) => setQuery(e.target.value)} onFocus={() => setShowBack(true)} class={`block w-full px-4 py-3 ps-10 text-sm text-gray-900 rounded-xl bg-gray-50  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white outline-none border-none`} placeholder="Search People" required />
                    <FaMagnifyingGlass className='absolute left-3 top-3 text-lg text-gray-400'/>

                    </div>


            </form>
        </>
    )
}

export default SearchBar