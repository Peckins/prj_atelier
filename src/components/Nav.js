import React from 'react';
import './Nav.css';

export default class Nav extends React.Component {
  render() {
    return (
        <nav className="navbar">
            <button className="btn btn-home">
              <span className="glyphicon glyphicon-home" />
            </button>

            <h3 className="text-center">{this.props.titulo}</h3>
        </nav>
    );
  }
}
