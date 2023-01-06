import React,{ forwardRef} from 'react'
import "./Post.css";
import {Avatar} from "@mui/material"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const  Post = forwardRef(({displayName,
    username,
    verified,
    text,
    image,
    avatar
},ref) =>{
  return (
    <div className='post' ref={ref}>
        <div className='post_avatar'>
        <Avatar src={avatar}></Avatar>
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headertext'>
                    <h3>
                        {displayName} {"  "}
                        <span className='post_headerspecial'>
                       {verified &&     <VerifiedUserIcon className='post_badge' /> }@{username}
                        </span>
                    </h3>
                </div>
<div className='post_desc'>
    <p>{text}</p>
</div>
            </div>
            <img src={image}></img>
        <div className='post_footer'>
            <ChatBubbleOutlineIcon fontSize='small' />
            <RepeatIcon fontSize='small' />
            <FavoriteBorderIcon fontSize='small' />
            <PublishIcon fontSize='small' />
        </div>
        </div>
    </div>
  )
});

export default Post;