// /app/helpers/api.tsx
export const fetchDataFromApi = async (url: string) => {
  try {
    const API_URL_BASE = process.env.API_URL_BASE;
    const API_FULL_URL =`/api/proxy?url=${API_URL_BASE + url}`;
    const response = await fetch(API_FULL_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
