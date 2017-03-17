import React              from 'react';
import ReactDOM           from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import App                from '../App/App';
import SchoolCard         from '../SchoolCard/SchoolCard';
import Search             from './Search';

describe('search component tests', () => {
  it('should have a className of search-field', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find('.search-field').length).to.equal(1);
  });

  it('should update value on keypress', () => {
    const wrapper = mount(<App />);
    const input   = wrapper.find('input');

    input.simulate('change', { target: { value: 'COLORADO' } });
    expect(wrapper.state().searchQuery).to.equal('COLORADO');
  });

  it('should render the school cards that match searchQuery', () => {
    const wrapper = mount(<App />);
    const main    = wrapper.find('.county-grid');
    const input   = wrapper.find('input');
    input.simulate('change', { target: { value: 'COLORADO' } });

    expect(main.containsAllMatchingElements([
      <SchoolCard />,
      <SchoolCard />
    ])).to.equal(true);
  })
})
