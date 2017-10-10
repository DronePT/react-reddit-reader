import React from 'react'
import logo from './../../../assets/reddit-logo-64.png'
import './sidebar.sass'

import MenuContainer from './components/menu-container'
import MenuItem from './components/menu-item'

// const electron = require('electron')
const electron = window.require('electron')
const { ipcRenderer } = electron

const handleCloseClick = () => {
    ipcRenderer.send('app:close', true)
}

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="" className="sidebar-logo" />
            </div>

            <MenuContainer>
                <MenuItem icon="line-chart" link="/sub/trending" />
                <MenuItem icon="search" link="/sub/search" />
                <MenuItem icon="user-o" link="/sub/profile" />
                <MenuItem icon="heart-o" link="/sub/favorites" />
                <MenuItem
                    icon="sign-out"
                    link="/sign-out"
                    onClick={handleCloseClick} />
            </MenuContainer>
        </div>
    )
}

export default Sidebar
