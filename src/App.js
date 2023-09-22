import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';
import { ItemList } from './components/ItemList';
import { UserData } from './components/usersData';
import { TestData } from './components/testData';

function App() {
  return (
    <div className="App">
      <h1>Main App</h1>
      <UserData />
      <Counter />
      <ItemList />
      <TestData />
    </div>
  );
}

export default App;
