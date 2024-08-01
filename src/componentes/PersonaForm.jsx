import React, { Component } from 'react';

export default class PersonaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documento: '',
      nombres: '',
      apellidos: '',
      fechaNac: '',
      telefono: '',
      domicilio: '',
      mail: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.agregarPersona(this.state);
    this.setState({
      documento: '',
      nombres: '',
      apellidos: '',
      fechaNac: '',
      telefono: '',
      domicilio: '',
      mail: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="documento" placeholder="Documento" onChange={this.handleChange} />
        <input name="nombres" placeholder="Nombres" onChange={this.handleChange} />
        <input name="apellidos" placeholder="Apellidos" onChange={this.handleChange} />
        <input name="fechaNac" placeholder="Fecha de Nacimiento" onChange={this.handleChange} />
        <input name="telefono" placeholder="Teléfono" onChange={this.handleChange} />
        <input name="domicilio" placeholder="Domicilio" onChange={this.handleChange} />
        <input name="mail" placeholder="Email" onChange={this.handleChange} />
        <button type="submit">Agregar Persona</button>
      </form>
    );
  }
}
