import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <div className=" bg-black flex w-[100vw] h-screen py-4">
                {children}
            </div></>
    )
}

export default layout