import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import reducer from './'
import LoginPage from './authentication/LoginPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import StudyComponent from './study/StudyComponent'
import thunkMiddleware from 'redux-thunk'
import { Router, Route, Link, hashHistory } from 'react-router'

let store = createStore(
  () => {},
  applyMiddleware(thunkMiddleware)
)

class AppComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router history={hashHistory}>
            <Route path='/' component={LoginPage}/>
            <Route path='/study' component={StudyComponent}/>
          </Router>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default AppComponent
