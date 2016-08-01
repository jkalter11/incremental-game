require('./index.sass')
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root.jsx'

const App = {
  state: {
    cookieCount: 0,
    ovenCount: 0,
  },

  start(){
    setInterval(App.tick.bind(this), 1000)
    App.render();
  },

  addCookie(){
    console.log('addCookie clicked')
    App.state.cookieCount++;
    App.render();
  },

  addOven(){
    if (App.state.cookieCount < 100) return;
    App.state.cookieCount -= 100
    App.state.ovenCount++;
    App.render();
  },

  tick(){
    console.log('App tick')
    App.state.cookieCount += (
      (App.state.ovenCount * 10) +
      1
    )
    App.render();
  },

  render(){
    ReactDOM.render(<Root app={App} />, document.querySelector('main'))
  }
}

App.start();

console.log('browser.js here')

