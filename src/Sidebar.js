import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">                    
                    <h2>WC Slack-Clone</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Wolz CODElife
                    </h3>
                </div>
                <CreateIcon />
            </div>
        </div>
    )
}

export default Sidebar
