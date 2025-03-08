import React from 'react'
import { Children } from 'react'
import { useLocation } from 'react-router'

function ReloadLink({ to, children, ...props }) {
    const location = useLocation()
    const hdlReload = (e) => {
        if (location.pathname !== to) {
            // Navigate to a different route — reload the page
            window.location.href = to
        }
    }
    return (
        <button onClick={hdlReload} {...props}>{children}</button>
    )
}

export default ReloadLink