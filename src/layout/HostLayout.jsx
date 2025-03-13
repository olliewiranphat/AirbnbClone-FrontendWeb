import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

function HostLayout() {
    return (
        <div>
            <Outlet/>
            <Footer />
        </div>
    )
}

export default HostLayout