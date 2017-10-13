import React, { Component } from 'react'
import HTTPClient from 'axios'

// styling
import './Subreddit.sass'

// components
import RedditCard from './RedditCard'
import Loading from './../../../loading/Loading'
import ErrorBox from './../../../error/ErrorBox'

// constants
const NETWORK_EROR = 'Network Error'

class Subreddit extends Component {
    constructor () {
        super()

        this.state = {
            isFetching: false,
            threads: [],
            error: null
        }

        this.fetchSubreddit = this.fetchSubreddit.bind(this)
        this.handleErrorDiscard = this.handleErrorDiscard.bind(this)
    }

    // custom handlers
    handleErrorDiscard () {
        this.setState({ error: null })
    }

    // custom methods
    fetchSubreddit (subreddit) {
        const { isFetching } = this.state

        if (isFetching) return

        this.setState({
            error: null,
            isFetching: true
        })

        HTTPClient.get(`https://www.reddit.com/r/${subreddit}.json`)
            .then(
                ({ data: response }) => {
                    const { children: threads } = response.data

                    this.setState({ threads, isFetching: false })
                }
            )
            .catch(
                ({ message: errMessage }) => {
                    if (errMessage === NETWORK_EROR ) {
                        const error = 'We couldn\'t connect to reddit, please check your connection status!'
                        this.setState({ error, isFetching: false })
                    }
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
        const { isFetching, threads, error } = this.state

        const { match } = this.props
        const { subreddit } = match.params

        return (
            <div className="reddit-content">
                {isFetching ? <Loading /> : null}
                {error ? <ErrorBox onDiscard={this.handleErrorDiscard}>{error}</ErrorBox> : null}
                <h1 className="rc-title">/r/{subreddit}</h1>

                {threads.map((thread, key) => <RedditCard key={key} thread={thread} url={match.url} />)}
            </div>
        )
    }
}

export default Subreddit
