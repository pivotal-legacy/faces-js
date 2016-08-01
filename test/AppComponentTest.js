import React from 'react'
import { shallow } from 'enzyme'
import AppComponent from '../src/AppComponent'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

describe('AppComponent', () => {
  it('does not generate errors', () => {
    const component = shallow(<AppComponent />)
  })
})
