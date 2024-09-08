import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getResponse = () => axios.get(API_URL + '/test');

export const getCsrfToken = () =>
  axios
    .get(API_URL + '/csrf', { withCredentials: true })
    .then((response) => response.data.csrfToken);

export const sendRequest = () => {
  return getCsrfToken().then((csrfToken) => {
    return axios.post(
      API_URL + '/sign_up/',
      { username: 'MrkNorth', email: 'ilchenko290@gmail.com', password: '123' },
      {
        headers: {
          'X-CSRFToken': csrfToken,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );
  });
};
