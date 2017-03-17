import React              from 'react';
import ReactDOM           from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import Main               from './Main';
import SchoolCard         from '../SchoolCard/SchoolCard';
import CompareCards       from '../CompareCards/CompareCards';

describe('testing Main component', () => {

  it('main should have a default state that contains a data object, ', () => {
    const wrapper = shallow( <Main
                              query={ 'COLORADO' }
                              /> )

    const stateOfWrapper = wrapper.state();

    expect(stateOfWrapper.data).to.be.a('object')
    expect(stateOfWrapper.cardsToCompare).to.be.a('array')
    expect(stateOfWrapper.findByName).to.be.a('function')
  })

  it('Main should contain a component called SchoolCard', () => {
    const wrapper = shallow( <Main
                              query={ 'COLORADO' }
                              /> )

    expect(wrapper.find('SchoolCard')).to.have.length(2);
  })

  it('Main should accept schoolCard data and render a schoolcard', () => {

    const wrapper = shallow(<Main
                              query={ 'COLORADO' }
                              />)

    const card    = wrapper.find('schoolCard')

    expect(wrapper.containsAllMatchingElements( [
      <SchoolCard />,
    ])).to.equal(true)
  })

  it('SearchCard should receive props of location, stats, and onClick ', () => {
    const wrapper    = mount(<Main
                                query={ 'COLORADO' }
                                />)
    const schoolcard = wrapper.find('SchoolCard').first()

    expect(schoolcard.props().location).to.be.a('string')
    expect(schoolcard.props().stats).to.be.a('object')
    expect(schoolcard.props().handleClick).to.be.a('function')
  })

  it('schoolCard should be clickable and update class and state ', () => {
    const wrapper         = mount( <Main query={ 'COLORADO' } /> )
    const schoolcard      = wrapper.find('SchoolCard')
    const divToClick      = wrapper.find('.county-card').first()
    const otherDivToClick = wrapper.find('.county-card').last()

    divToClick.simulate('click')
    expect(wrapper.find('.selected').length).to.equal(2)
    otherDivToClick.simulate('click')
    expect(wrapper.find('.selected').length).to.equal(4)
  })
})



