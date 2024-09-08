import React from 'react';
import { sendRequest } from '../serivces/testNetwork';

function Header() {
  const [isVisiblePopup, setVisiblePopup] = React.useState(false);
  const popupRef = React.useRef(null);

  // function send_request() {
  //   sendRequest().then((response) => {
  //     console.log(response);
  //   });
  // }

  const handleClickOutsidePopup = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsidePopup);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsidePopup);
    };
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <h1>GamerHub</h1>
      </div>
      <div className="account">
        Вы не авторизованы
        <button className="account-button" onClick={() => setVisiblePopup(!isVisiblePopup)}>
          Вход
        </button>
        {isVisiblePopup && (
          <div ref={popupRef} className="account-popup">
            <form action="">
              <div className="account-popup__input">
                <label htmlFor="username">Имя пользователя или email</label>
                <input type="text" name="username" id="username" />
              </div>
              <div className="account-popup__input">
                <label htmlFor="password">Пароль</label>
                <input type="password" name="password" id="password" />
              </div>
              <div className="account-popup__check">
                <input type="checkbox" name="remember-me" id="remember-me" />
                <label htmlFor="remember-me">Запомнить меня</label>
              </div>
              <button type="submit">Войти</button>
            </form>
            У вас ещё нет учётной записи?
            <a href="">Зарегистрируйтесь</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
