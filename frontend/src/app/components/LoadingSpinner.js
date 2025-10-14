import React from 'react'
import { CgSpinner } from "react-icons/cg";

const LoadingSpinner = ({className}) => {
    return (
        <>
            <CgSpinner className={`animate-spin ${className}`}/>
            
        </>
    )
}

export default LoadingSpinner