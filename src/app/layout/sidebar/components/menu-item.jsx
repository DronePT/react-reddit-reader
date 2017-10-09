import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({ icon, children, link = '#default-link' }) => {
    return (
        <li>
            <Link to={link}>
                <i className={`fa fa-${icon}`}>{children}</i>
            </Link>
        </li>
    )
}

export default MenuItem
