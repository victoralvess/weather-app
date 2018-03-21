import React, { Component } from 'react';

import ForecastsList from './ForecastsList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ForecastsList />
      </div>
    );
  }
}

export default App;
