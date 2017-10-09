import React from 'react'

const RedditContent = ({ match }) => {
    return (
        <div>
            Reddit contente goes here?!
            <pre>{JSON.stringify(match, null, 2)}</pre>
        </div>
    )
}

export default RedditContent
