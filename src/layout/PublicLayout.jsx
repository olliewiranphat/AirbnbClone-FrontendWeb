import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

function PublicLayout() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default PublicLayout