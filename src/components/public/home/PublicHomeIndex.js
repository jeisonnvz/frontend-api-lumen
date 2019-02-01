import React from 'react';
import {Link} from 'react-router-dom';

class PublicHomeIndex extends React.Component {
 
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7 col-xl-7">
              <h1 className="b-home__title">Currency</h1>
              <p className="b-home__summary">
               Mantente actualizado dia a dia  sobre los precios actuales e historicos de 
               las diferentes Monedas como <em>Dolar, Euro, Peso Argentinos y el Real brasilero</em> .
              </p>
              
              <p>
                <Link className="btn btn-warning" to={'/users'}>Login</Link></p>
                
              
            </div>
            <div className="col-12 col-md-5 col-lg-5 col-xl-5">
              <img src="./img/money-png-25.png" alt="currency"
                   className="img-fluid b-home__image"/>
            </div>
          </div>

          

              </div>
           
    );
  }
}

export default PublicHomeIndex;
