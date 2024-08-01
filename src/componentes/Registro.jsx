import React, { Component } from 'react';
import axios from 'axios';

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
    try {
      const response = await axios.post('http://10.0.4.105:3000/api/registrar', {
        user, pass, nombres, apellidos, documento
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
      alert(`Status: ${response.data.status}, User ID: ${response.data.user_id}`);
    } catch (error) {
      console.error("Error registering user:", error);
    }
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
