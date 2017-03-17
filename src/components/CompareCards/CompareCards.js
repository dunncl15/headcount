import React from 'react';
import Comparison from '../Comparison/Comparison'
import './CompareCards.css';

const CompareCards = ({ cards, resetCompare }) => {
  if( !cards || cards.length === 0){
    return (
      <div>
      </div>
    )
  }

  const renderCards = () => {
    const dataKeys = Object.keys(cards[0].data);
    return cards.map((card, i) => {
      return(
        <div className="county-card selected" key={ i }>
          <h3>{ card.location }</h3>
          <ul className="county-stats">
            {dataKeys.map((year, i) => {
              if (cards[0].data[year] > 0.5) {
                return (
                  <li className="stat redStat" key={i}>{ year }: { card.data[year] }</li>
                )
              }
              return (
                <li className="stat" key={i}>{ year }: { card.data[year] }</li>
              )
            })}
          </ul>
        </div>
      )
    })
  }

  return (
    <section className="compare-cards">
      <div className="compare-wrap">
      <Comparison cards={ cards } />
      { renderCards() }
      </div>
      <button className="clear-btn" onClick={ () => resetCompare() }>CLEAR COMPARISON</button>
    </section>
  )

}

export default CompareCards;
