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

  // itemDetails(){ 
  //   [
  //     alienDesc: "Who knew aliens would love building with rocks so much?",
  //     workerDesc: "Reliable and sturdy, workers save the day.",
  //     ovenDesc: "",
  //     pickAxeDesc: "Diging up stuff faster means I can make bricks faster, right?",
  //     redTruckDesc: "How do you make buildings faster? You get there faster.",
  //     alienShipDesc: "Aliens are zooming everywhere."
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
      brickCount: 1000,
      ovenCount: 0,
      pickAxeCount: 0,
      workerCount: 0,
      totalGameTime:0,
      alienCount: 0,
      alienTransportCount: 0,
      redTruckCount: 0
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

  bpc:1,
  addBrick(){
    App.state.brickCount = App.state.brickCount + App.bpc;
    App.render();
  },


// Passive Income

  workerCost: 20,
  addWorker(){
    if (App.state.brickCount < App.workerCost) return;
    App.state.brickCount -= App.workerCost
    App.state.workerCount++;
    App.render();
  },

  redTruckCost: 50,
  addRedTruck(){
    if (App.state.brickCount < App.redTruckCost ) return;
    App.state.brickCount -= App.redTruckCost
    App.state.redTruckCount++;
    App.render();
  },

  alienCost: 100,
  addAlien(){
    if (App.state.brickCount < App.alienCost ) return;
    App.state.brickCount -= App.alienCost
    App.state.alienCount++;
    App.render();
  },

  alienTransportCost: 1000,
  addAlienTransport(){
    if (App.state.brickCount < App.alienTransportCost ) return;
    App.state.brickCount -= App.alienTransportCost
    App.state.alienTransportCount++;
    App.render();
  },

  pickAxeCost: 250,
  addPickAxe(){
    if (App.state.brickCount < App.pickAxeCost ) return;
    App.state.brickCount -= App.pickAxeCost
    App.state.pickAxeCount++;
    App.render();
  },

  ovenCost: 500, 
  addOven(){
    if (App.state.brickCount < App.ovenCost ) return;
    App.state.brickCount -= App.ovenCost
    App.state.ovenCount++;
    App.render();
  },


// Time Based Income

  bricksPerSecond(){
    const s = App.state;
    const bpc = App.bpc;
    const workerBPS = Math.round(
      (s.workerCount * 5) + ((s.workerCount * 5) * (s.redTruckCount * 0.2))
    )
    const alienBPS = Math.round(
      (s.alienCount * 15) + ((s.alienCount * 15) * (s.alienTransportCount * 0.5))
    )

    const bricksPerClick = (bpc + (s.ovenCount * 3) + (s.pickAxeCount * 5))

    return 1 + workerBPS + alienBPS;
  },

  tick(){
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


