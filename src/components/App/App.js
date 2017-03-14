import React, { Component } from 'react';
import './App.css';
import DistrictRepository   from '../../helper.js';
import kinderData           from '../../../data/kindergartners_in_full_day_program.js';
import Main                 from '../Main/Main';

const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: district.data
    }
  }

  render() {
    return (
      <div>Welcome To Headcount 2.0
        <Main data={this.state.data}/>
      </div>
    );
  }
}

export default App;
