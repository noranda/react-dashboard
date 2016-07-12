import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

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
