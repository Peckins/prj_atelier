import React from 'react';
// componentes
import Nav from '../components/Nav';
import Container from './Container';
// estilização
import './Sobre.css';

export default class Sobre extends React.Component {
  render() {
    return (
        <div className="jumbotron">
            <h3>Sobre</h3>

            <hr />

            <Container />
        </div>
    );
  }
}
