import { Component } from 'react';
import DisplayBook from './components/DisplayBook';
import AddBook from './components/AddBook';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Add Book:
          </p>
        </header>
        <AddBook />
        <DisplayBook />
      </div>
    );
  }
}

export default App;
