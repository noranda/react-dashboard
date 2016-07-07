import React from 'npm:react';
import FontAwesome from 'npm:react-fontawesome';

const { Component } = React;

export default class LookupLoadNumber extends Component {
  render() {
    return (
      <div className="lookup-load-number-search">
        <div className="search input-group">
          <input type="text" className="form-control" placeholder="Lookup Load Number"></input>

          <span className="input-group-btn">
            <button className="btn btn-default" type="button">
              <FontAwesome name='search' className="search-icon"/>
            </button>
          </span>
        </div>
      </div>
    );
  }
}
