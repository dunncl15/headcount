import React, { Component } from 'react';
import './App.css';
import DistrictRepository   from '../../helper.js';
import kinderData           from '../../../data/kindergartners_in_full_day_program.js';
import Main                 from '../Main/Main';
import Search               from '../Search/Search';

const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: district.data,
      searchQuery: ''
    }
  }

  handleChange(e) {
    this.setState({
      searchQuery: e.target.value
    });
  }

  clickDiv(e){
    console.log(e.target);
  }

  render() {
    return (
      <section>
        <header>
          <h1 className="app-title">Welcome To Headcount 2.0</h1>
          <Search onChange={this.handleChange.bind(this)} />
        </header>
        <Main
          data={this.state.data}
          query={this.state.searchQuery}
          onClick={ this.clickDiv.bind(this)}
          />
      </section>
    );
  }
}

export default App;
