require('./index.sass')
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root.jsx'

const App = {
  state: {
    cookieCount: 0,
    ovenCount: 0,
    grandmaCount: 0,
    totalGameTime:0,
  },

  start(){
    setInterval(App.tick.bind(this), 1000)
    App.render();
  },

  // startTock(){
  //   setInterval(App.tock.bind(this), 1000)
  //   App.render();
  // },

  addCookie(){
    console.log('addCookie clicked')
    App.state.cookieCount++;
    App.render();
  },

  addGrandma(){
    console.log('Im a grandma')
    if(App.state.cookieCount < 20) return;
    App.state.cookieCount -= 20
    App.state.ovenCount++;
    App.state.grandmaCount++;
    App.render();
  },

    addGameTime(){
    console.log('GAME TIME')
    App.state.totalGameTime++;
    App.render();
  },

  addOven(){
    if (App.state.cookieCount < 10) return;
    App.state.cookieCount -= 10
    App.state.ovenCount++;
    App.render();
  },

  tick(){
    console.log('App tick')
    App.state.cookieCount += (
      (App.state.ovenCount * 10) +
      (App.state.grandmaCount * 3) +
      1
    )
    App.render();
  },

  tock(){
    console.log('App tock')
    App.state.totalGameTime += 1
    App.render();
  },


  render(){
    ReactDOM.render(<Root app={App} />, document.querySelector('main'))
  }
}

App.start();

console.log('browser.js here')

