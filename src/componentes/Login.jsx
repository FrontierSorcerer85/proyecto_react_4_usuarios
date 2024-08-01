import React, { Component } from 'react';
import AuthContext from '../componentes/AuthContext';

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
    const response = await fetch('http://10.0.4.105:3000/api/ingresar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, pass })
    });
    const data = await response.json();
    if (data.status === 'success') {
      this.context.login(data.user, data.token);
    } else {
      alert('Login failed');
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
