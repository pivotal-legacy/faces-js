import React from 'react'
import {shallow} from 'enzyme'
import CardComponent from '../../src/study/CardComponent'

describe('CardComponent', () => {
  it('renders card with given props', () => {
    const component = shallow(<CardComponent />)
  })
})
