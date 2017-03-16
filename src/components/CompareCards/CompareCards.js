import React, { Component } from 'react';
import './CompareCards.css'

const CompareCards = ({ cards }) => {
  if(cards.length === 0 || !cards){
    return (
      <div>
        no cards.
      </div>
    )
  } else {

  const dataKeys = Object.keys(cards[0].data);
  return (
    <section className="compare-cards">
      {cards.map((card, i) => {
        return(
          <div className="county-card selected" key={i}>
            <h3>{card.location}</h3>
            <ul className="county-stats">
            {dataKeys.map((year, i) => {
              return (
                <li key={i}>{ year }: {card.data[year]}</li>
              )
            })}
            </ul>
          </div>
        )
      })}
    </section>
    )
  }
}

export default CompareCards;
