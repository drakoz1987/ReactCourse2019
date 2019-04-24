import React, {Component} from 'react';
import youtube from './api/youtube';
import VideoList from './Components/VideoList/VideoList'
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar'


class App extends Component {
    state = {
        videoList:[]
    };
    onTermSubmit = async (term) => {
        const list = await youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({videoList:list.data.items});
    };
    render() {
        return (
            <div className='App ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList  videoList={this.state.videoList} />
            </div>
        )
    }
}

export default App;