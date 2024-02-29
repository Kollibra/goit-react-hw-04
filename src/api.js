import axios from 'axios';

const API_KEY = 'S3RVdHb2DXH-cBfC_NEW9u0da6thWNBPHRuKOangdAA';
const searchImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=${page}&per_page=12&query=${query}`
  );
  console.log(response.data);

  return response.data;
};
export default searchImages;

