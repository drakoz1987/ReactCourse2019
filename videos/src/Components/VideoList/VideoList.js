import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
const VideoList = ({ videoList }) => {
    return (
        <div className='VideoList ui relaxed divided list'>
        {videoList.map((item)=>{
            return <VideoItem video={item}/>
        })}
        </div>
    )

};
export default VideoList;