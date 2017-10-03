import React from 'react'
import './sub-reddits.sass'

import SubredditItem from './sub-reddit-item'

const SubReddits = () => {
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

            <SubredditItem name="leagueoflegends">
                Employee Parts With Riot After Comments About Streamer Dying
            </SubredditItem>

            <SubredditItem
                name="teraonline"
                color="#6acaf4"
            >
                Server europe, can I have an info on +15 ambush?
            </SubredditItem>

            <SubredditItem
                name="portugal"
                color="#ffb549">
                Passos Coelho não se recandidata à liderança do PSD
            </SubredditItem>
        </div>
    )
}

export default SubReddits
