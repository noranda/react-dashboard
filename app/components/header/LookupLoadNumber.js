import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class LookupLoadNumber extends Component {
  render() {
    return (
      <div className="lookup-load-number">
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
