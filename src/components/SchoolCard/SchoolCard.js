import React, { Component } from 'react';
import './SchoolCard.css';

class SchoolCard extends Component {
  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }

  render() {
    const keys     = Object.keys(this.props.stats);
    const location = this.props.location;
    const object   = this.props.stats;

    return (
      <div className="county-card"
        onClick={(e) => this.props.onClick(e)}>
        <h3 className="county-name">{ location }</h3>
        <ul className="county-stats">
          { keys.map((year, i) => {
            if(object[year] > 0.5){
              return (
                <li
                  className="redStat"
                  key={ i }>{ year }: <span className="data">{ object[year] }</span>
                </li>
              )
            }
            return (
              <li
                className="stat"
                key={i}>{ year }: <span className="data">{ object[year] }</span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default SchoolCard;
