import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './sub-reddit-item.sass'

const SubRedditItem = ({ name, children, color = '#f5657c', location, match }) => {
    const { params, path } = match

    const cname = `subreddit-item ${params.subreddit === name ? 'is-active' : ''}`
    const link = params.subreddit
        ? match.path.replace(':subreddit', name)
        : `${path}/${name}`

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
                    <div className="body">
                        {children}
                    </div>
                    <div className="footer">a day ago</div>
                </div>
            </div>
        </Link>
    )
}

export default withRouter(SubRedditItem)
