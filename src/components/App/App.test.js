import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import App from './App';

describe.skip('testing App component', () => {

  it('App should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  })

  it('App should contain a component called Main', () => {
    const wrapper = shallow( <App /> )
    expect(wrapper.find('Main')).to.have.length(1);
  })

  it('App should have a default state data that is an object ', () => {
    const wrapper        = shallow( <App /> );
    const stateOfWrapper = wrapper.state();

    expect(stateOfWrapper.data).to.be.a('object')
  })
})



