import React, { Component } from 'react';
import PersonaForm from './PersonaForm';
import PersonaList from './ArchivoApp';
import AuthContext from '../componentes/AuthContext';
import axios from 'axios';

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
    try {
      const response = await axios.get('https://personas.ctpoba.edu.ar/api/personas', {
        headers: { 'Authorization': `Bearer ${this.context.token}` }
      });
      this.setState({ personas: response.data.personas });
    } catch (error) {
      console.error("Error fetching personas:", error);
    }
  };

  agregarPersona = async (persona) => {
    try {
      const response = await axios.post('https://personas.ctpoba.edu.ar/api/personas', persona, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.context.token}`
        }
      });
      if (response.data.status === 'success') {
        this.fetchPersonas();
      }
    } catch (error) {
      console.error("Error adding persona:", error);
    }
  };

  actualizarPersona = async (persona_id, personaActualizada) => {
    try {
      const response = await axios.put(`https://personas.ctpoba.edu.ar/api/personas/${persona_id}`, personaActualizada, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.context.token}`
        }
      });
      if (response.data.status === 'success') {
        this.fetchPersonas();
      }
    } catch (error) {
      console.error("Error updating persona:", error);
    }
  };

  eliminarPersona = async (persona_id) => {
    try {
      const response = await axios.delete(`https://personas.ctpoba.edu.ar/api/personas/${persona_id}`, {
        headers: { 'Authorization': `Bearer ${this.context.token}` }
      });
      if (response.data.status === 'success') {
        this.fetchPersonas();
      }
    } catch (error) {
      console.error("Error deleting persona:", error);
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
