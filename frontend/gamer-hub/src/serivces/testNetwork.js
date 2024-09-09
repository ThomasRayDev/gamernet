import axios from 'axios';

const API_URL = 'http://localhost:8000';

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Проверяем, начинается ли куки с имени, которое мы ищем
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export default getCookie;

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
