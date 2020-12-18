import React, { useEffect, useState }from 'react'; 
import './Chat.css';
import { useParams } from "react-router-dom";
import db from "./firebase"; 

import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';  

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);  

    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomDetails(snapshot.data()) 
 
            ))
        }


    }, [roomId]) 


    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>

                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoIcon /> Details

                    </p>

                </div>
    
            </div>

        </div>
    ); 

}

export default Chat; 