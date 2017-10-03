import React from 'react'

const MenuContainer = ({ children }) => {
    return (
        <div className="menu-container">
            <ul>{children}</ul>
        </div>
    )
}

export default MenuContainer
