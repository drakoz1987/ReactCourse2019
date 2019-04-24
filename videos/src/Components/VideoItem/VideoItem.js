import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video }) => {
	console.log(video.id.videoId);
	console.log(video.snippet.title);
	console.log(video.snippet.description);
	return (
		<div className="item VideoItem">
			<img className="ui image" src={video.snippet.thumbnails.medium.url} />
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};
export default VideoItem;
