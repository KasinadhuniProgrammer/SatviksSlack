import React, { useEffect, useState } from 'react'; 
import './SideBar.css'; 
import SideBarOption from './SideBarOption'; 
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from "./firebase"; 



function SideBar() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc=> ({
                id:doc.id,
                name: doc.data().name, 

            }))
            )
        ));

    }, []); 

    
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Satviks Slack</h2>
                    <h3> 
                        <FiberManualRecordIcon />
                        Satvik Kasinadhuni
                    </h3>
                </div>
                <CreateIcon />
                

            </div>
            <SideBarOption Icon={InsertCommentIcon} title="Threads"/>
            <SideBarOption Icon={InboxIcon} title="Mentions and Reactions"/>
            <SideBarOption Icon={DraftsIcon} title="Saved Items"/>
            <SideBarOption Icon={BookmarkBorderIcon} title="Channel Browser"/>
            <SideBarOption Icon={PeopleAltIcon} title="People and User Groups"/>
            <SideBarOption Icon={AppsIcon} title="Apps"/>
            <SideBarOption Icon={FileCopyIcon} title="File Browser"/>
            <SideBarOption Icon={ExpandLessIcon} title="Show Less"/>
            <hr />
            <SideBarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr />
            <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel"/>
            {channels.map(channel => (
                <SideBarOption title={channel.name} id={channel.id} />
            ))}
            
            

        </div>
    ); 
}

export default SideBar; 