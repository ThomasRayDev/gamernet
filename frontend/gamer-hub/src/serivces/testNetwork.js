import axios from 'axios';

const API_URL = 'http://localhost:8000/test';

export const getResponse = () => axios.get(API_URL);
