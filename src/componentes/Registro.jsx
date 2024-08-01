import React, { Component } from 'react';

export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      nombres: '',
      apellidos: '',
      documento: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = async () => {
    const { user, pass, nombres, apellidos, documento } = this.state;
    const response = await fetch('http://10.0.4.105:3000/api/registrar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, pass, nombres, apellidos, documento })
    });
    const data = await response.json();
    alert(`Status: ${data.status}, User ID: ${data.user_id}`);
  };

  render() {
    return (
      <div>
        <h2>Registro</h2>
        <input name="user" placeholder="Usuario" onChange={this.handleChange} />
        <input name="pass" type="password" placeholder="Contraseña" onChange={this.handleChange} />
        <input name="nombres" placeholder="Nombres" onChange={this.handleChange} />
        <input name="apellidos" placeholder="Apellidos" onChange={this.handleChange} />
        <input name="documento" placeholder="Documento" onChange={this.handleChange} />
        <button onClick={this.handleRegister}>Registrar</button>
      </div>
    );
  }
}
