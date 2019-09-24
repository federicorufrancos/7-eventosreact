import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaEventos from './components/ListaEventos';

import CategoriasProvider from './context/CategoriasContext';
import EventosProvider from './context/EventosContext';


function App() {
  //The context use to surround a provider so de elements inside de context will be available inside the component
  return (
    <EventosProvider>
      <CategoriasProvider>
        <Header/>
        <div className="uk-container">
          <Formulario/>
          <ListaEventos/>
        </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
