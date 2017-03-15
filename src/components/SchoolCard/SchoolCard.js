import React from 'react';

const SchoolCard = ({ location, stats }) => {
  const keys = Object.keys(stats);
  return (
    <div className="county-card">
      <h3 className="county-name">{location}</h3>
      <ul className="county-stats">
      {keys.map((stat, i) => {
        return (
          <li className="stat" key={i}>{ stat }: {stats[stat]}</li>
        )
      })}
      </ul>
    </div>
  )
}

export default SchoolCard;
