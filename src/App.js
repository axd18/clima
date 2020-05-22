import React, { Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';


function App() {
  
  // State del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '' 
   });

   const [consultar, guardarConsultar] = useState(false);
   const [resultado, guardarResultado] = useState({})
   const { ciudad, pais } = busqueda;

   useEffect(() => {
      const consultarAPI =  async () => {
<<<<<<< HEAD
        'http://api.openweathermap.org/data/2.5/forecast?q=mardelplata,argentina&appid=524901&APPID=5c7d1df8b2100082eb157efc8a532d37'
=======
        if(consultar){
          const appId = '239192074e4bd33db4e8cc8c8bb94a5c';
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          
          guardarResultado(resultado);
          guardarConsultar(false);
        }
>>>>>>> cf52cdfa370792203e2f6de3a35ab709dcf99943
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
              <Clima
                resultado={resultado}
              />
            </div>
          </div>

        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
