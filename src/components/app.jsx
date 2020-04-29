import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "fzFiKLW1BFsaY"
    }
  }

  search = (query) => {
    giphy('tVwGBHEitxiujmuHfX2NEP7HQ2EBYXHR').search({
      q: query,
      rating: 'g',
      limit: 15

    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render(){
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={ this.state.gifs } />
        </div>
      </div>
    )
  }
}

export default App;