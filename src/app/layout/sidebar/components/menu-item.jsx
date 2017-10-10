import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({ icon, children, link = '#default-link', onClick }) => {
    if (!onClick) {
        return (
            <li>
                <Link to={link}>
                    <i className={`fa fa-${icon}`}>{children}</i>
                </Link>
            </li>
        )
    }

    return (
        <li>
            <a href='#cenas' onClick={onClick}>
                <i className={`fa fa-${icon}`}>{children}</i>
            </a>
        </li>
    )
}

export default MenuItem
