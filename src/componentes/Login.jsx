import React, { Component } from 'react';
import AuthContext from '../componentes/AuthContext';
import axios from 'axios';

export default class Login extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = async () => {
    const { user, pass } = this.state;
    try {
      const response = await axios.post('https://personas.ctpoba.edu.ar/api/ingresar', { user, pass }, {
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.data.status === 'success') {
        this.context.login(response.data.user, response.data.token);
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  render() {
    return (
      <div>
        <h2>Iniciar Sesión</h2>
        <input name="user" placeholder="Usuario" onChange={this.handleChange} />
        <input name="pass" type="password" placeholder="Contraseña" onChange={this.handleChange} />
        <button onClick={this.handleLogin}>Iniciar Sesión</button>
      </div>
    );
  }
}
