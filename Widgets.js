import React from 'react'
import './Widgets.css';
import { TwitterTimelineEmbed,
   TwitterShareButton, 
   TwitterFollowButton, 
   TwitterHashtagButton, 
   TwitterMentionButton, 
   TwitterTweetEmbed, 
   TwitterMomentShare, 
   TwitterDMButton, 
   TwitterVideoEmbed, 
   TwitterOnAirButton } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';
function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets_inputs'>
          <SearchIcon className='widgets_searchicon' />
          <input type="text" placeholder='Search Twitter' />

        </div>

        <div className='widgets_container'>
          <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId='1610893246988967936' />
        <TwitterTimelineEmbed 
      sourcetype="profile"
        screenName="SVC_official"
        options={{height: 400}} />
        <TwitterShareButton 
        url="https://www.amazon.in"
        options={{text:"#reactjs is awesome",via:"sekharr"}
      }
      />
        </div>
    </div>
  )
}

export default Widgets