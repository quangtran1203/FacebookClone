import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Reel.css";

function Reel({image, profileSrc, title}) {
    return (
        <div style={{backgroundImage: `url(${image}`}} className="reel">
            <Avatar className="story_avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}


export default Reel
