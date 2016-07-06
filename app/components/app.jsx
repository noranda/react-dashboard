import React from 'npm:react';

import Header from './header/Header';
import Nav from './Nav';
import Filter from './filter/Filter';
import Dashboard from './dashboard/Dashboard';

const { Component } = React;
const { moment } = window;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDate: moment(),
      fromDate: moment()
    };
    this.filterChangedFn = this.filterChanged.bind(this);
  }

  filterChanged(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Filter fromDate={this.state.fromDate} toDate={this.state.toDate} onFilterChange={this.filterChangedFn} />
        <Dashboard fromDate={this.state.fromDate} toDate={this.state.toDate} />
      </div>
    );
  }
}
