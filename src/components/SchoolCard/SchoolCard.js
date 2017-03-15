import React from 'react';
import './SchoolCard.css';

const SchoolCard = ({ location, stats, onClick }) => {
  const keys = Object.keys(stats);

  return (
    <div
      className="county-card"
      onClick={(e) => onClick(e)}>
      <h3 className="county-name">{location}</h3>
      <ul className="county-stats">
        {keys.map((stat, i) => {
          if(stats[stat] > 0.5){
            return (
              <li
                className="redStat"
                key={ i }>{ stat }: {stats[stat]}</li>
            )
          }
          return (
            <li
              className="stat"
              key={i}>{ stat }: {stats[stat]}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default SchoolCard;
