import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Home() {
    // const navigate = useNavigate()
    // useEffect(() => {
    //     navigate(`/home/idea`)
    // }, [])

    return (
        <>
            <Outlet />
        </>
    )
}
