import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div>
      <header className="App-header">
        <h1 className="App-title">
          You found a mokoko seed
        </h1>
        <ImageRenderer url="https://assets.maxroll.gg/wordpress/LA_Mokko_Seed.png" />
      </header>
    </div>
    </>
  );
}

class ImageRenderer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clicked : false
      }
    }

    imageClick = () => {
      let sound = new Audio("./MokokoSound.mp3")
      this.setState({clicked : true});
      sound.play()
    }

    render () {
      const clicked = this.state.clicked;
      if (clicked) {
        return null;
      }

      return (
        <img src={this.props.url} onClick={this.imageClick} alt="mokoko seed" className="App-displayImg"/>
      );
    };
  
}

export default App;
