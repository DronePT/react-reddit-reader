import React from 'react'
import logo from './../../../assets/reddit-logo-64.png'
import './sidebar.sass'

import MenuContainer from './components/menu-container'
import MenuItem from './components/menu-item'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="" className="sidebar-logo" />
            </div>

            <MenuContainer>
                <MenuItem icon="line-chart" link="#trending" />
                <MenuItem icon="search" link="#search" />
                <MenuItem icon="user-o" link="#profile" />
                <MenuItem icon="heart-o" link="#favorites" />
                <MenuItem icon="sign-out" link="#sign-out" />
            </MenuContainer>
        </div>
    )
}

export default Sidebar
