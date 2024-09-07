import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1>GamerHub</h1>
      </div>
      <div className="account">
        Вы не авторизованы
        <button>Войти</button>
      </div>
    </div>
  );
}

export default Header;
