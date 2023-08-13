import React from 'react'
import { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material'
//import { BorderRight } from '@mui/icons-material'
import { SideBar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [ selected, setSelected ] = useState("New");
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selected}`)
      .then((data) => setVideos(data.items))
  },[selected]);

  return (
    <Stack sx={{ flexDirection: {sx: "column", md: "row" },backgroundColor: '#181818' }}>
        <Box sx={{ height: {sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2} }}>
          <SideBar 
            selected={selected} 
            setSelected={setSelected}
          />
          <Typography className='copyright' variant='body2' sx={{mt: 1.5, color:'#fff' }}>
            CopyRight 2023 HMZ media
          </Typography>
        </Box>
        <Box pl={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color:'white' }}>
            {selected} <span style={{ color: '#FC1503' }} >Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
    </Stack>
  )
}

export default Feed