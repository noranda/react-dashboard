import React from 'npm:react';
import FontAwesome from 'npm:react-fontawesome';

const { Component } = React;

export default class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar-collapse-1"
                    aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse-1">
            <ul className="nav nav-justified">
              <li className="active"><a href="#"><FontAwesome name="bar-chart" /> Dashboard</a></li>
              <li><a href="#"><FontAwesome name="anchor" /> Shipments</a></li>
              <li><a href="#"><FontAwesome name="usd" /> Payments</a></li>
              <li><a href="#"><FontAwesome name="file-text-o" /> Contracts</a></li>
              <li><a href="#"><FontAwesome name="file-o" /> Summary</a></li>
              <li><a href="#"><FontAwesome name="calendar" /> Bookings</a></li>
            </ul>
          </div>
        </nav>
    );
  }
}
