require('./index.sass')
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root.jsx'
// import { loadState, saveState } from './localStorage';  

// const persistedState = loadState();
// const storeGame = createStore(App.state);

// storeGame.subscribe(() => {
//   saveState(storeGame.getState());
// });

const App = {
  start(){
    App.load();
    setInterval(App.tick, 1000)
    App.render();
  },

  reset(){
    delete localStorage.state
    App.load()
  },

  load(){
    App.state = localStorage.state ? 
      JSON.parse(localStorage.state) : {
      startedAt: (new Date).getTime(),
      brickCount: 0,
      ovenCount: 0,
      workerCount: 0,
      totalGameTime:0,
      alienCount: 0,
      alienTransportCount: 0,
    };
  },

  save(){
    localStorage.state = JSON.stringify(App.state);
  },  

  // startTock(){
  //   setInterval(App.tock.bind(this), 1000)
  //   App.render();
  // },

  addGameTime(){
    App.state.totalGameTime++;
    App.render();
  },

// Click Based Income
  addBrick(){
    console.log('addCookie clicked')
    App.state.brickCount++;
    App.render();
  },


// Passive Income

  addWorker(){
    console.log('Im a grandma')
    let workerCost = 20
    if(App.state.brickCount < workerCost) return;
    App.state.brickCount -= workerCost
    App.state.workerCount++;
    App.render();
  },

  addOven(){
    if (App.state.brickCount < 10) return;
    App.state.brickCount -= 10
    App.state.ovenCount++;
    App.render();
  },

  addAlien(){
    console.log('Alien')
    let alienCost = 100
    if(App.state.brickCount < alienCost ) return;
    App.state.brickCount -= alienCost
    App.state.alienCount++;
    App.render();
  },

  addAlienTransport(){
    console.log('Alien Transport')
    let alienTransportCost = 300
    if(App.state.brickCount < alienTransportCost ) return;
    App.state.brickCount -= alienTransportCost
    App.state.alienTransportCount++;
    App.render();
  },


// Time Based Income

  tick(){
    console.log('App tick')
    App.state.brickCount += (
      (App.state.ovenCount * 10) +
      (App.state.workerCount * 3) + 
      (App.state.alienCount * 15) + 
      (App.state.alienTransportCount * (App.state.alienCount * 1.2)) +
      1
    )
    App.save();
    App.render();
  },

  // tock(){
  //   console.log('App tock')
  //   App.state.totalGameTime += 1
  //   App.render();
  // },

// Multipliers



  render(){
    ReactDOM.render(<Root app={App} />, document.querySelector('main'))
  }
}

window.App = App 

App.start();

console.log('browser.js here')

