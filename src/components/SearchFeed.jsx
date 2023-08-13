import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

/////////////////////////////////////////
const SearchFeed = () => {
  const [ videos, setVideos ] = useState([]);
  const {searchedKey} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchedKey}`)
      .then((data) => setVideos(data.items))
  },[searchedKey]);

  return (
    <Box pl={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2, backgroundColor: '#181818'}}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color:'white' }}>
        {searchedKey} <span style={{ color: '#FC1503' }} >Videos</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed