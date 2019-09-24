import React from 'react';
import { EventosConsumer } from '../context/EventosContext';
import Evento from './Evento';

const ListaEventos = () => {
    return (
        <div className="uk-cli-width-1-3@m" uk-grid="true">
            <EventosConsumer>
                {(value) => {
                    console.log(value.eventos);
                    return value.eventos.map(evento => (
                        <Evento key={evento.id} evento={evento}/>
                    ))
                }}
            </EventosConsumer>
        </div>
    )
}

export default ListaEventos;