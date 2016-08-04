require('./index.sass')
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root.jsx'


const App = {
  start(){
    // App.load();
    App.reset()
    App.timeout = setInterval(App.tick, 1000)
    App.render();
  },

  stop(){
    clearTimeout(App.timeout)
  },

  // employees() {
  //   return [
  //     {
  //       title: 'Basic Worker',
  //       cost: 20,
  //       costIncrease: 1.5,
  //       totalNumber: App.state.workerCount,
  //       productionRate: '3 bricks per second',
  //       desc: 'Solid, sturdy and dependable, these workers are your bread and butter.',
  //       img: 'TBD'
  //     }, 
       
  //     {
  //       title: 'Alien Worker',
  //       cost: 100,
  //       costIncrease: 1.5,
  //       totalNumber: App.state.alienCount,
  //       productionRate: '15 bricks per second',
  //       desc: 'Once the aliens realized what an amazing builder-of-things you were, some decided to come help you.',
  //       img: 'TBD'
  //     }
  //   ];
  // },

  // transports() {
  //   return [{
  //     title: 'Red Truck',
  //     cost: 50,
  //     costIncrease: 3.0,
  //     totalNumber: App.state.redTruckCount,
  //     productionRate: '10 bricks per second',
  //     desc: 'This Truck will get your production rate going through the roof!',
  //     img: 'TBD'
  //     }, 
     
  //   {
  //     title: 'Insanity Inducing Spaceship',
  //     cost: 1000,
  //     costIncrease: 6.0,
  //     totalNumber: App.state.alienTransportCount,
  //     productionRate: '100 bricks per second',
  //     desc: 'Aliens need spaceships to build... if you have aliens, then you probably need spaceships.',
  //     img: 'TBD'
  //     }

  //   ]
  // },

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
      pickAxeCount: 0,
      workerCount: 0,
      totalGameTime:0,
      alienCount: 0,
      alienTransportCount: 0,
      redTruckCount: 0,
      // employees: [],
      // transports: []
    };
  },

  save(){
    localStorage.state = JSON.stringify(App.state);
  },  


  addGameTime(){
    App.state.totalGameTime++;
    App.render();
  },

// Click Based Income

  // BPC:1,
  // addBrick(){
  //   console.log('addBrick clicked')
  //   App.state.brickCount + BPC;
  //   App.render();
  // },


// Passive Income

  workerCost: 20,
  addWorker(){
    console.log('Hire a worker')
    if (App.state.brickCount < App.workerCost) return;
    App.state.brickCount -= App.workerCost
    App.state.workerCount++;
    App.render();
  },

  redTruckCost: 50,
  addRedTruck(){
    console.log('Red Truck')
    if (App.state.brickCount < App.redTruckCost ) return;
    App.state.brickCount -= App.redTruckCost
    App.state.redTruckCount++;
    App.render();
  },

  alienCost: 100,
  addAlien(){
    console.log('Alien')
    if (App.state.brickCount < App.alienCost ) return;
    App.state.brickCount -= App.alienCost
    App.state.alienCount++;
    App.render();
  },

  alienTransportCost: 1000,
  addAlienTransport(){
    console.log('Alien Transport')
    if (App.state.brickCount < App.alienTransportCost ) return;
    App.state.brickCount -= App.alienTransportCost
    App.state.alienTransportCount++;
    App.render();
  },

  // pickAxeCost: 250,
  // addPickAxe(){
  //   console.log('Pick Axe')
  //   if (App.state.brickCount < App.pickAxeCost ) return;
  //   App.state.brickCount -= App.pickAxeCost
  //   App.state.pickAxeCount++;
  //   App.render();
  // },

  // ovenCost: 500, 
  // addOven(){
  //   console.log('Oven')
  //   if (App.state.brickCount < App.ovenCost ) return;
  //   App.state.brickCount -= App.ovenCost
  //   App.state.ovenCount++;
  //   App.render();
  // },


// Time Based Income

  bricksPerSecond(){
    const s = App.state;
    const workerBPS = Math.round(
      (s.workerCount * 5) + ((s.workerCount * 5) * (s

        .redTruckCount * 0.2))
    )
    const alienBPS = Math.round(
      (s.alienCount * 15) + ((s.alienCount * 15) * (s.alienTransportCount * 0.5))
    )

    // const bricksPerClick = (BPC + (s.ovenCount * 3) + (s.pickAxeCount * 5))

    return 1 + workerBPS + alienBPS;

    // App.state.brickCount += (
    //   (App.state.ovenCount * 10) +
    //   (App.state.workerCount * 3) + 
    //   // (
    //   //   (App.state.alienCount * 15) + 0
    //   //   // (App.state.alienCount * 15) * (App.state.alienTransportCount * 0.2)
    //   // ) + 
    //   // // (App.state.alienTransportCount * (alienProductionRate * 1.5)) +
    //   (App.state.redTruckCount * (workerProductionRate * 1.2)) +
    //   1
    // )
  },

  tick(){
    console.log('App tick', App.state)
    // const alienProductionRate = 15
    const workerProductionRate = 3

    App.state.bps = App.bricksPerSecond()
    App.state.brickCount += App.state.bps

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

