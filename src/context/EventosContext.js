import React, { Component } from 'react';
import axios from 'axios';  

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
    
    token = 'G26JF3VXCU53U2TLFPDP';
    ordenar = 'date';

    state = {
        eventos: []
    }

    obtenerEventos = async (busqueda) => {
        console.log('busqueda ', busqueda);
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;

        let eventos = await axios.get(url);

        console.log(eventos.data.events);
        this.setState({
            eventos : eventos.data.events
        });
    }

    render(){

        //here is where the data comes from
        //the key value represents the name of the state
        return ( 
            <EventosContext.Provider
                value={{
                    eventos: this.state.eventos,
                    obtenerEventos: this.obtenerEventos //here in the provider I'm exposing a function
                }}>
                {this.props.children }
            </EventosContext.Provider>
        );
    }
}

export default EventosProvider;