import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/More';
import { Button } from '@mui/material';  
import Sidebaroption from './SidebarOption';
function Sidebar(){
    return(
        <div className="sidebar">
           {/*Twitter icon*/}
           <TwitterIcon className="twiticon"/>
        <Sidebaroption active Icon={HomeIcon} text="Home"/>
        <Sidebaroption Icon={ExploreIcon} text="Explore"/>
        <Sidebaroption Icon={NotificationsIcon} text="Notifications"/>
        <Sidebaroption Icon={MessageIcon} text="Messages"/>
        <Sidebaroption Icon={BookmarkIcon} text="Bookmarks"/>
        <Sidebaroption Icon={ListAltIcon} text="Lists"/>
        <Sidebaroption Icon={AccountCircleIcon} text="profile"/>
        <Sidebaroption Icon={MoreIcon} text="More"/>

        <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>

        </div>
    );
}
export default Sidebar;