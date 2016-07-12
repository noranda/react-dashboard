import React, { Component } from 'react';

import Header from './header/Header';
import Nav from './Nav';
import Filter from './filter/Filter';
import Dashboard from './dashboard/Dashboard';
import Details from './details/Details';

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
        <div className="visible-xs-block">
          <Nav />
        </div>
        <Header />
        <div className="hidden-xs">
          <Nav />
        </div>
        <Filter fromDate={this.state.fromDate} toDate={this.state.toDate} onFilterChange={this.filterChangedFn} />
        <Dashboard fromDate={this.state.fromDate} toDate={this.state.toDate} />
        <Details />
      </div>
    );
  }
}
