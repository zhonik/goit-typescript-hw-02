import axios from 'axios';
import { PhotoApiResponse } from './components/App/App.types';

const API_KEY = 'gJFaNZF8R5vVKOg4QJ3G7kSzE-rMPXoLqSjoU-2FMUs';
axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  per_page: 20,
  orientation: 'landscape',
};

export const getPhotos = async (query: string, page: number): Promise<PhotoApiResponse> => {
  const response = await axios.get<PhotoApiResponse>('/search/photos', {
    params: {
      query,
      page,
    },
  });

  return response.data;
};
