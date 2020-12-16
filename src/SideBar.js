import React from 'react'; 
import './SideBar.css'; 
import SideBarOption from './SideBarOption'; 
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';


function SideBar() {
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
            

        </div>
    ); 
}

export default SideBar; 