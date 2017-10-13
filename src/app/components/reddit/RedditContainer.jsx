import React from 'react'
import { Switch, Route } from 'react-router-dom'

// styiling
import './RedditContainer.sass'

import RedditList from './components/list/RedditList'
import Subreddit from './components/content/Subreddit'
import Topic from './components/content/Topic'

const createUrlPath = match => path => `${match.path}/${path}`

const RedditContainer = ({ match }) => {
    const urlPath = createUrlPath(match)

    return (
        <div className="reddit-container">
            <Switch>
                <Route path={urlPath('favorites')} component={RedditList} />
                <Route
                    path={urlPath(':page')}
                    render={({ match }) => (
                        <div>
                            <h2>{match.params.page} coming soon!</h2>
                            <pre>{JSON.stringify(match, null, 2)}</pre>
                        </div>
                )} />
            </Switch>

            <Route path={urlPath(':page/:subreddit')} exact component={Subreddit} />
            <Route path={urlPath(':page/:subreddit/:topic')} exact component={Topic} />
        </div>
    )
}

export default RedditContainer
