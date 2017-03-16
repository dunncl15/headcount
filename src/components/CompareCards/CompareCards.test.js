import React              from 'react';
import ReactDOM           from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import CompareCards       from './CompareCards';
import DistrictRepository   from '../../helper.js';
import kinderData           from '../../../data/kindergartners_in_full_day_program.js';
const district = new DistrictRepository(kinderData)


describe('testing CompareCards component', () => {
  it('compare cards should be passed an empty array as a default prop', () => {
    const wrapper = shallow( <CompareCards  /> )
    const props   = wrapper.props()

    expect(props).to.be.a('object')
    expect(props[0]).to.equal(undefined)
  })

  it.only('compare cards should be able to accept a card to compare', () => {
    const card = district.findByName('COLORADO').data
    const wrapper = mount( <CompareCards suh={true} /> )

    console.log(wrapper.debug());

    const props   = wrapper.props()
    console.log(props);
    //
    // expect(props).to.be.a('object')
    // expect(props[0]).to.equal(undefined)
  })

  it('should not render compareCards if not passed cards to compare', () => {
    const wrapper = shallow ( <CompareCards />)

    expect(wrapper.find('.compare-cards')).length.to.be(0);
    expect(wrapper.find('.selected')).length.to.be(0);
    expect(wrapper.contains( <div></div>)).to.equal(true)
  })

  it('should not render compareCards if not passed cards to compare', () => {
    const wrapper = shallow ( <CompareCards />)

    expect(wrapper.find('.compare-cards')).length.to.be(0);
    expect(wrapper.find('.selected')).length.to.be(0);
    expect(wrapper.contains( <div></div>)).to.equal(true)
  })
})