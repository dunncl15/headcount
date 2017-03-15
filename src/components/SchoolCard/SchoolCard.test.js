import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import SchoolCard from './SchoolCard';

describe('testing SchoolCard component', () => {

  it('SchoolCard should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SchoolCard />, div);
  })
})



