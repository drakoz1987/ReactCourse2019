import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList/ImageList';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className='ui container app-container'>
        < SearchBar />
        < ImageList />
      </div>
    )
  }
}

export default App;
