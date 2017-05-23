import './style.scss';

import React from 'react';
import { List } from 'react-mdl';
import Gist from './components/Gist.jsx'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gists: null
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/gists')
      .then(res => res.json())
      .then(gists => {
        this.setState({ gists })
      })
  }

  render() {
    const { gists } = this.state;
    if (gists) {
      return(
        <div style={{width: '70%', margin: 'auto'}}>
          <List>
            { gists.map((gist, i) => <Gist content={gist} key={i} />) }
          </List>
        </div>
      );
    } else {
      return (
        <h1>Loading...</h1>
      );
    }
  }
}

export default Home;
