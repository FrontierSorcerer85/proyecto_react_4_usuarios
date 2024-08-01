import React, { Component } from 'react';
import PersonaForm from './PersonaForm';
import PersonaList from './ArchivoApp';
import AuthContext from '../componentes/AuthContext';

export default class GestorPersonas extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      personas: []
    };
  }

  componentDidMount() {
    this.fetchPersonas();
  }

  fetchPersonas = async () => {
    const response = await fetch('http://10.0.4.105:3000/api/personas', {
      headers: { 'Authorization': `Bearer ${this.context.token}` }
    });
    const data = await response.json();
    this.setState({ personas: data.personas });
  };

  agregarPersona = async (persona) => {
    const response = await fetch('http://10.0.4.105:3000/api/personas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.context.token}`
      },
      body: JSON.stringify(persona)
    });
    const data = await response.json();
    if (data.status === 'success') {
      this.fetchPersonas();
    }
  };

  actualizarPersona = async (persona_id, personaActualizada) => {
    const response = await fetch(`http://10.0.4.105:3000/api/personas/${persona_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.context.token}`
      },
      body: JSON.stringify(personaActualizada)
    });
    const data = await response.json();
    if (data.status === 'success') {
      this.fetchPersonas();
    }
  };

  eliminarPersona = async (persona_id) => {
    const response = await fetch(`http://10.0.4.105:3000/api/personas/${persona_id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${this.context.token}` }
    });
    const data = await response.json();
    if (data.status === 'success') {
      this.fetchPersonas();
    }
  };

  render() {
    return (
      <div>
        <h2>Gestión de Personas</h2>
        <PersonaForm agregarPersona={this.agregarPersona} />
        <PersonaList
          personas={this.state.personas}
          actualizarPersona={this.actualizarPersona}
          eliminarPersona={this.eliminarPersona}
        />
      </div>
    );
  }
}
