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
      <section>
        <header>
          <h1 className="app-title">Welcome To Headcount 2.0</h1>
        </header>  
        <Main data={this.state.data}/>
      </section>
    );
  }
}

export default App;
