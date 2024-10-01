const apiKey = process.env.NEXT_PUBLIC_API_KEY
const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL

export const getFilmresponse = async () => {
  const response = await fetch(
    `${baseUrl}/movie/popular?api_key=${apiKey}`
  );
  const movies = await response.json();
  return movies.results
  
};
export const SearchMovie = async (query:String) => {
  const response = await fetch(
    `${baseUrl}/search/movie?query=${query}&api_key=${apiKey}`
  );
  const movies = await response.json();
  return movies.results
};
