import React, { Component } from 'react';

const CompareCards = ({ cards }) => {
  if(cards.length === 0 || !cards){
    return (
      <div>
        no cards.
      </div>
    )
  } else {
    console.log(cards)
  }
  return (
    <div>

    </div>
  )
}



export default CompareCards;