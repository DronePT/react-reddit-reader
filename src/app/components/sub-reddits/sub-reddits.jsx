import React from 'react'
import './sub-reddits.sass'

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
        </div>
    )
}

export default SubReddits
