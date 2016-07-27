import React from 'react'
import expect from 'expect'
import nock from 'nock'

import SessionRepo from '../src/authentication/SessionRepo'

describe('SessionRepo', () => {
  afterEach(() => {
    nock.cleanAll()
    localStorage.clear()
  })

  it('saves the token to local storage and redirects to the study page following a succesful session fetch', () => {
    
    nock('http://localhost:8080')
      .matchHeader('Authorization', (val) => val == 'Basic ' + btoa('username:password'))
      .get('/api/session')
      .reply(200, {}, {
        'x-auth-token': 'session-token'
      })

    new SessionRepo().create('username', 'password')
    .then(() => {
      expect(nock.isDone()).toEqual(true)
      expect(localStorage.getItem('token')).toEqual('session-token')
    })
  })
})
