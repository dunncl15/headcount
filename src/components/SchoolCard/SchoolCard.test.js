import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import SchoolCard from './SchoolCard';

describe.skip('testing SchoolCard component', () => {

  it('SchoolCard should render without crashing', () => {
    const wrapper = shallow(<SchoolCard />)
    console.log(wrapper.debug());
  })
})



