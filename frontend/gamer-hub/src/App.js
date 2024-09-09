import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import './scss/app.scss';

function App() {
  const [isVisibleForm, setVisibleForm] = React.useState(false);
  const formRef = React.useRef(null);

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
            <form action="">
              <div className="register-form__body">
                <dl className="form-row">
                  <dt>
                    <label for="display-name">Имя пользователя:</label>
                  </dt>
                  <dd>
                    <input type="text" id="display-name" />
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
                    <input type="email" name="email" id="email" />
                  </dd>
                </dl>
                <dl className="form-row">
                  <dt>
                    <label for="register-password">Пароль:</label>
                  </dt>
                  <dd>
                    <input type="password" name="register-password" id="register-password" />
                  </dd>
                </dl>
                <dl className="form-row">
                  <dt>
                    <label for="register-password-repeat">Пароль ещё раз:</label>
                  </dt>
                  <dd>
                    <input
                      type="password"
                      name="register-password-repeat"
                      id="register-password-repeat"
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
