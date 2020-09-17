import axios from 'axios';

const axiosSeries = axios.create({
    baseURL: 'http://api.tvmaze.com/shows/'
});

export default axiosSeries;