import axios from 'axios';

export const fetchImages = async () => {
  const { data } = await axios.get(
    'https://pixabay.com/api/?key=38932805-d594196d8ad5a18d00bd574f9&q=yellow+flowers&image_type=photo'
  );
  // return data.hits;
  return data;
};
