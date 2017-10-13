import React, { Component } from 'react'
import HTTPClient from 'axios'

import Comment from './Comment'
import Loading from './../../../loading/Loading'

import './Topic.sass'

class Topic extends Component {
    constructor () {
        super()

        this.state = {
            op: null,
            comments: null
        }

        this.fetchComments = this.fetchComments.bind(this)
    }

    // business logic
    fetchComments ({ subreddit, topic }) {
        HTTPClient.get(`https://www.reddit.com/r/${subreddit}/comments/${topic}.json?raw_json=1`)
            .then(({ data }) => {
                const [ op, comments ] = data

                console.log(op)
                console.log(comments)

                this.setState({
                    op: this._parseOriginalPost(op),
                    comments: comments.data.children
                })
            })
    }

    _parseOriginalPost (post) {
        const { data } = post.data.children[0]
        return data
    }

    _parseText (__html) {
        return { __html }
    }

    // react component lifecycles
    componentWillMount () {
        const { params } = this.props.match
        this.fetchComments(params)
    }

    // react component methods
    render () {
        const { params } = this.props.match
        const { op, comments } = this.state

        if (!op) return <Loading />
        return (
            <div className="topic">
                <h1 className="t-title">{op.title}</h1>
                <pre>{JSON.stringify(params)}</pre>
                <p dangerouslySetInnerHTML={this._parseText(op.selftext_html || op.url || 'what\'s that!?')} />

                <h1 className="t-title">comments</h1>

                {comments.map((c, key) => (<Comment key={key} comment={c.data} />))}
            </div>
        )
    }
}

export default Topic
