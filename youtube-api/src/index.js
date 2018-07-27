import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAwoeD9R6xKUxOGt88tE7x20GJti99iinc';

class App extends Component  {
    constructor (props) {
        super(props);

        this.state = {  
            videos: [], 
            selectedVideo: null 
        }

        this.videoSearch('Clash Royale')
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term }, videos => this.setState({ 
            videos,
            selectedVideo: videos[0]
        }));
    }

    render() {
        const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);
        
        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } 
                    videos={this.state.videos} 
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));