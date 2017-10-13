import React from 'react'

// styling
import './RedditList.sass'

import RedditListItem from './RedditListItem'

const LIST = [
    { name: 'reactjs', color: null },
    { name : 'reactjs', color: null },
    { name : 'worldnews', color: null },
    { name : 'interestingasfuck', color: null },
    { name : 'leagueoflegends', color: null },
    { name : 'teraonline', color: '#6acaf4' },
    { name : 'portugal', color: '#ffb549' }
]

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

            {LIST.map(({ name, color}, key) => (
                <RedditListItem
                    key={key}
                    name={name}
                    color={color} />
                )
            )}
        </div>
    )
}

export default RedditList
