import React from 'react'; 
import './SideBar.css'; 
import SideBarOption from './SideBarOption'; 
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import CodeIcon from '@material-ui/icons/Code';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import FastfoodIcon from '@material-ui/icons/Fastfood';


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
            <SideBarOption Icon={YouTubeIcon} title="Youtube"/>
            <SideBarOption Icon={AccountTreeIcon} title="Projects"/>
            <SideBarOption Icon={CodeIcon} title="Python"/>
            <SideBarOption Icon={DeveloperModeIcon} title="JavaScript"/>
            <SideBarOption Icon={SportsCricketIcon} title="Cricket"/>
            <SideBarOption Icon={SportsEsportsIcon} title="Gaming"/>
            <SideBarOption Icon={FastfoodIcon} title="Food"/>
            

        </div>
    ); 
}

export default SideBar; 