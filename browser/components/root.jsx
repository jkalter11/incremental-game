import React from 'react'
import {Grid, Row, Column} from 'react-cellblock';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

//import ItemRow from "./worker.js";

import EmployeeRow from './employeeRow.jsx'
import TransportRow from './transportRow.jsx'


export default class Root extends React.Component {

  render(){ 
    const { app } =  this.props
    const { state } =  app
    const { bps, brickCount, employees, transports } = state
    // console.log( this.props.app.state )

    // return (
    //   <div>
    //     <h2>{brickCount}</h2>
    //     <h2>{app.bricksPerSecond()}</h2>
    //     <BrickButton onClick={app.addBrick} />
    //     <ol>
    //       <li><a href="javascript: void(null)" onClick={app.addWorker}>buy a worker</a></li>
    //       <li><a href="javascript: void(null)" onClick={app.addRedTruck}>buy a red truck</a></li>
    //       <li><a href="javascript: void(null)" onClick={app.addAlien}>buy alien</a></li>
    //       <li><a href="javascript: void(null)" onClick={app.addAlienTransport}>buy alien transport</a></li>
    //     </ol>
    //     <pre>{JSON.stringify(state, null, 4)}</pre>
    //   </div>
    // )

    return (
      <div>
        <Grid>
          <HeaderRow brickCount={brickCount} bps={bps} />
          <BodyRow app={app} />
          <FooterRow />
        </Grid>
      </div>
    )
  }
}




class HeaderRow extends React.Component {
  render(){
    const { brickCount, bps } = this.props

    return (
      <Row>
        <Column width="1/4">
          <BrickLogo />
        </Column>
        <Column width="3/4">
          <PlayerStats brickCount={brickCount} bps={bps} />
        </Column>
      </Row>
    )
  }
}

class PlayerStats extends React.Component {
  render(){
    return (
      <div>
        <Column width="1/2">
          <h4> Total Bricks: {this.props.brickCount}</h4>
        </Column>
        <Column width="1/2">
          <h4> Bricks Per Second: {this.props.bps}</h4>
        </Column>
      </div>
    )
  }
}


class BrickLogo extends React.Component {
  render(){
    return <h1>Click A Brick</h1> 
  }
}


class FooterRow extends React.Component {
  render(){
    return (
      <Row>
        <Column>
          <CopyrightInfo />
        </Column>
      </Row>
    )
  }
}

class CopyrightInfo extends React.Component {
  render(){
    return <p>Copyright 2016, Bricks Unlimited International</p> 
  }
}

class BrickButton extends React.Component {
  render(){
    return <a href="javascript: void(null)" onClick={this.props.onClick}>
      <img className="brickButton" src={'../img/brick.png'} width={'100'}/> 
    </a>
  }
}

function BodyRow(props){
  const {app} = props
  return (
    <Row>
      <Column width="1/4">
        <div> 
          <BrickButton onClick={app.addBrick} />        
        </div>
      </Column>
      <Column width="3/4">
        <Tabs>
          <TabList> 
            <Tab> Workers </Tab>
            <Tab> Transports </Tab> 
            <Tab> Tools </Tab> 
          </TabList> 
          <TabPanel>
            <WorkersTab app={app}/>
          </TabPanel>
          <TabPanel>
            <p> Transport <img src={'../img/ufo.png'} width={100}/></p>
            <TransportsTab app={app}/>
          </TabPanel>
          <TabPanel>
            <p> Tools <img src={'../img/oven.jpeg'} width={100}/></p>
            <ToolsTab app={app}/>
          </TabPanel>
        </Tabs>
      </Column> 
    </Row>
  )
}



function WorkersTab(props){
  const {app} = props;
  return <div>
    <ItemDescription 
      name="Worker"          
      owned={App.state.workerCount}            
      cost={App.workerCost}   
      onPurchase={app.addWorker} 
    />
    <ItemDescription 
      name="Alien"           
      owned={App.state.alienCount}             
      cost={App.alienCost}    
      onPurchase={app.addAlien} 
    />
  </div>
}

function TransportsTab(props){
  const {app} = props;
  return <div>
    <ItemDescription 
      name="Red Truck"       
      owned={App.state.redTruckCount}          
      cost={App.redTruckCost} 
      onPurchase={app.addRedTruck} 
    />
    <ItemDescription 
      name="Alien Transport" 
      owned={App.state.alienTransportCount}    
      cost={App.alienTransportCost}    
      onPurchase={app.addAlienTransport} 
    />
  </div>
}

