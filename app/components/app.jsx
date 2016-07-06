import React from 'npm:react';

import Header from './header/Header';
import Nav from './Nav';

const { Component } = React;

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
      </div>
    );
  }
}
