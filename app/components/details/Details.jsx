import React from 'npm:react';
import FontAwesome from 'npm:react-fontawesome';

const { Component } = React;
const { numeral } = window;

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      envImpactItems: [
        { name: 'Barrels of Oil', value: 3285265, icon: 'database', color: '#646F77' },
        { name: 'Trees', value: 10265195, icon: 'tree', color: '#3DC28F' },
        { name: 'Kilowatt Hours', value: 340563, icon: 'bolt', color: '#E64D1B' },
        { name: 'Tons of CO2', value: 60384, icon: 'leaf', color: '#F3A036' },
        { name: 'Gallons of Water', value: 422654, icon: 'tint', color: '#13B2C1'}
      ]
    };
  }

  render() {
    return (
      <div className="details">
        <div className="details-title">
          Environmental Impact Statement
        </div>

        <div className="details-body row">
          <div className="col-sm-1 hidden-xs"></div>

          {this.state.envImpactItems.map((item, index) => {
            return (
              <div key={`item-${index}`} className="details-body-item col-sm-2">
                <FontAwesome name={item.icon}
                             className="details-body-item-icon"
                             style={{ color: item.color }} />
                           <div className="details-body-item-value">{numeral(item.value).format('0,0')}</div>
                <div className="details-body-item-name">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
