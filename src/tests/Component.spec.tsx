import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import Component from '..';

let method: jest.SpyInstance<void, []>;

describe('Component', () => {
  beforeEach(() => {
    if (method) {
      method.mockClear();
    }
  });

  it('renders without crashing', () => {
    method = jest.spyOn(Component.prototype, 'componentDidMount');
    const wrapper = mount<Component>(<Component />);
    expect(method).toHaveBeenCalledTimes(1);
    expect(wrapper.state().data).toEqual([]);
  });

  it('matches the snapshot', () => {
    const wrapper = shallow<Component>(<Component />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
