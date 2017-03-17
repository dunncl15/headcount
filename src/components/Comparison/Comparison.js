import React from 'react';
import DistrictRepository   from '../../helper.js';
import kinderData           from '../../../data/kindergartners_in_full_day_program.js';
import SchoolCard from '../SchoolCard/SchoolCard'
const district = new DistrictRepository(kinderData)


const Comparison = ({ cards }) => {
  if(cards.length === 2){
    const compare1 = cards[0].location
    const compare2 = cards[1].location

    const districtObject = district.compareDistrictAverages(compare1, compare2);
    const keys = Object.keys(districtObject)
    return (
      <div className='county-card'>
        <h3>COMPARISON</h3>
        {keys.map((key, i)=> {
          return (
            <h3 key={ i }>
              { key }: { districtObject[key] }
            </h3>
          )
        })}
      </div>
    )

  }
  return (
    <div></div>
  )

}

export default Comparison