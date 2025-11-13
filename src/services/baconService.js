import axios from 'axios';

// Gets random "Bacon Ipsum" text from the API.
// Returns a Promise with an array of paragraphs.
export async function fetchBaconIpsum(paragraphs = 1, startWithLorem = true) {
  const baseURL = 'https://baconipsum.com/api/';
  if (paragraphs < 1) return [];

  try {
    const response = await axios.get(baseURL, {
      params: {
        type: 'all-meat',
        paras: paragraphs,
        'start-with-lorem': startWithLorem ? 1 : 0,
        format: 'json',
      },
    });
    return response.data; 
  } catch (error) {
    console.error('Error fetching Bacon Ipsum:', error);
    return [];
  }
}
