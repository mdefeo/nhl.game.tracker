// /app/helpers/api.ts

import apiCache from './apiCache';

async function fetchDataFromApi(url: string): Promise<any> {
  const cacheKey = url;
  const cachedData = apiCache.get(cacheKey);
  if (cachedData) {
    console.log('Returning cached data for:', url);
    return cachedData;
  }

  try {
    const apiUrl = `/api/proxy?url=${encodeURIComponent(url)}`;
    console.log('---apiUrl: ', apiUrl);
    const response = await fetch(apiUrl);
    if (!response.ok) {
      if (cachedData) {
        console.error('Error fetching data, but cached data exists. Returning cached data for:', url);
        return cachedData;
      }
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    apiCache.set(cacheKey, data);
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    if (cachedData) {
      console.error('Error fetching data, but cached data exists. Returning cached data for:', url);
      return cachedData;
    }
    throw error;
  }
}

export { fetchDataFromApi };
