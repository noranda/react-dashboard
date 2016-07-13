import React, { Component } from 'react';

import LookupLoadNumber from './LookupLoadNumber';
import UserSession from './UserSession';

export default class Header extends Component {
  render() {
    return (
      <header className="row header">
        <div className="col-md-5 col-md-offset-1 col-md-push-6">
          <UserSession />
        </div>

        <div className="col-md-4 col-md-offset-2 col-md-pull-6">
          <LookupLoadNumber />
        </div>
      </header>
    );
  }
}
