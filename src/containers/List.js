//aca lo que hace es importar un componente en este caso es card (2)

import React, { Fragment } from "react";
import Card from "../components/Card/Card";

console.log(process.env.API);
const API = process.env.API;

class List extends React.Component {
  //creamos estado , que es un objeto que almacena datos
  constructor() {
    super();
    this.state = {
      data: [],
      searchTerm: '',
      error: '',
      loading : true
    };
  }

  async componentDidMount() {
    try {
      //codigo que nos da el navegador para solicitar datos
      // const resJSON = await require("../../assets/data.json");
      //const resJSON = await res.json();

      const res = await fetch(`${API}&s=batman`);
      const resJSON = await res.json();
      this.setState({ data: resJSON.Search, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  //creamos funcion para reciba info del evento (buscar))
  async handleSubmit(e) {
    e.preventDefault();
    if(!this.state.searchTerm){
      return this.setState({error: 'Por favor ingrese un texto valido'});
    }
    const res = await fetch(`${API}&s=${this.state.searchTerm}`)
    const data = await res.json();
    
    //validamos el error por si ingresa un dato no encontrado
    if(!data.Search){
      return this.setState({error: "No hay resultados"});
    }
      
    this.setState({data: data.Search, error:'', searchTerm:''});
    
  }



  render() {

    //para cuando la aplicacion cargue en una red lenta.
    const {data, loading} =this.state;
    if(loading) {
      return <h3 className="text-light">Cargando...</h3>;
    }

    return (
      <Fragment>
        <div className="row">
          <div className="col-md-4 offset-md-4 p-4">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input type="text" className="form-control" placeholder="Buscar" 
              onChange={e=> this.setState({searchTerm: e.target.value})} //lo que el usuario tipea lo muestra por consola
              value = {this.state.searchTerm}
              autoFocus
              />
            </form>
            <p className="text-white">
              {this.state.error ? this.state.error: ''}
            </p>
          </div>
        </div> 
        <div className="row">
          {data.map((movie, i) => {
            return <Card movie={movie} key={i} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default List;
