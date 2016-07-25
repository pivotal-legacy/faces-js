var jsdom = require('jsdom')

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView

for (let key in global.window) {
  if (!window.hasOwnProperty(key) || (key in global)) {
    continue
  }

  global[key] = window[key]
}
