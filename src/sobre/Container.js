import React from 'react';
import './Container.css';
// imagens
import Atelier from './../img/miriam/atelier.jpg';
import Miriam from './../img/miriam/Miriam-webBanner.jpg';


export default class Container extends React.Component {
  render() {
    return (
        <span className="border">
            <h3 className="text-center titulo">História, carreira e conquistas...</h3>

            <br />

            <p>Miriam Medeiros é uma costureira especializada em concerto e reformas de roupas,  atuando há 20 anos no mercado de costura, onde atuou como costureira na loja Antônia Valladão, fazendo concerto de roupas para pessoas como Luciana Triguis Bacchi, Vera Viel e Ellen Ganzarolli.</p>

            <img src={Miriam} className="img-responsive container-img" />          

            <br />

            <p>O atelier Miriam Medeiros foi fundado em 9 de abril de 2016, na cidade de mongaguá/SP, com o intuito de fornecer serviços de concertos e reparos à população, onde abrange qualquer tipo de tecido ou roupa, aliando prática e excelência em seus trabalhos.</p>

            <img src={Atelier} className="img-responsive container-img" />


        </span>
    );
  }
}
