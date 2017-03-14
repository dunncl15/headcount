import React from 'react';
import SchoolCard from '../SchoolCard/SchoolCard';

const Main = ({ data }) => {

  return (
    <div>
      <SchoolCard data={data} />
    </div>
  )
}

export default Main;
