import React, { Component }     from 'react';
import Search               from '../Search/Search';
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
      findByName: district.findByName,
      cardsToCompare: []
    }
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
        cardsToCompare: temp,
      })
      card.classList.toggle('selected');
    }

    if(temp.includes(object)){

    }
  }

  render() {
    const keys = Object.keys(this.props.data);

    return (
      <section className="county-grid">
        <CompareCards cards={this.state.cardsToCompare} />
        {keys.map((key, i) => {
          if (key.includes(this.props.query.toUpperCase())) {
            return (
              <SchoolCard
                location={this.props.data[key].location}
                stats={this.props.data[key].data}
                key={i}
                onClick={this.clickDiv.bind(this)}
              />
            )
          }
        })}
      </section>
    )
  }
}


export default Main;