import React              from 'react';
import ReactDOM           from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import Comparison         from './Comparison';
import CompareCards       from '../CompareCards/CompareCards';


describe('Testing Comparison component', () => {
  it('comparison should not render if passed no cards', () => {
    const wrapper = shallow( <Comparison  /> )
    expect(wrapper.find('div')).to.have.length(1)
  })

  it('comparison should not render if passed no cards', () => {
    const card = [{
      data: {2004: 'suh'},
      location: 'string'
    }]

    const wrapper    = shallow( <CompareCards cards={ null } /> )
    const Comparison = wrapper.find('Comparison')
    expect(Comparison).to.have.length(0)
  })

  it('comparison should render if passed cards', () => {
    const card = [{
      data: {2004: 'suh'},
      location: 'string'
    }, {
      data: {2008: 'yo'},
      location: 'whatever town'
    }
  ]
    const wrapper    = shallow( <CompareCards cards={ card } /> )
    const Comparison = wrapper.find('Comparison')
    expect(Comparison).to.have.length(1)
  })
})