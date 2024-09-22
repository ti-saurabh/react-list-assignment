import './App.css';
import SearchBar from './components/searchBar';
import ItemList from './components/itemList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="blue-text">Item</span> Search
      </header>
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <ItemList />
    </div>
  );
}

export default App;
