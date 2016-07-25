import React from 'react'
import {render} from 'react-dom'
import LoginPage from './authentication/LoginPage'

render(
  <LoginPage onSubmit={() => {}}/>, document.getElementById("app"))
