import React, { Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {
  
  // State del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '' 
   });

   const [consultar, guardarConsultar] = useState(false);
  
   const { ciudad, pais } = busqueda;

   useEffect(() => {
      const consultarAPI =  async () => {
        if(consultar){
          const appId = '239192074e4bd33db4e8cc8c8bb94a5c';
          const url = `http://api.openweathermap.org/data/2.5/forecast?q=${ciudad},${pais}id=${appId}`;
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          
          console.log(resultado);
        }
      }
      consultarAPI();
   },[ciudad, consultar, pais]);
  
  return (
    <Fragment>
      <Header
        titulo='Clima React App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>

        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
