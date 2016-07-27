require('es6-promise').polyfill()
require('isomorphic-fetch')

export default class SessionRepo {
  create(username, password) {
    const authentication = btoa(`${username}:${password}`)
    const headers = {
      'Authorization': `Basic ${authentication}`
    }
    return fetch('http://localhost:8080/api/session', {headers: headers})
      .then(response => {
        localStorage.setItem('token', response.headers.get('x-auth-token'))
      })
  }

}
