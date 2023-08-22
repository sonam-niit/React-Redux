import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';
import { ItemList } from './components/ItemList';

function App() {
  return (
    <div className="App">
      <h1>Main App</h1>
      <Counter />
      <ItemList />
    </div>
  );
}

export default App;
