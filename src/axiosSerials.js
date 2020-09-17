import axios from 'axios';

const axiosSerials = axios.create({
  baseURL: 'http://api.tvmaze.com/search/shows?q='
});

export default axiosSerials;