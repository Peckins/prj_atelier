import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  render() {
    return (
        <span className="border">
            <img src={this.props.image} className="img-responsive border-img" />
        </span>
    );
  }
}
