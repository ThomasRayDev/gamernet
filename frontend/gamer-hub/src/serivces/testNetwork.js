import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/test/';

export const getResponse = () => axios.get(API_URL);
