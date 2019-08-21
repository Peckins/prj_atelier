import React from 'react';
// componentes
import Nav from '../components/Nav';
import Card from './Card';
// estilização
import 'bootstrap/dist/css/bootstrap.min.css';
import './Destaques.css';
// imagens
import Branco from './../img/galeria/branco.jpeg';
import Roupa from './../img/galeria/roupa.jpeg';
import Social from './../img/galeria/social.jpeg';
import Vestido_Fino from './../img/galeria/vestido-fino.jpeg';
import Social_Rosa from './../img/galeria/social-rosa.jpeg';
import Vestido_Preto from './../img/galeria/vestido-preto.jpeg';
import Vestido_Social from './../img/galeria/vestido-social.jpeg';
import Vestido from './../img/galeria/vestido.jpeg';

export default class App extends React.Component {
  render() {
    return (
        <div className="jumbotron">
            <Nav titulo="Destaques" />

            <hr />

            <div className="text-center">
                <Card image={Branco} />
                <Card image={Vestido_Fino} />
                <Card image={Social_Rosa} />
                <Card image={Vestido_Preto} />
                <Card image={Vestido_Social} />
                <Card image={Vestido} />
                <Card image={Roupa} />
            </div>
        </div>
    );
  }
}
