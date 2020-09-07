import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Topbar from './components/Topbar.jsx'
import Content from './components/Content.jsx'
import FormaRegistro from './components/FormaRegistro.jsx'
import Usuario from './components/Usuario.jsx'
import Usuarios from './components/Usuarios.jsx'
import Login from './components/Login.jsx'
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom"
import {AUTH} from './firebase/Firebase'


function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/agremiados' />}
    />
  )
}
  
function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: false
    };
  }
  
  componentDidMount () {
    AUTH.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true
        });
      } else {
        this.setState({
          authenticated: false
        });
      }
    })
  }

  render () {
    return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-container contenedor" id="container">
    
            <div className="overlay"></div>
            <div className="search-overlay"></div>
            <Topbar />
            <Switch>
		        <Route path='/' exact component={Content} />
		        <PrivateRoute path='/usuario' authenticated={this.state.authenticated} component={Usuario} />
		        <PrivateRoute path='/agremiados' authenticated={this.state.authenticated} component={Usuarios} />
		        <PrivateRoute path='/registro' authenticated={this.state.authenticated} component={FormaRegistro} />
		        <PublicRoute path='/login' authenticated={this.state.authenticated} component={Login} />
		        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
