import React, { Component, createContext } from 'react';

const AuthContext = createContext();

export class AuthProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      token: null,
      login: this.login,
      logout: this.logout
    };
  }

  login = (user, token) => {
    this.setState({ user, token });
  };

  logout = () => {
    this.setState({ user: null, token: null });
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const AuthConsumer = AuthContext.Consumer;
export default AuthContext;
