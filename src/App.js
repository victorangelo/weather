import React, { Component } from 'react';

import './styles/styles.css';
import SearchBar from './containers/search';
import WeatherList from './containers/weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Current 5 day weather forecast.</h1>
        </header>
        <div>
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    );
  }
}

export default App;
