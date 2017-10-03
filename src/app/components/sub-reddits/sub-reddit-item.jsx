import React from 'react'
import './sub-reddit-item.sass'

const SubRedditItem = ({ name, children, color = '#f5657c' }) => {
    return (
        <div className="subreddit-item">
            <div className="left">
                <div
                    className="avatar"
                    style={{ backgroundColor: color }}
                >{name.charAt(0).toUpperCase()}</div>
            </div>
            <div className="right">
                <div className="header">/r/{name}</div>
                <div className="body">{children}</div>
                <div className="footer">a day ago</div>
            </div>
        </div>
    )
}

export default SubRedditItem
