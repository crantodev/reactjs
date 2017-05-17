import './style.scss';

import React from 'react';
import { List, ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl';

class Gist extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

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
    return(
      <div style={{width: '70%', margin: 'auto'}}>
        <List>
        {gists ? gists.map((gist, i) =>
          <ListItem key={i}>
            <ListItemContent avatar="code">{gist.description}</ListItemContent>
            <ListItemAction>
              <a href={gist.html_url} target="_blank"><Icon name="arrow_forward" /></a>
            </ListItemAction>
          </ListItem>)
          : ''}
        </List>
      </div>
    );
  }
}

export default Home;
