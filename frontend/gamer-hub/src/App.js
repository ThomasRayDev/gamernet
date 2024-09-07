import logo from './logo.svg';
import './App.css';
import { getResponse } from './serivces/testNetwork';

function App() {
  function get_response() {
    getResponse().then((response) => {
      console.log(response);
      console.log(response.data);
    });
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          get_response();
        }}>
        Отправить запрос
      </button>
    </div>
  );
}

export default App;
