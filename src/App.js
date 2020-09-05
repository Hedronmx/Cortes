import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Topbar from './components/Topbar.jsx'
import Content from './components/Content.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container" id="container">
  
          <div className="overlay"></div>
          <div className="search-overlay"></div>
		      <Topbar />
		      <Content />
      </div>
    </div>
  );
}

export default App;
