import React, { Component } from 'react';
import HousesList from './compnents/HousesList';

class App extends Component {
  render() {
    return (
      <div>
        <HousesList props={{test: data}}>
      </div>
    )
  }
}

export default App;
