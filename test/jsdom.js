var jsdom = require('jsdom')

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView
global.window.localStorage = {
    store: new Map(),
    getItem: function (key) {
        return this.store[key];
    },
    setItem: function (key, value) {
        this.store[key] = value;
    },
    removeItem: function (key) {
        delete this.store[key];
    },
    clear: function() {
        this.store.clear()
    }
};

for (let key in global.window) {
  if (!window.hasOwnProperty(key) || (key in global)) {
    continue
  }

  global[key] = window[key]
}
