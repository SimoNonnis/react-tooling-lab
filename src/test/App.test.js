import React from 'react';
import { describe, beforeEach, it, expect } from 'jest';
import { shallow } from 'enzyme';

import App from '../components/App';

describe('Component: <App/>', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  it('should render an `h1`', () => {
    expect(
      wrapper.containsMatchingElement(<h1>React + Webpack Boilerplate</h1>)
    ).toBe(true)
  })

})
