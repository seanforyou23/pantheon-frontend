import React from 'react';
import Index from '@app/index';

import { mount, shallow } from 'enzyme';
import { Label } from '@patternfly/react-core';

describe('App tests', () => {
  test('should render default App component', () => {
    const view = shallow(<Index />);
    expect(view).toMatchSnapshot();
  });

  it('should render a search Label', () => {
    const wrapper = mount(<Index />);
    const button = wrapper.find(Label);
    expect(button.exists()).toBe(true)
  });

});
