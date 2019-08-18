import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Options.css';

export default class Options extends React.Component {
  render() {
    return (
        // retangulo de seleção de menu
        <span className="btn option-box">
            <h4>{this.props.titulo}</h4>
            <img src={this.props.image} className="img-responsive option-img" />
            <label>{this.props.description}</label>
        </span>
    );
  }
}