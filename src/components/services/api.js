import axios from 'axios';

export const fetchImages = async () => {
  const { data } = await axios.get('https://pixabay.com/api/');
  return data.hits;
};
