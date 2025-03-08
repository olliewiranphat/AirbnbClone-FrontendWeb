import React from 'react'
import { Outlet } from 'react-router'
import MainNavBar from '../component/main/MainNavBar'

function PublicLayout() {
    return (
        <>
            <Outlet />
        </>
    )
}

export default PublicLayout