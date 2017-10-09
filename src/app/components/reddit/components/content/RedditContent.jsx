import React, { Component } from 'react'

// styling
import './RedditContent.sass'


class RedditContent extends Component {
    renderCard (title, bg, isnew = false) {
        const style = {
            backgroundImage: `url('${bg}')`
        }

        return (
            <div className="reddit-card">
                <div className="reddit-card--avatar">
                    <div
                        className="avatar"
                        style={style}/>
                </div>
                <div className="reddit-card--body">
                    <div className="header">{title}</div>
                    <div className="footer">
                        submitted <span className="date">4 hours ago</span> by <span className="author">DronePT</span>
                    </div>
                    <div className="tags">
                        {isnew ? <span className="tag">new</span> : null}
                    </div>
                </div>
            </div>
        )
    }
    render () {
        const { match } = this.props
        const { subreddit } = match.params

        return (
            <div className="reddit-content">
                <h1 className="rc-title">/r/{subreddit}</h1>

                {this.renderCard('[Remax] T0 com 24 metros quadrados no Príncipe Real. Lava-loiça praticamente na cama. € 305.000.', 'https://a.thumbs.redditmedia.com/A9ywzSsJGzGUCk8xqRf3h0B5wPfeNrJIfHsEyOTmxP4.jpg', true)}
                {this.renderCard('[Sério] Bloquearam-me a conta bancária!', '', true)}
                {this.renderCard('Orçamento do Estado. PS apoia Ferreira Leite nas críticas ao CDS sobre horas extraordinárias', 'https://a.thumbs.redditmedia.com/I4SAjEwcK_Jxo2n4o00opMntRYeNiHPCY3_EUfZJP14.jpg', true)}

                {this.renderCard('[Remax] T0 com 24 metros quadrados no Príncipe Real. Lava-loiça praticamente na cama. € 305.000.', '')}
                {this.renderCard('[Sério] Bloquearam-me a conta bancária!', '')}
                {this.renderCard('Orçamento do Estado. PS apoia Ferreira Leite nas críticas ao CDS sobre horas extraordinárias', '')}

                {this.renderCard('[Remax] T0 com 24 metros quadrados no Príncipe Real. Lava-loiça praticamente na cama. € 305.000.', 'https://a.thumbs.redditmedia.com/A9ywzSsJGzGUCk8xqRf3h0B5wPfeNrJIfHsEyOTmxP4.jpg')}
                {this.renderCard('[Sério] Bloquearam-me a conta bancária!')}
                {this.renderCard('Orçamento do Estado. PS apoia Ferreira Leite nas críticas ao CDS sobre horas extraordinárias', 'https://a.thumbs.redditmedia.com/I4SAjEwcK_Jxo2n4o00opMntRYeNiHPCY3_EUfZJP14.jpg')}

            </div>
        )
    }
}

export default RedditContent
