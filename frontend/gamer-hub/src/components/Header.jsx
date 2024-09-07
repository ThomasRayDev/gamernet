import React from 'react';
import { sendRequest } from '../serivces/testNetwork';

function Header() {
  function send_request() {
    sendRequest().then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="header">
      <div className="logo">
        <h1>GamerHub</h1>
      </div>
      <div className="account">
        Вы не авторизованы
        <button onClick={send_request}>Войти</button>
      </div>
    </div>
  );
}

export default Header;
