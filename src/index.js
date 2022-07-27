//aca arranca la aplicación, import un elemento (1)

import React, { Fragment } from "react";
import ReactDOM from "react-dom";

//importa un elemento
import List from "./containers/List";

import "bootswatch/dist/lux/bootstrap.min.css";

//le doy estilo al elemento
const App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark border-bottom border-white">
        <a href="/" className="navbar-brand">
          PeliculasApp
        </a>
      </nav>
      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
      </main>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
