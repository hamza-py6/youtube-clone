import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'; 
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    //'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Key': '17d413e2eemshfe0a20aaba0cba5p1de544jsncb316963fa3b',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async(url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`,options);
	return data;
}


