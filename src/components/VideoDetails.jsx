import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Box ,Stack } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ReactPlayer from 'react-player';
import Videos from './Videos';

const VideoDetails = () => {
  const [ videoDetail, setVideoDetail ] = useState(null);
  const [ relatedVideos, setRelatedVideos ] = useState([]);
  const { id } = useParams();
  console.log(videoDetail);

  useEffect(() =>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));
      
    fetchFromAPI(`search?relatedToVideoId=${id}&part=snippet&type=video`)
      .then((data) => setRelatedVideos(data.items));
  },[id])

  return (
    <Box minHeight='95vh' >
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position:'sticky', top:'86px' }}>
            <ReactPlayer url={`http://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography variant='h5' fontWeight="bold" color="#fff" p={2}>
              { videoDetail && videoDetail.snippet.title }
            </Typography>
            <Stack direction="row" justifyContent='space-between' py={1} px={2}>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography variant={{ sm: "subtitle1",md: "h6" }} fontWeight="bold" color="#5F5F5F">
                  {videoDetail && videoDetail.snippet.channelTitle}
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7, color:'#fff' }}>
                  { videoDetail && parseInt(videoDetail.statistics.viewCount).toLocaleString() } views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7, color:'#fff' }}>
                  { videoDetail && parseInt(videoDetail.statistics.likeCount).toLocaleString() } likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
          <Videos videos={relatedVideos} direction='column' />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails