import React from 'react'
import {render} from 'react-dom'
import AppComponent from './AppComponent'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <AppComponent />, document.getElementById("app")
)
