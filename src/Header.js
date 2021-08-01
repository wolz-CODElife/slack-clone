import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineicon from '@material-ui/icons/HelpOutline'
import { useStateValue } from './StateProvider'

const Header = () => {
    const [{user}] = useStateValue()
    return (
        <div className="header">
            <div className="header_left">
                <Avatar className="header_avatar" alt={user?.displayName} src={user?.photoURL} />
                <AccessTimeIcon />
            </div>
            <div className="header_search">
                <SearchIcon />
                <input type="text" placeholder="Search CODElife slack-clone" />
            </div>
            <div className="header_right">
                <HelpOutlineicon />
            </div>
        </div>
    )
}

export default Header
