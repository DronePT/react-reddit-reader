import React from 'react'
import moment from 'moment'

// styling
import './RedditCard.sass'

const RedditCard = ({ thread }) => {
    if (!thread) return null

    const {
        title,
        preview,
        author,
        created_utc,
        link_flair_text,
        score,
        num_comments
    } = thread.data

    const createdAt = moment.unix(created_utc).fromNow()

    const style = preview && preview.images && preview.images.length
        ? { backgroundImage: `url('${preview.images[0].source.url}')` }
        : {}

    const isnew = false

    return (
        <div className="reddit-card">
            <div className="reddit-card--avatar">
                <div className="avatar" style={style}>
                    <div className="score">{score}</div>
                </div>
            </div>
            <div className="reddit-card--body">
                <div className="header">
                    <span className="title">{title}</span>
                    <div className="tags">
                        {!link_flair_text ? null : <span
                            className="tag"
                            style={{ backgroundColor: '#6acaf4' }}>{link_flair_text}</span>}
                    </div>
                </div>
                <div className="footer">
                    <div className="notes">
                        submitted <span className="date">{createdAt}</span> by <span className="author">{author}</span>
                    </div>
                    <div>
                        <strong>{num_comments}</strong> comments
                    </div>
                </div>
                <div className="tags">
                    {isnew ? <span className="tag">new</span> : null}
                </div>
            </div>
        </div>
    )
}

export default RedditCard
