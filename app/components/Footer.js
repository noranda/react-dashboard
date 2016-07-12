import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer row">
        <div className="footer-logo col-md-4">
          <span className="footer-logo-powered-by">Powered by </span>
          <span className="footer-logo-name">React Example</span>
        </div>

        <div className="footer-nav col-md-8">
          <ul>
            <li className="active"><a href="#">Dashboard</a></li>
            <li><a href="#">Shipments</a></li>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Contracts</a></li>
            <li><a href="#">Summary</a></li>
            <li><a href="#">Bookings</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
