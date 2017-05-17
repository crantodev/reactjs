import 'react-mdl/extra/material.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './scenes';

class App extends React.Component {

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
