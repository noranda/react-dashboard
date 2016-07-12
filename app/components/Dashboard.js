import React, { Component, PropTypes } from 'react';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materials: [
        { name: 'Copper', unit: 'LBS', value: 102458, color: '#F3A036' },
        { name: 'Plastic', unit: 'LBS', value: 79458, color: '#3DC28F' },
        { name: 'Paper', unit: 'LBS', value: 57348, color: '#13B2C1' },
        { name: 'Steel', unit: 'LBS', value: 34586, color: '#E64D1B' }
      ]
    };
  }

  componentDidMount() {
    this.chart = new Chart(this.refs.pieChart, {
      type: 'pie',
      data: {
        labels: this.state.materials.map((material) => material.name),
        datasets: [
          {
            data: this.state.materials.map((material) => material.value),
            backgroundColor: this.state.materials.map((material) => material.color)
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="dashboard-list col-sm-4 col-xs-12">
                  <div className="list-group">
                    {this.state.materials.map((material, index) => {
                      return (
                        <div key={`material-${index}`} className="list-group-item">
                          <div className="material-title">
                            <span className="dot" style={{ backgroundColor: material.color }}></span>
                            {material.name} ({material.unit})
                          </div>

                          <div className="material-value">
                            {numeral(material.value).format('0,0')}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="dashboard-chart col-sm-8 col-xs-12">
                  <div className="activity">
                    <div className="activity-label">
                      Activity from
                    </div>

                    <div>
                      <span className="activity-date">{this.props.fromDate.format('MM/DD/YYYY')} </span>
                      <span className="activity-label">to</span>
                      <span className="activity-date"> {this.props.toDate.format('MM/DD/YYYY')}</span>
                    </div>
                  </div>

                  <canvas ref="pieChart" className="pie-chart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  fromDate: PropTypes.instanceOf(moment).isRequired,
  toDate: PropTypes.instanceOf(moment).isRequired
};
