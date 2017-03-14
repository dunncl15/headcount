import React, { Component } from 'react';
import './App.css';
import DistrictRepository   from '../../helper.js';
import kinderData           from '../../../data/kindergartners_in_full_day_program.js';
import Main                 from '../Main/Main';

const district = new DistrictRepository(kinderData)

class App extends Component {
  render() {
    return (
      <div>Welcome To Headcount 2.0
        <Main />
      </div>
    );
  }
}

export default App;
