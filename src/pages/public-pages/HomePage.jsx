import React from 'react'
import MainNavBar from '../../component/main/MainNavBar'
import MainIcons from '../../component/main/MainIcons'
import AccomLIST from '../../component/main/AccomLIST'
import Inspiration from '../../component/main/Inspiration'

function HomePage() {
    return (
        <>
            <MainNavBar />
            <MainIcons />
            <AccomLIST />
            <Inspiration />
        </>
    )
}

export default HomePage