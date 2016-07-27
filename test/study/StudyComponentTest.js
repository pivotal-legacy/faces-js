import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import StudyComponent from '../../src/study/StudyComponent'
import CardComponent from '../../src/study/CardComponent'

describe('StudyComponent', () => {
  it('renders a card', () => {
    const component = shallow(<StudyComponent />)

    expect(component.contains(<CardComponent />)).toBe(true)
  })
})
