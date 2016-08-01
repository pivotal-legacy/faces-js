import React from 'react'
import { shallow, mount } from 'enzyme'
import expect from 'expect'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import StudyComponent from '../../src/study/StudyComponent'
import CardComponent from '../../src/study/CardComponent'

describe('StudyComponent', () => {
  it('renders a card', () => {
    const component = shallow(<StudyComponent createNewCard={() => {}}/>)

    expect(component.contains(<CardComponent />)).toBe(true)
  })
  it('renders a Floating Action Button', () => {
    const handler = expect.createSpy()
    const component = shallow(<StudyComponent createNewCard={handler}/>)
    component.find('FloatingActionButton').simulate('click')
    expect(handler).toHaveBeenCalled()
  })
})
