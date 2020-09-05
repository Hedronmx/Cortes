import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Topbar from './components/Topbar.jsx'
// import Content from './components/Content.jsx'
// import FormaRegistro from './components/FormaRegistro.jsx'
// import Usuario from './components/Usuario.jsx'
import Usuarios from './components/Usuarios.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container contenedor" id="container">
  
          <div className="overlay"></div>
          <div className="search-overlay"></div>
		      <Topbar />
		      <Usuarios />
      </div>
    </div>
  );
}

export default App;
