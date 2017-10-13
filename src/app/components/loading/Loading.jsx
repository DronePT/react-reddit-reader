import React from 'react'
import './Loading.sass'

const Loading = () => {
    return (
        <div
            className="loading-animation"
            dangerouslySetInnerHTML={{ __html: '<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>' }} />
    )
}

export default Loading
