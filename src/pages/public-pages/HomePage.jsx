import React from 'react'
import MainNavBar from '../../components/home-page/main-navbar/MainNavBar'
import MainIcons from '../../components/home-page/MainIcons'
import AccomLIST from '../../components/home-page/accommodation/AccomLIST'
import Inspiration from '../../components/home-page/inspiration/Inspiration'




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