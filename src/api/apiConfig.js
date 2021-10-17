const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "193593681eeeb9f10b20ee6506e9af8b",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
