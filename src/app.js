import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components';

class App extends React.Component {
  clickListener(event) {
    event.preventDefault();
    console.log('Clicked!!');
  }

  render() {
    return (
      <div>
        <Button click={this.clickListener}></Button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
