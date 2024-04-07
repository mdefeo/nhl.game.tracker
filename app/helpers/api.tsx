// /app/helpers/api.tsx
export const fetchDataFromApi = async (url: string) => {
  try {
    const apiUrl =`/api/proxy?url=${url}`;
    // console.log('---API_FULL_URL: ', apiUrl);
    const response = await fetch(apiUrl);
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
