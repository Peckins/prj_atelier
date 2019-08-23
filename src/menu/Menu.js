import React from 'react';
import { Link } from 'react-router-dom';
// componentes a serem usados
import Options from './Options';
// arquivos de estilização
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
// imagens dos botões
import Costura from '../img/costura.jpg';
import Maquina from '../img/maquina.jpg';
import Roupas from '../img/roupas.jpg';


export default class Menu extends React.Component {
    

    render() {
        return (

            <div id="menu" className="jumbotron text-center">
                <h3 className="text-center">Selecione uma opção</h3>

                <br />

                <Link className="link" to="/destaques">
                    <Options titulo="Destaques" image={Roupas} description="Galeria de fotos." />
                </Link>
                <Link className="link" to="/sobre" onclick={
                    () => {
                        document.getElementById('menu').className = "";
                        document.getElementById('menu').className = "jumbotron";
                    }
                }>
                    <Options titulo="Sobre" image={Maquina} description="Sobre o atelier." />
                </Link>
            </div>
        );
    }
}