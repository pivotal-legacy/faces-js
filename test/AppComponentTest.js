import React from 'react'
import { shallow } from 'enzyme'
import AppComponent from '../src/AppComponent'

describe('AppComponent', () => {
  it('does not generate errors', () => {
    const component = shallow(<AppComponent />)
  })
})
