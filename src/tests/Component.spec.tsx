import { mount } from 'enzyme';
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
});
