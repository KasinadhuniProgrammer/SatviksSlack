import React from 'react'; 
import './Header.css';

import { Avatar } from "@material-ui/core"; 
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div className="header">
            <div className="header__firstside">
                <Avatar className="avatarheader"/>
                <AccessTimeIcon className="accesstimeiconheader"/>

            </div>
            <div className="header__secondfirstside">
                <SearchIcon className="searchiconheader"/>
                <input placeholder="Search Satviks Slack" className="searchplaceholderheader"/>

            </div>
            <div className="header__secondside">
                <HelpOutlineIcon className="helpoutlineiconheader"/>

            </div>

        </div>
    ); 
}

export default Header;  