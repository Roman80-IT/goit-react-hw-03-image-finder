import axios from 'axios';

// export const fetchImages = async () => {
//   const { data } = await axios.get(
//     'https://pixabay.com/api/?key=38932805-d594196d8ad5a18d00bd574f9&q=yellow+flowers&image_type=photo'
//   );

// Симуляція помилки:
// throw new Error('Oooops! Something went wrong');

//   return data.hits;
// };

// https://jsonplaceholder.typicode.com/posts
// https://pixabay.com/api/?key=38932805-d594196d8ad5a18d00bd574f9&q=yellow+flowers&image_type=photo
// return data;

// export const findImagesByTag = async searchQuery => {
//   const apiKey = '38932805-d594196d8ad5a18d00bd574f9';
//   const baseUrl = 'https://pixabay.com/api/';
//   const queryParams = `key=${apiKey}&q=${searchQuery}&image_type=photo`;

//   const { data } = await axios.get(`${baseUrl}?${queryParams}`);

//   return data.hits;
// };

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38932805-d594196d8ad5a18d00bd574f9';
export const PER_PAGE = 12;

export async function getImages(query, page) {
  const separatorIndex = query.indexOf('/');
  const parcedQuery = query.slice(separatorIndex + 1, query.length);

  const { data } = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${parcedQuery}&per_page=${PER_PAGE}&page=${page}`
  );
  return data;
}
