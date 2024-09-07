import logo from './logo.svg';
// import './App.css';

import './scss/all.scss';
import { getResponse } from './serivces/testNetwork';

function App() {
  function get_response() {
    getResponse().then((response) => {
      console.log(response);
      console.log(response.data);
    });
  }

  return (
    <>
      <div class="header">
        <div class="logo">
          <h1>GamerHub</h1>
        </div>
        <div class="account">
          Вы не авторизованы
          <button>Войти</button>
        </div>
      </div>
      <div class="wrapper">
        <div class="sidebar">
          <ul>
            <li>
              <a href="">Профиль</a>
            </li>
            <li>
              <a href="">Мои друзья</a>
            </li>
          </ul>
        </div>
        <div class="main">
          <h2>Блог</h2>
          <div class="content">
            <div class="post">
              <div class="post-info">
                <div class="post-info__author">
                  <div class="avatar"></div>
                  <div class="post-info__author-name">Команда GamerHub</div>
                  <div class="post-info__author-role red">Администратор</div>
                </div>
                <div class="post-info__date">05.09.2024 19:42</div>
              </div>
              <div class="post-content">
                <h3>Разработка сайта</h3>
                <p>
                  Мы рады сообщить, что началась активная разработка социальной сети для геймеров
                  GamerHub.
                </p>
                <p>
                  В этом блоге будут появляться новости разработки, инсайты и прочие приколы от
                  команды сайта. Рады приветсвовать всех!
                </p>
              </div>
            </div>
            <div class="post">
              <div class="post-info">
                <div class="post-info__author">
                  <div class="avatar"></div>
                  <div class="post-info__author-name">Команда GamerHub</div>
                  <div class="post-info__author-role red">Администратор</div>
                </div>
                <div class="post-info__date">05.09.2024 19:38</div>
              </div>
              <div class="post-content">
                <h3>Разработка сайта</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  On the other hand, we denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by the charms of pleasure of the moment, so blinded by
                  desire, that they cannot foresee the pain and trouble that are bound to ensue; and
                  equal blame belongs to those who fail in their duty through weakness of will,
                  which is the same as saying through shrinking from toil and pain. These cases are
                  perfectly simple and easy to distinguish. In a free hour, when our power of choice
                  is untrammelled and when nothing prevents our being able to do what we like best,
                  every pleasure is to be welcomed and every pain avoided. But in certain
                  circumstances and owing to the claims of duty or the obligations of business it
                  will frequently occur that pleasures have to be repudiated and annoyances
                  accepted. The wise man therefore always holds in these matters to this principle
                  of selection: he rejects pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
