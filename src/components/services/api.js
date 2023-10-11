import axios from 'axios';

export const fetchImages = async () => {
  const { data } = await axios.get(
    'https://pixabay.com/api/?key=38932805-d594196d8ad5a18d00bd574f9&q=yellow+flowers&image_type=photo'
  );

  // Симуляція помилки:
  // throw new Error('Oooops! Something went wrong');

  return data.hits;
};

// https://jsonplaceholder.typicode.com/posts
// https://pixabay.com/api/?key=38932805-d594196d8ad5a18d00bd574f9&q=yellow+flowers&image_type=photo
// return data;

export const findImagesByTag = async searchQuery => {
  const apiKey = '38932805-d594196d8ad5a18d00bd574f9';
  const baseUrl = 'https://pixabay.com/api/';
  const queryParams = `key=${apiKey}&q=${searchQuery}&image_type=photo`;

  const { data } = await axios.get(`${baseUrl}?${queryParams}`);

  return data.hits;
};
