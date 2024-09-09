import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import getCookie from './serivces/testNetwork';

import './scss/app.scss';

function App() {
  const [isVisibleForm, setVisibleForm] = React.useState(false);
  const [registerFormData, setRegisterFormData] = React.useState({
    display_name: '',
    email: '',
    register_password: '',
    repeat_register_password: '',
  });
  const formRef = React.useRef(null);

  const handleChange = (e) => {
    setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (registerFormData.register_password !== registerFormData.repeat_register_password) {
      return console.log('Passwod does not match!');
    }

    try {
      var csrf_token = getCookie('csrftoken');
      const response = await axios.post(
        'http://localhost:8000/sign_up/',
        {
          username: registerFormData.display_name,
          email: registerFormData.email,
          password: registerFormData.register_password,
        },
        {
          headers: {
            'X-CSRFToken': csrf_token,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      );
    } catch (error) {
      console.log('Registration failed');
    }
  };

  const handleClickOutsideForm = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setVisibleForm(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideForm);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideForm);
    };
  }, []);

  return (
    <>
      <div className="container">
        <Header onClickRegister={() => setVisibleForm(true)} />
        <div className="wrapper">
          <Sidebar />
          <Main />
        </div>
      </div>
      {isVisibleForm && (
        <div className="overlay">
          <div ref={formRef} className="register-form">
            <div className="register-form__header">Регистрация</div>
            <form onSubmit={handleSubmit}>
              <div className="register-form__body">
                <dl className="form-row">
                  <dt>
                    <label for="display-name">Имя пользователя:</label>
                  </dt>
                  <dd>
                    <input
                      type="text"
                      name="display_name"
                      id="display_name"
                      value={registerFormData.display_name}
                      onChange={handleChange}
                      required
                    />
                    <div className="form-explain">
                      Это имя будет отображаться в Вашем профиле и сообщениях.
                    </div>
                  </dd>
                </dl>
                <dl className="form-row">
                  <dt>
                    <label for="email">Электронная почта:</label>
                  </dt>
                  <dd>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={registerFormData.email}
                      onChange={handleChange}
                      required
                    />
                  </dd>
                </dl>
                <dl className="form-row">
                  <dt>
                    <label for="register-password">Пароль:</label>
                  </dt>
                  <dd>
                    <input
                      type="password"
                      name="register_password"
                      id="register_password"
                      value={registerFormData.register_password}
                      onChange={handleChange}
                      required
                    />
                  </dd>
                </dl>
                <dl className="form-row">
                  <dt>
                    <label for="register-password-repeat">Пароль ещё раз:</label>
                  </dt>
                  <dd>
                    <input
                      type="password"
                      name="repeat_register_password"
                      id="repeat_register_password"
                      value={registerFormData.repeat_register_password}
                      onChange={handleChange}
                      required
                    />
                  </dd>
                </dl>
              </div>
              <div className="register-form__footer">
                <button type="submit">Регистрация</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
