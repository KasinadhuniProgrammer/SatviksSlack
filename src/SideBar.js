import React from 'react'; 
import './SideBar.css'; 
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__firstsec">
                <div className="sidebar__firstinfo">
                    <h2>React.js Slack</h2>
                    <h3><FiberManualRecordIcon /> Satvik Kasinadhuni</h3>
                </div>
                <div><CreateIcon /></div>

            </div>
            

        </div>
    ); 
}

export default SideBar; 