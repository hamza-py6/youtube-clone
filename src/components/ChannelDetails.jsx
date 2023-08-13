import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from '.';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const {id} = useParams();
  
  console.log(channelDetail);

  useEffect(() =>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data.items));
  },[id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ 
          background: 'linear-gradient(90deg, rgba(247,33,0,1) 0%, rgba(224,94,68,1) 50%, rgba(73,77,79,1) 95%)',
          zIndex: 10, height: '300px'  
        }}/>
        <ChannelCard channelDetail={channelDetail} marginTop ="-93px" />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetails