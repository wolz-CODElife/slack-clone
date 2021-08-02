import React, { useState } from 'react'
import './ChatInput.css'
import db from './firebase'
import firebase from 'firebase'
import { useStateValue } from './StateProvider'

const ChatInput = ({ channelName, channelId }) => {
    const [input, setInput] = useState('')
    const [{ user }] = useStateValue()
    
    const sendMessage = (e) => {
        e.preventDefault()
        if (channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp,
                user: user?.displayName,
                userImage: user?.photoURL
            })
        }
    }
    return (
        <div className="chatInput">
            <form>
                <input
                    type="text"
                    placeholder={`Message #${channelName}`}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" onClick={sendMessage} >Send</button>
            </form>
        </div>
    )
}

export default ChatInput
