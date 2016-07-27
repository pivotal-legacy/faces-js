import React from 'react'
import expect from 'expect'
import {mount, shallow} from 'enzyme'
import {createStore} from 'redux'
import LoginPage from '../src/authentication/LoginPage'
import SessionRepo from '../src/authentication/SessionRepo'

describe('LoginPage', () => {
  it('uses default repo when none is provided', () => {
    const component = shallow(<LoginPage/>)

    expect(component.instance().props.repo).toEqual(new SessionRepo())
  })

  it('calls session repo create function on submit', () => {
    const repo = {
      create: () => {}
    }
    const spy = expect.spyOn(repo, 'create')
    const component = mount(<LoginPage repo={repo}/>)

    component.find('input').get(0).value = 'email@example.org';
    component.find('input').get(1).value = 'pa$$wr0d';
    component.find('button').simulate('submit')

    expect(spy).toHaveBeenCalledWith('email@example.org', 'pa$$wr0d')
  })

  it('onSubmit prevents default form submission behavior', () => {
    const event = {
      preventDefault: () => {}
    }
    const spy = expect.spyOn(event, 'preventDefault')
    const component = mount(<LoginPage />)

    component.instance().onSubmit(event)

    expect(spy).toHaveBeenCalled()
  })
})
