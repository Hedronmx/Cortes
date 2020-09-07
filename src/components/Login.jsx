import React, {Component} from 'react';
import { User, Lock } from 'react-feather'
import {signin} from './auth.js'

export default class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleChange(event) {
    this.setState({
      email: event.target.value
    });
  }
  
  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }
  
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }


	render () {
		return(
      <div id="content" className="main-content contenido">
      	<div class="form-container outer">
		        <div class="form-form">
		            <div class="form-form-wrap">
		                <div class="form-container">
		                    <div class="form-content">
		
		                        <h1 class="">Iniciar Sesión</h1>
		                        <p class="">Ingresa tu información para continuar</p>
		                        
		                        <form class="text-left" autoComplete="off" onSubmit={this.handleSubmit}>
		                            <div class="form-row">
		
		                                <div id="username-field" class="field-wrapper input col-md-12 mb-4">
		                                		<User />
		                                    <label htmlFor="correo"> Correo Electronico</label>
		                                    <input id="correo" name="correo" type="email" class="form-control" placeholder="Ingresa tu correo" onChange={this.handleChange} value={this.state.email}/>
		                                </div>
		
		                                <div id="password-field" class="field-wrapper input col-md-12 mb-4">
                                    		<Lock />
                                        <label for="password">Contraseña</label>
		                                    <input id="password" name="password" type="password" class="form-control" placeholder="Password" onChange={this.handleChangePassword} value={this.state.password}/>
		                                </div>
		                                
		                                <div class="d-sm-flex justify-content-between">
		                                    <div class="field-wrapper">
		                                        <button type="submit" class="btn btn-primary" value="">Iniciar Sesión</button>
		                                    </div>
		                                </div>
		
		                                <p class="signup-link linki"> <a href="auth_register_boxed.html">Registrate Aquí</a></p>
		                                <p class="signup-link linki">Olvidaste tu contraseña? <a href="auth_register_boxed.html">Clic Aquí</a></p>
		
		                            </div>
		                        </form>
		
		                    </div>                    
		                </div>
		            </div>
		        </div>
		    </div>
      </div>
		)
	}
}
