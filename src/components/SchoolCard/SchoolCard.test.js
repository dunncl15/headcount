import React              from 'react';
import ReactDOM           from 'react-dom';
import { shallow, mount } from 'enzyme';
import sinon              from 'sinon';
import Main               from '../Main/Main'
import SchoolCard         from './SchoolCard';

describe('testing SchoolCard component', () => {

  it('SchoolCard should render', () => {
    const data = { 2004: 0, 2005: 0.006, 2006: 0, 2007: 0, 2008: 0, 2009: 1, 2010: 1, 2011: 1, 2012: 1, 2013: 1, 2014: 1 }

    const wrapper = shallow( <SchoolCard stats={ data } /> )
    expect(wrapper.find('ul').length).toEqual(1)
    expect(wrapper.find('.county-card').length).toEqual(1)
    expect(wrapper.find('li').length).toEqual(11)
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

    const wrapper    = mount( <SchoolCard stats={ data } handleClick={ mockedSubmit }/> )
    const divToClick = wrapper.find('.county-card').last()
    divToClick.simulate('click')

    expect(mockedSubmit).toHaveBeenCalledTimes(1)
  })
})
