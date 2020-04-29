import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () =>{
    if (this.props.changeSelection) {
      this.props.changeSelection(this.props.id);
    }
  }

   render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return(
      <img 
      className="gif" 
      src={ src } 
      alt="gif image"
      onClick={this.handleClick}
      />
    )
  }
}

export default Gif;