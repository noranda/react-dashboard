import React from 'npm:react';

import LookupLoadNumber from './LookupLoadNumber';
import UserSession from './UserSession';

const { Component } = React;

export default class Header extends Component {
  render() {
    return (
      <header className="row dashboard-header">
        <div className="col-sm-5 col-sm-offset-1 col-sm-push-6 col-xs-12">
          <UserSession />
        </div>
        <div className="col-sm-4 col-sm-offset-2 col-sm-pull-6 col-xs-12">
          <LookupLoadNumber />
        </div>
      </header>
    );
  }
}
