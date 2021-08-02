import React from 'react'
import './ChatInput.css'

const ChatInput = ({ channelName, channelId }) => {
    return (
        <div className="chatInput">
            <form>
                <input type="text" />
            </form>
        </div>
    )
}

export default ChatInput
