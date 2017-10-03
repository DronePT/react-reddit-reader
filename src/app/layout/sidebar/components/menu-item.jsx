import React from 'react'

const MenuItem = ({ icon, children, link = '#default-link' }) => {
    return (
        <li>
            <a href={link}>
                <i className={`fa fa-${icon}`}>{children}</i>
            </a>
        </li>
    )
}

export default MenuItem
