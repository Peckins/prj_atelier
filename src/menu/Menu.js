import React from 'react';
import { Switch, Link } from 'react-router-dom';
import Options from './Options';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import Costura from '../img/costura.jpg';
import Maquina from '../img/maquina.jpg';
import Roupas from '../img/roupas.jpg';

export default class Menu extends React.Component {
    

    render() {
        return (
            <div className="jumbotron">
                <Options titulo="Teste" image={Costura} description="isto é um teste" />
            </div>
        );
    }
}