import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './RedditListItem.sass'

const RedditListItem = ({ name, children, color = '#f5657c', location, match }) => {
    const { path } = match
    const { pathname } = location

    const link = `${path}/${name}`
    const cname = `subreddit-item ${pathname === link ? 'is-active' : ''}`

    return (
        <Link to={link} className="subreddit-item-link">
            <div className={cname}>
                <div className="left">
                    <div
                        className="avatar"
                        style={{ backgroundColor: color }}
                    >{name.charAt(0).toUpperCase()}</div>
                </div>
                <div className="right">
                    <div className="header">/r/{name}</div>
                    {/* <div className="body">
                        {children}
                    </div>
                    <div className="footer">a day ago</div> */}
                </div>
            </div>
        </Link>
    )
}

export default withRouter(RedditListItem)
