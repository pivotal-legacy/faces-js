import React from 'react'
import expect from 'expect'
import {mount} from 'enzyme'
import LoginPage from '../src/authentication/LoginPage'

describe('LoginPage', () => {
  it('calls the onSubmit function on submit', () => {
    let onSubmit = expect.createSpy()
    let component = mount(<LoginPage onSubmit={onSubmit}/>)

    component.find('form').simulate('submit')

    expect(onSubmit).toHaveBeenCalled()
  })
})
