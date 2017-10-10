import React, { Component } from 'react'
import HTTPClient from 'axios'

// styling
import './RedditContent.sass'

// components
import RedditCard from './RedditCard'

// TODO: create component file for this
const Loading = ({ children }) => (
    <div
        className="loading-threads"
        dangerouslySetInnerHTML={{ __html: '<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>' }} />
)

class RedditContent extends Component {
    constructor () {
        super()

        this.state = {
            isFetching: false,
            threads: []
        }

        this.fetchSubreddit = this.fetchSubreddit.bind(this)
    }

    // custom methods
    fetchSubreddit (subreddit) {
        const { isFetching } = this.state

        if (isFetching) return

        this.setState({ isFetching: true })

        HTTPClient.get(`https://www.reddit.com/r/${subreddit}.json`)
            .then(
                ({ data: response }) => {
                    const { children: threads } = response.data

                    this.setState({ threads, isFetching: false })
                }
            )
    }

    // component lifecycles
    componentDidMount () {
        const { subreddit } = this.props.match.params

        this.fetchSubreddit(subreddit)
    }

    componentWillReceiveProps(nextProps) {
        const { subreddit } = nextProps.match.params
        this.fetchSubreddit(subreddit)
    }

    // react component methods
    render () {
        const { isFetching, threads } = this.state

        const { match } = this.props
        const { subreddit } = match.params

        return (
            <div className="reddit-content">
                {isFetching ? <Loading /> : null}
                <h1 className="rc-title">/r/{subreddit}</h1>

                {threads.map((thread, key) => <RedditCard key={key} thread={thread} />)}
            </div>
        )
    }
}

export default RedditContent
