import React from 'react'
import './Comment.sass'

const _parseText = __html =>  ({ __html })
const _todo = data => `<h1>TODO:</h1><pre class="pre-todo">${JSON.stringify(data, null, 2)}</pre>`

const Comment = ({ comment, reply }) => {
    const {
        id,
        author,
        body_html,
        url,
        replies
    } = comment

    const rep = replies && replies.data
        ? replies.data.children
        : []

    const cname = `comment${reply ? ' is-reply': ''}`
    return (
        <div className={cname}>
            <span className="author">{author} ({id}):</span>
            <p
                dangerouslySetInnerHTML={_parseText(body_html || url || _todo(comment))} />

            {rep.map((c, key) => (<Comment key={key} comment={c.data} reply />))}
        </div>
    )
}

export default Comment
