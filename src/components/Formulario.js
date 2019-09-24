import React, { Component } from 'react';
import { CategoriasConsumer } from '../context/CategoriasContext';
import { EventosConsumer } from '../context/EventosContext';

class Formulario extends Component {
    state = {
        nombre: '',
        categoria: ''
    }

    //user add an event
    obtenerDatosEvento = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <EventosConsumer>
                {(value) => {
                    console.log('en el form ', value);
                    return (
                        <form onSubmit={e => {
                                e.preventDefault();
                                value.obtenerEventos(this.state)    //here i'm sending the searched value to the context

                            }}
                        >
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Buscar tu evento por Nombre o Categoría
                                </legend>
                            </fieldset>
                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input 
                                        name="nombre"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Nombre de Evento o Ciudad"
                                        onChange={this.obtenerDatosEvento}
                                    />
                                </div>
                                <div className="uk-margin" uk-margin="true">
                                    <select 
                                        className="uk-select"
                                        name="categoria"
                                        onChange={this.obtenerDatosEvento}>
                                        <option value="">--Seleccionar Categoría--</option>
                                        {/* here I'm acceding to the context value(its name), so I don't have any prop passing between componentes*/}
                                        <CategoriasConsumer>
                                            {(value) => {
                                                console.log(value);
                                                {/*look that the name is matching with the name of the property specified inside the state*/}
                                                return value.categorias.map(categoria => (
                                                    <option key={categoria.id} value={categoria.id} data-uk-form-select>
                                                        {categoria.name_localized}
                                                    </option>
                                                )) 
                                            }}
                                        </CategoriasConsumer>
                                    </select>
                                </div>
                                <div>
                                    <input type="submit" className="uk-button uk-button-danger" value="Buscar Eventos"/>
                                </div>
                            </div>
                        </form>
                    )
                }}
            </EventosConsumer>
        );
    }
}

export default Formulario;