import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

function HostLayout() {
    return (
        <>HostLayout
            <Outlet/>
            <Footer />
        </>
    )
}

export default HostLayout