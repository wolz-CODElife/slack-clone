import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <Avatar className="header_avatar" alt='Joe Adewolz' src='' />
                <AccessTimeIcon />
            </div>
            <div className="header_search">
                <Search />
            </div>
            <div className="header_right"></div>
        </div>
    )
}

export default Header
