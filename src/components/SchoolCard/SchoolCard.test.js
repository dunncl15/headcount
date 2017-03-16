import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import Main from '../Main/Main'
import SchoolCard from './SchoolCard';

describe('testing SchoolCard component', () => {

  it('SchoolCard should render without crashing', () => {
    const wrapper = shallow(<SchoolCard />);
    const expectedState = {
      clicked: false
    }
    expect(wrapper.state()).to.equal(expectedState);

  });

})
