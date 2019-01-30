import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://movie-rating-app-69e0c.firebaseio.com'
});

export default instance;