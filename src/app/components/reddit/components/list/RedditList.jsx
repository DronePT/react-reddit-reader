import React from 'react'

// styling
import './RedditList.sass'

import RedditListItem from './RedditListItem'

// <Route path="/favorites/:subreddit" exact={true} component={RedditList} />
const RedditList = () => {
    return (
        <div className="sub-reddits">
            <div className="searcher">
                <input
                    type="text"
                    placeholder="Search for subreddits"
                    name=""
                    id=""/>

                <div className="search-icon">
                    <i className="fa fa-search"></i>
                </div>
            </div>

            <RedditListItem name="leagueoflegends">
                Employee Parts With Riot After Comments About Streamer Dying
            </RedditListItem>

            <RedditListItem
                name="teraonline"
                color="#6acaf4"
            >
                Server europe, can I have an info on +15 ambush?
            </RedditListItem>

            <RedditListItem
                name="portugal"
                color="#ffb549">
                Passos Coelho não se recandidata à liderança do PSD
            </RedditListItem>
        </div>
    )
}

export default RedditList
