import React, { Component } from 'react';

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render(){
    const gifs = [
      { id: "fzFiKLW1BFsaY" },
      { id: "hUXt0x6wOAgYU" },
      { id: "7pXcqlmcGzATm"}
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="fzFiKLW1BFsaY" />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={ gifs } />
          </div>
        </div>
      </div>
    )
  }
}

export default App;