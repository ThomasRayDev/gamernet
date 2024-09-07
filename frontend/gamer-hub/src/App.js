import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
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
      <Header />
      <div className="wrapper">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
