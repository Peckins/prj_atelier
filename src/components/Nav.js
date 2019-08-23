import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" >WebSiteName</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link >Home</Link></li>
            <li><Link to="/destaques" >Page 1</Link></li>
            <li><Link to="sobre" >Page 2</Link></li>
            {/* <li><Link to="" >Page 3</Link></li> */}
          </ul>
        </div>
      </nav>
    );
  }
}
