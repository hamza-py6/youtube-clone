import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl, demoChannelTitle, demoProfilePicture, demoChannelUrl, demoVideoTitle, demoVideoUrl } from "../utils/constants";
import { Link } from "react-router-dom";
// 
const VideoCard = ({video: { id: {videoId}, snippet }}) =>{
	// console.log(video);
	return(
		<Card sx={{ width: {md: "320px",sm: '320px', xs: "100%" }, boxShadow:"none", borderRadius: 0 }} >
			<Link to={ videoId? `/video/${videoId}` :demoVideoUrl } >
				<CardMedia 
					image={snippet?.thumbnails?.high?.url}
					alt={snippet?.title}
					sx={{ width: { xs: "100%",md: "320px" }, height: 180 }}
				/>
			</Link>
			<CardContent sx={{ backgroundColor: "#1e1e1e", height: '106px' }} >
				<Link to={ videoId? `/video/${videoId}`: demoVideoUrl }>
					<Typography variant="subtitle1" fontWeight="bold" color="#fff" >
						{ snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60) }	
					</Typography>				
				</Link>
				<Link to={ snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl }>
					<Typography variant="subtitle2" fontWeight="bold" color="#5F5F5F" >
						{ snippet?.channelTitle || demoChannelTitle }	
					</Typography>				
				</Link>
			</CardContent>
		</Card>
	)
}

export default VideoCard