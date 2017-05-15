import React from 'react';
import styles from './Button.scss';

class Button extends React.Component {
  render() {
    return (
      <button className={styles.button} onClick={this.props.click}>Hit me!</button>
    );
  }
}

export default Button;
