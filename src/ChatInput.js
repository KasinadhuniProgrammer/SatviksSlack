import React, { useState }from 'react'; 
import './ChatInput.css'; 
import db from './firebase';
import { useStateValue } from './StateProvider'
import firebase from "./firebase"; 


function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState('');
    const [{ user }] = useStateValue(); 


    const sendMessage = (e) => {
        e.preventDefault();

        if(channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input, 
                user: user.displayName, 
                userImage: user.photoURL, 


            })
        }

    }

  
    return (
        <div className="chatinput">
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="type here"/>
                <button type="submit" onClick={sendMessage}>Send</button>

            </form>
        </div>
    ); 
}

export default ChatInput; 