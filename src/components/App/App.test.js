import React              from 'react';
import ReactDOM           from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import App                from './App';


describe('testing App component', () => {
  it('App should render', () => {
    const wrapper = shallow ( <App />)

    expect(wrapper.contains(
      <h1 className="app-title">
        Welcome To Headcount 2.0
      </h1>))
      .to.equal(true);

    expect(wrapper.find('Main')).to.have.length(1)
    expect(wrapper.find('Search')).to.have.length(1)
  })

  it('App should render a component called Main', () => {
    const wrapper = shallow ( <App />)
    expect(wrapper.find('Main')).to.have.length(1)
  })

  it('Main should receive props of data and query', () => {
    const wrapper = shallow ( <App />)
    const main    = wrapper.find('Main')

    expect(main).to.have.length(1)
    expect(main.props().data).to.be.a('object')
    expect(main.props().query).to.be.a('string')
  })

  it('App should render a component called Search', () => {
    const wrapper = shallow ( <App />)

    expect(wrapper.find('Search')).to.have.length(1)
  })

  it('Search should be passed handleChange function as a prop', () => {
    const wrapper = shallow ( <App />)
    const search  = wrapper.find('Search')

    expect(search).to.have.length(1)
    expect(search.props().onChange).to.be.a('function')
  })

  it('App should have a default state data that is an object ', () => {
    const wrapper        = shallow( <App /> );
    const stateOfWrapper = wrapper.state();

    expect(stateOfWrapper.data).to.be.a('object')
  })

  it('App should have a default state searchQuery that is an empty string ', () => {
    const wrapper        = shallow( <App /> );
    const stateOfWrapper = wrapper.state();

    expect(stateOfWrapper.searchQuery).to.be.a('string')
    expect(stateOfWrapper.searchQuery).to.have.length(0)
  })

})



