import React, { Component } from 'react';
import axios from 'axios';  

const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

//this is where the categories will save
class CategoriasProvider extends Component {
    
    token = 'G26JF3VXCU53U2TLFPDP';

    state = {
        categorias: []
    }

    componentDidMount(){
        this.obtenerCategorias();
    }

    obtenerCategorias = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

        let categorias =  await axios.get(url);

        console.log(categorias.data.categories);
        this.setState({
            categorias : categorias.data.categories
        });
    }

    render(){

        //here is where the data comes from
        //the key value represents the name of the state
        return ( 
            <CategoriasContext.Provider
                value={{
                    categorias: this.state.categorias
                }}>
                {this.props.children }
            </CategoriasContext.Provider>
        );
    }
}

export default CategoriasProvider;