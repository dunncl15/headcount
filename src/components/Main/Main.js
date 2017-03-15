import React from 'react';
import './Main.css';
import SchoolCard from '../SchoolCard/SchoolCard';

const Main = ({ data }) => {
  const keys = Object.keys(data);
  return (
    <section className="county-grid">
    {keys.map((key, i) => {
      console.log(data[key]);
      return (
        <SchoolCard location={data[key].location} stats={data[key].data} key={i} />
      )
    })}
    </section>
  )
}

export default Main;
