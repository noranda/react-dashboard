import React from 'npm:react';
import FontAwesome from 'npm:react-fontawesome';

const { Component } = React;

export default class UserSession extends Component {
  render() {
    return (
      <div className="user-session">
        <span>Welcome, 56th Warehouse Company</span>
        <FontAwesome name='power-off' className="user-session-icon" />
      </div>
    );
  }
}
