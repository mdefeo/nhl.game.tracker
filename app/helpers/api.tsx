// /app/helpers/api.ts
async function fetchDataFromApi(url: string): Promise<any> {
  try {
    const apiUrl =`/api/proxy?url=${url}`;
    //  console.log('---API_FULL_URL: ', apiUrl);
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch data: ", error);
    throw error;
  }
}

export { fetchDataFromApi };
