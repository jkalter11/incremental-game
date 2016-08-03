require('./index.sass')
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root.jsx'


const App = {
  start(){
    App.load();
    setInterval(App.tick, 1000)
    App.render();
  },

  employees() {
    return [{
      title: 'Basic Worker',
      cost: 20,
      costIncrease: 1.5,
      totalNumber: App.state.workerCount,
      productionRate: '3 bricks per second',
      desc: 'Solid, sturdy and dependable, these workers are your bread and butter.',
      img: 'TBD'
      }, 
     
     {
      title: 'Alien Worker',
      cost: 100,
      costIncrease: 1.5,
      totalNumber: App.state.alienCount,
      productionRate: '15 bricks per second',
      desc: 'Once the aliens realized what an amazing builder-of-things you were, some decided to come help you.',
      img: 'TBD'
      }

    ]},

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
      employees: []
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
    console.log('Hire a worker')
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
    App.state.employees = App.employees()
    App.save();
    App.render();
  },


// Multipliers



  render(){
    ReactDOM.render(<Root app={App} />, document.querySelector('main'))
  }
}

window.App = App 

App.start();

console.log('browser.js here')

