import React from 'react'
import logo from './../../../assets/reddit-logo-64.png'
import './sidebar.sass'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={logo} alt="" className="sidebar-logo" />
        </div>
    )
}

export default Sidebar
