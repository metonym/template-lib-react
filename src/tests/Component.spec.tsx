import { mount } from 'enzyme';
import * as React from 'react';
import Component from '..';

describe('Component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Component />);
    expect(wrapper.isEmptyRender()).toEqual(true);
  });
});
