import React              from 'react';
import ReactDOM           from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import CompareCards       from './CompareCards';
import Main               from '../Main/Main';
import DistrictRepository from '../../helper.js';
import kinderData         from '../../../data/kindergartners_in_full_day_program.js';

describe.skip('testing CompareCards component', () => {
  it('compare cards should be passed an empty array as a default prop', () => {
    const wrapper = shallow( <CompareCards  /> )
    const props   = wrapper.props()

    expect(props).to.be.a('object')
    expect(props[0]).to.equal(undefined)
  })

  it('compare cards should be able to accept a card to compare and render it', () => {
    const card = [{
      data: {2004: 'suh'},
      location: 'string'
    }]

    const wrapper = shallow( <CompareCards cards={card}/> )
    const props   = wrapper.props()
    expect(wrapper.find('.compare-cards').length).to.equal(1)
    expect(wrapper.find('.county-card.selected').length).to.equal(1)
  })

  it('compare cards should be able to accept two cards to compare and render them', () => {
    const card = [{
      data: {2004: 'suh'},
      location: 'string'
    }, {
      data: {2008: 'yo'},
      location: 'whatever town'
    }
  ]

    const wrapper = shallow( <CompareCards cards={card}/> )
    const props   = wrapper.props()
    expect(wrapper.find('.compare-cards').length).to.equal(1)
    expect(wrapper.find('.county-card.selected').length).to.equal(2)
  })

  it('should not render compareCards if not passed cards to compare', () => {
    const wrapper = shallow ( <CompareCards />)

    expect(wrapper.find('.compare-cards')).length.to.be(0);
    expect(wrapper.find('.selected')).length.to.be(0);
    expect(wrapper.contains( <div></div>)).to.equal(true)
  })
})