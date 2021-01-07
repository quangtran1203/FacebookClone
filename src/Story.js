import React from 'react';
import Reel from './Reel';
import "./Story.css";

function Story() {
    return (
        <div className="story">
            <Reel image="https://www.aquariumofpacific.org/images/exhibits/Magnificent_Tree_Frog_900.jpg" profileSrc="https://previews.123rf.com/images/profshop/profshop1610/profshop161000044/64992771-frog-meme-face-for-any-design-.jpg" title="Person 1"/>
            <Reel image="https://i.ytimg.com/vi/YedysY7co0U/hqdefault.jpg" profileSrc="https://images-na.ssl-images-amazon.com/images/I/71cNsDvH3sL.png" title="Person 2" />
            <Reel image="https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" profileSrc="https://p7.hiclipart.com/preview/900/971/621/internet-meme-rage-comic-pol-antifa-meme.jpg" title="Person 3" />
            <Reel image="https://www.dogzone.com/images/breeds/beagle.jpg" profileSrc="https://image.winudf.com/v2/image/Y29tLnNuYXBmaWJlci5waG90b2VkaXRvci5tZW1lZmFjZV9zY3JlZW5fMF8xNTM5ODY0MzA3XzA3OA/screen-0.jpg?fakeurl=1&type=.jpg" title="Person 4" />
            <Reel image="https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg" profileSrc="https://pbs.twimg.com/profile_images/1212841876895813632/4mzarqqS.jpg" title="Person 5"/>
        </div>
    )
}

export default Story
