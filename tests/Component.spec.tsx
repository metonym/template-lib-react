import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import Component from '../src/Component';

describe('Component', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Component />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
