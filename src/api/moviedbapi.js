import axios from 'axios';
const axiosInstace = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'bb3fa9e8630eb8881deec203879c4add',
    language: 'es-AR'
  }
});
console.log(axiosInstace);

const getPopularMovies = (page = 1) => {
  return axiosInstace.get('/movie/popular', {
    params: {
      page
    }
  });
};

const getPopularSeries = (page = 1) => {
  return axiosInstace.get('/serie/popular', {
    params: {
      page
    }
  });
};
const getMovieCrew = movieId => {
  return axiosInstace.get('/movie/' + movieId + '/credits');
};

const getMovieInfo = movieId => {
  return axiosInstace.get('/movie/' + movieId);
};
const getRecommendation = movieId => {
  return axiosInstace.get(`/movie/${movieId}/recommendations`);
};
export {
  getPopularMovies,
  getRecommendation,
  getPopularSeries,
  getMovieInfo,
  getMovieCrew
};
