import React from 'react'
import LoginPage from './authentication/LoginPage'
import StudyComponent from './study/StudyComponent'
import { Router, Route, Link, hashHistory } from 'react-router'

class AppComponent extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={LoginPage}/>
        <Route path='/study' component={StudyComponent}/>
      </Router>
    )
  }
}

export default AppComponent
