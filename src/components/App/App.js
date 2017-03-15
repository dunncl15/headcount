import React, { Component } from 'react';
import DistrictRepository   from '../../helper.js';
import kinderData           from '../../../data/kindergartners_in_full_day_program.js';
import Main                 from '../Main/Main';
import Search               from '../Search/Search';
import CompareCards         from '../CompareCards/CompareCards';
import './App.css';

const district = new DistrictRepository(kinderData)
class App extends Component {
  constructor() {
    super()
    this.state = {
      data: district.data,
      searchQuery: '',
      findByName: district.findByName,
      cardsToCompare: []
    }
  }

  handleChange(e) {
    this.setState({
      searchQuery: e.target.value
    });
  }

  clickDiv(e){
    const card     = e.target;
    const title    = card.querySelector('.county-name');
    const titleVal = title.innerText;
    const object   = this.state.findByName(titleVal);
    const temp     = this.state.cardsToCompare;
    temp.push(object);

    if(temp.length < 3) {
      this.setState({
        cardsToCompare: temp
      })
      card.classList.toggle('selected');
    }
    if(temp.includes(object)){
      console.log('fdsfdsf');
    }
  }

  render() {
    return (
      <section>
        <header>
          <h1 className="app-title">Welcome To Headcount 2.0</h1>
          <Search
            onChange={this.handleChange.bind(this)} />
        </header>
        <CompareCards data={this.state.data}/>
        <Main
          data={this.state.data}
          query={this.state.searchQuery}
          onClick={this.clickDiv.bind(this)}
          />
      </section>
    );
  }
}

export default App;
