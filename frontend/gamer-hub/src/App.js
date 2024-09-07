import logo from './logo.svg';
import './App.css';
import { getResponse } from './serivces/testNetwork';

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          console.log(getResponse);
        }}>
        Отправить запрос
      </button>
    </div>
  );
}

export default App;
