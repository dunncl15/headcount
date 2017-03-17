import React              from 'react';
import DistrictRepository from '../../helper.js';
import kinderData         from '../../../data/kindergartners_in_full_day_program.js';
import './Comparison.css';

const district = new DistrictRepository(kinderData)

const Comparison = ({ cards }) => {
  if(!cards){
    return (
      <div></div>
    )
  }
  if(cards.length === 2){
    const compare1         = cards[0].location
    const compare2         = cards[1].location
    const districtObject   = district.compareDistrictAverages(compare1, compare2);
    const keys             = Object.keys(districtObject)

    const renderComparison = () => {
      return keys.map((key, i)=> {
        return (
          <h3 key={ i }>
            { key }: { districtObject[key] }
          </h3>
        )
      })
    }
    return (
      <div className='county-card comparison'>
        <h3>COMPARISON</h3>
        { renderComparison() }
      </div>
    )
  }
  return (
    <div></div>
  )

}

export default Comparison;
