import React, { Component } from 'react';
import SchoolCard           from '../SchoolCard/SchoolCard';
import CompareCards         from '../CompareCards/CompareCards';
import DistrictRepository   from '../../helper.js';
import kinderData           from '../../../data/kindergartners_in_full_day_program.js';
import './Main.css';

const district = new DistrictRepository(kinderData)

class Main extends Component {
  constructor() {
    super()
    this.state = {
      data: district.data,
      functions: district,
      findByName: district.findByName,
      cardsToCompare: []
    }
  }

  clickDiv(e, location){
    const card     = e.target
    const object   = this.state.findByName(location);
    const temp     = this.state.cardsToCompare;
    temp.push(object);

    if(temp.length < 3) {
      this.setState({
        cardsToCompare: temp,
      })
      card.classList.toggle('selected');
    }
  }

  renderSchoolCards = () => {
    const keys = Object.keys(this.state.data);
    return keys.map((key, i) => {
      if (key.includes(this.props.query.toUpperCase())) {
        return (
          <SchoolCard
            location={ this.state.data[key].location }
            stats={ this.state.data[key].data }
            key={ i }
            handleClick={ this.clickDiv.bind(this) }
          />
        )
      }
    })
  }

  resetState() {
    this.setState({
      cardsToCompare: []
    })
  }

  render() {
    return (
      <section className="county-grid">
        <CompareCards
          cards={ this.state.cardsToCompare }
          resetCompare={this.resetState.bind(this)} />
        <div className="card-grid">
        {this.renderSchoolCards()}
        </div>
      </section>
    )
  }
}


export default Main;
