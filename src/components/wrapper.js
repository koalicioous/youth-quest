import React from 'react'
import Navbar from './navbar'

export default function Wrapper({children})
{
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}