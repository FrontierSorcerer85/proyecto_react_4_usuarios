import React, { Component } from 'react';
import './App.css';
import { AuthProvider, AuthConsumer } from './componentes/AuthContext';
import Registro from './componentes/Registro';
import Login from './componentes/Login';
import GestorPersonas from './componentes/GestorPersonas';

export default class App extends Component {
  render() {
    return (
      <AuthProvider>
        <AuthConsumer>
          {({ user }) => (
            <div className="App">
              {!user ? (
                <>
                  <Registro />
                  <Login />
                </>
              ) : (
                <GestorPersonas />
              )}
            </div>
          )}
        </AuthConsumer>
      </AuthProvider>
    );
  }
}
