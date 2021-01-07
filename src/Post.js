import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import { AccountCircle, ExpandMoreOutlined } from '@material-ui/icons';

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar className="post_avatar" src={profilePic} />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt=""></img>
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatIcon />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <ShareIcon />
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircle />
                    <ExpandMoreOutlined/>
                </div>
            </div>
            
        </div>
    )
}

export default Post