function ToolsTab(props){
  const {app} = props;
  return <div>
    <ItemDescription 
      name="Oven"       
      owned={App.state.ovenCount}          
      cost={App.ovenCost} 
      onPurchase={app.addOven} 
    />
    <ItemDescription 
      name="Pick Axe" 
      owned={App.state.pickAxeCount}    
      cost={App.pickAxeCost}    
      onPurchase={app.addPickAxe} 
    />
  </div>
}

function ItemDescription(props){
  return <div>
    <h3>{props.name}</h3>
    <div>Owned: {props.owned}</div>
    <div>Cost: {props.cost}</div>
    <div><a href="javascript: void(null)" onClick={props.onPurchase}>buy</a></div>
  </div>
}


//     // const { app } = this.props
//     // const { state } = app
//     // const timeElapsed = (new Date).getTime() - state.startedAt;
//     // var { employee, brickCount, workerCount, ovenCount, totalGameTime, alienCount, alienTransportCount } = (this.props.app.state)
//     // return <div>
//     //   <Grid>
//     //     <Row>
//     //       <h1>BrickLayer</h1>
//     //       <div>{timeElapsed} seconds</div>
//     //     </Row>
//     //     <Row>
//     //       <Column width="1/4">
//     //         <h2>Stats</h2>
//     //         <p>Total Bricks: { brickCount }</p>
//     //         <p>Total Workers: { workerCount }</p>
//     //          <p>Total Alien Workers: { alienCount }</p>
//     //          <p>Total Alien Transport: { alienTransportCount }</p>
//     //         <p>Total Game Time: { totalGameTime }</p>
//     //         <BrickButton onClick={app.addBrick} />
//     //       </Column>
//     //       <Column width="3/4">
           
//     //         <ItemRow ovenCount={employee}  />
//     //       </Column>
//     //     </Row>
//     //   </Grid>
//     // </div>


// // class BrickButton extends React.Component {
// //   render(){
// //     return <button {...this.props}>
// //         <img src={'../img/brick.png'} height={100} />
// //       </button>
// //   }
// // }



// // class ItemRow extends React.Component{
// //   render(){
// //     return <Row className="row">
// //       <Column width="3/4">
// //         <h4>Ovens</h4>
// //         <p>You currently have:  </p> 
// //         <p>Cost 20 bricks to create and produce 10 bricks/Sec</p>
// //       </Column>
// //       <Column width="1/4">
// //         <button>Buy an Oven</button>
// //       </Column>
// //     </Row>
// //   }
// // }



// // var App = React.createClass({
// //   imgs:[
// //     "/img/brick.png",
// //     "/img/Alien.png"
// //   ],
// //   render: function(){
// //     return(
// //       <Img alt="Alien!" srcset={this.imgs.join(', ')} />
// //       );
// //   }
// // });

//   // <Row>
//   //         <Column width="1/4">
//   //           <h2>Stats</h2>
//   //           <p>Total Bricks: { brickCount }</p>
//   //           <p>Total Workers: { workerCount }</p>
//   //            <p>Total Alien Workers: { alienCount }</p>
//   //            <p>Total Alien Transport: { alienTransportCount }</p>
//   //           <p>Total Game Time: { totalGameTime }</p>
//   //           <BrickButton  onClick={app.addBrick} />
//   //         </Column>
//   //         <Column width="3/4">
//   //         <Row className="row">
//   //           <Column width="3/4">
//   //             <h4>Ovens</h4>
//   //             <p>You currently have: { ovenCount }</p> 
//   //             <p>Cost 20 bricks to create and produce 10 bricks/Sec</p>
//   //           </Column>
//   //           <Column width="1/4">
//   //             <button onClick={app.addOven}>Buy an Oven</button>
//   //           </Column>
//   //         </Row>
//   //         <Row className="row">
//   //           <Column width="3/4">
//   //             <h4>Workers</h4> 
//   //             <p>Cost 20 bricks to create and Produce 3 bricks/Sec.</p>
//   //           </Column>
//   //           <Column width="1/4">
//   //             <button onClick={app.addWorker}>Hire a Worker</button>
//   //           </Column>
//   //         </Row>

//   //         <Row className="row">
//   //           <Column width="3/4">
//   //             <h4>Alien Workers</h4> 
//   //             <p>Cost 100 Bricks, gives you 15 bricks/second </p>
//   //           </Column>
//   //           <Column width="1/4">
//   //             <button onClick={app.addAlien}>Hire an Alien</button>
//   //           </Column>
//   //         </Row>

//   //         <Row className="row">
//   //           <Column width="3/4">
//   //             <h4>Alien Transport</h4> 
//   //             <p>Cost 300 Bricks, increases alien productivity by 20%</p>
//   //           </Column>
//   //           <Column width="1/4">
//   //             <button onClick={app.addAlienTransport}>Buy an Alien Transport</button>
//   //           </Column>
//   //         </Row>