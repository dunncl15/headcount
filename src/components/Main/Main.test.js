import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import Main from './Main';

describe.skip('testing Main component', () => {

  it('Main should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main />, div);
  })  

  it('Main should contain a component called SchoolCard', () => {
    const wrapper = shallow( <Main /> )
    expect(wrapper.find('SchoolCard')).to.have.length(1);
  })
})
