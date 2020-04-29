import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  renderGifs = () => {
    return this.props.gifs.map( gif => {
      return <Gif id={gif.id} key={gif.id} />
    })
  }
  render() {
    return (
      <div className="gif-list">
        {this.renderGifs()}
      </div>
    ) 
  }
}

export default GifList;