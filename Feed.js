import React, { useEffect, useState } from "react";
import './Feed.css';
import TB from './TB.js';
import Post from './Post.js';
import db from "./firebase.js";
import FlipMove from 'react-flip-move';
function Feed() {
  const [posts, setPosts]=useState([]);
  useEffect(() => {
db.collection('posts').onSnapshot(snapshot => (
  setPosts(snapshot.docs.map((doc) => doc.data()))
))
  },[]);
  return (
    <div className='feed'>
        {/*Header*/}
        <div className="feed__header">
            <h2>Home</h2>
            </div>
        {/*Tweet*/}
        <TB />
    {/*Post*/}

    <FlipMove>
   {posts.map((post) => (
    <Post 
    key={post.text}
    displayName={post.displayName}
    username={post.username}
    verified={post.verified}
    text={post.text}
      avatar={post.avatar}
      image={post.image}
    />
        ))}
        </FlipMove>


    </div>
  )
}

export default Feed;