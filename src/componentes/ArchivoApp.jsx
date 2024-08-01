import React, { Component } from 'react';

export default class PersonaList extends Component {
  render() {
    return (
      <div>
        <h3>Lista de Personas</h3>
        <ul>
          {this.props.personas.map((persona, index) => (
            <li key={index}>
              <span>
                {persona.nombres} {persona.apellidos} - {persona.documento}
              </span>
              <button onClick={() => this.props.eliminarPersona(persona.persona_id)}>Eliminar</button>
              <button onClick={() => this.props.actualizarPersona(persona.persona_id, {
                documento: 'Nuevo Documento',
                nombres: 'Nuevo Nombre',
                apellidos: 'Nuevo Apellido',
                fechaNac: 'Nueva Fecha',
                telefono: 'Nuevo Teléfono',
                domicilio: 'Nuevo Domicilio',
                mail: 'Nuevo Email'
              })}>
                Editar
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
