import React, { useState} from 'react'
import "./TB.css";
import {Button} from "@mui/material";
import { Avatar } from '@mui/material';
import db from './firebase'
//import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
function TB() {
const [tweetMessage,setTweetMessage]= useState("");
const [tweetImage,setTweetImage]= useState("");
const sendTweet= e => {e.preventDefault();
db.collection("posts").add({
    displayName:"P venkata Ramaiah",
    username:'hardworker',
    verified:true,
    text:tweetMessage,
    Image:tweetImage,
    Avatar:"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
})
setTweetMessage("");
setTweetImage("");
}
  return (
    <div className="tB">
        <from>
            <div className="tb_input">
           <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"></Avatar> 
           <input
           onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} type="text" placeholder="What's happening"></input>
            </div>
            <input 
            value={tweetImage}
            onChange={(e) =>setTweetImage(e.target.value)}
            className='tbimage' type="text" placeholder="Enter image URL"></input>
           
            <Button onClick={sendTweet} className="tbutton">Tweet</Button>
        </from>
    </div>)
  
}

export default TB;