import React              from 'react';
import ReactDOM           from 'react-dom';
import { shallow, mount } from 'enzyme';
import sinon              from 'sinon';
import Main               from '../Main/Main'
import SchoolCard         from './SchoolCard';

describe('testing SchoolCard component', () => {

  it('SchoolCard should render', () => {
    const data = {2004: 0, 2005: 0.006, 2006: 0, 2007: 0, 2008: 0, 2009: 1, 2010: 1, 2011: 1, 2012: 1, 2013: 1, 2014: 1}

    const wrapper = shallow( <SchoolCard stats={ data } /> )
    expect(wrapper.find('ul').length).toEqual(1)
    expect(wrapper.find('.county-card').length).toEqual(1)
    expect(wrapper.find('li').length).toEqual(11)
  })

  it.skip('SchoolCards should be clickable and change class on click', () => {

    const data = {COLORADO: {
      data: {
        2004: 0
      },
      location: 'COLORADO',
      locationData: [
        {}
      ]
    }}

    const card = {
      data: {2004: 'suh'},
      location: 'string'
    }

    sinon.spy(Main.prototype, 'clickDiv')

    const wrapper = mount( <Main data={ data } query={ 'COLORADO' } /> )

    let state = wrapper.state().cardsToCompare = [card]


    console.log(state);

    const divToClick = wrapper.find('.county-card')
    console.log(wrapper.state().cardsToCompare);
    divToClick.simulate('click')

    expect(Main.prototype.clickDiv.calledOnce).to.equal(true)
  })

  it('fires clickDiv function and updates state', () => {
    const mockedSubmit = jest.fn();

    const data         = {
                          2004: 0,
                          2005: 0.006,
                          2006: 0,
                          2007: 0,
                          2008: 0,
                          2009: 1,
                          2010: 1,
                          2011: 1,
                          2012: 1,
                          2013: 1,
                          2014: 1
                        }

    const wrapper    = mount( <SchoolCard stats={ data } onClick={ mockedSubmit }/> )
    const divToClick = wrapper.find('.county-card')
    divToClick.simulate('click')

    expect(mockedSubmit).toHaveBeenCalledTimes(1)
  })
})
