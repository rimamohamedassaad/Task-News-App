

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const BASE_URL = 'https://gnews.io/api/v4';

export const fetchTopNews = async (
  max: number = 10
): Promise<any[]> => {

  try {

    const response = await fetch(
      `${BASE_URL}/top-headlines?lang=en&max=${max}&apikey=${API_KEY}`
    );

    const data = await response.json();

    return data.articles;

  } catch (error) {

    console.log(error);
    return [];
  }
};
export const searchNews = async (keyword: string) => {
  const res = await fetch(
    `${BASE_URL}/search?q=${keyword}&lang=en&apikey=${API_KEY}`
  );

  const data = await res.json();
  return data.articles;
};
