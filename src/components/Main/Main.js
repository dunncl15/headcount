import React from 'react';
import './Main.css';
import Search from '../Search/Search';
import SchoolCard from '../SchoolCard/SchoolCard';

const Main = ({ data, query, onClick }) => {
  const keys = Object.keys(data);

  return (
    <section className="county-grid">
      {keys.map((key, i) => {
        if (key.includes(query.toUpperCase())) {
          return (
            <SchoolCard
              location={data[key].location}
              stats={data[key].data}
              key={i}
              onClick={ onClick } />
          )
        }
      })}
    </section>
  )
}

export default Main;