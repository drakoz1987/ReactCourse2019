import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ImageList from './ImageList/ImageList';
import SearchBar from './SearchBar/SearchBar';


class App extends Component {
  state = {

  }
  onSearchSubmit(term) {
//root url for the API is https://api.unsplash.com/
    axios.get('https://api.unsplash.com/search/photos',{
      params:{query:term},
      headers:{
        Authorization:'Client-ID e23814d50bf27223ea88560ab55f7a0e960f476f922b0f3116e6411cfccccf0f',
      }
    });

  }

  render() {

    return (
      <div className='ui container app-container'>
        < SearchBar onSubmit={this.onSearchSubmit} />
        < ImageList />
      </div>
    )
  }
}

export default App;
