import React              from 'react';
import ReactDOM           from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import Main               from './Main';
import SchoolCard         from '../SchoolCard/SchoolCard';

describe('testing Main component', () => {

  it('main should have a default state that contains a data object, ', () => {
    const data = {
      COLORADO: {
      data: {
        2004: 0
      },
      location: 'COLORADO',
      locationData: [
        {}
      ]
    }}

    const wrapper = shallow( <Main
                              data={ data }
                              query={ 'COLORADO' }
                              /> )

    const stateOfWrapper = wrapper.state();

    expect(stateOfWrapper.data).to.be.a('object')
    expect(stateOfWrapper.cardsToCompare).to.be.a('array')
    expect(stateOfWrapper.findByName).to.be.a('function')
  })

  it('Main should contain a component called SchoolCard', () => {
    const data = {
      COLORADO: {
      data: {
        2004: 0
      },
      location: 'COLORADO',
      locationData: [
        {}
      ]
    }}

    const wrapper = shallow( <Main
                              data={ data }
                              query={ 'COLORADO' }
                              /> )

    expect(wrapper.find('SchoolCard')).to.have.length(1);
  })

  it('Main should accept schoolCard data and render a schoolcard', () => {

    const data = {
      COLORADO: {
      data: {
        2004: 0
      },
      location: 'COLORADO',
      locationData: [
        {}
      ]
    }}

    const wrapper = shallow(<Main
                              data={ data }
                              query={ 'COLORADO' }
                              />)

    const card    = wrapper.find('schoolCard')

    expect(wrapper.containsAllMatchingElements( [
      <SchoolCard />,
    ])).to.equal(true)
  })

  it('SearchCard should receive props of location, stats, and onClick ', () => {
    const data = {
      COLORADO: {
      data: {
        2004: 0
      },
      location: 'COLORADO',
      locationData: [
        {}
      ]
    }}

    const wrapper    = shallow(<Main
                                data={ data }
                                query={ 'COLORADO' }
                                />)
    const schoolcard = wrapper.find('SchoolCard')

    expect(schoolcard.props().location).to.be.a('string')
    expect(schoolcard.props().stats).to.be.a('object')
    expect(schoolcard.props().onClick).to.be.a('function')
  })
})



