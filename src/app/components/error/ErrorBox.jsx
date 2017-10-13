import React from 'react'

// styling
import './ErrorBox.sass'

const ErrorBox = ({ children, onDiscard }) => {
    return (
        <div
            className="error-box-container"
            onClick={onDiscard}
        >
            <div className="error-box">
                <div className="icon">
                    <i className="fa fa-warning fa-4x"></i>
                </div>
                <span className="message">{children}</span>
            </div>
        </div>
    )
}

export default ErrorBox
