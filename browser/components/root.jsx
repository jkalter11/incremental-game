import React from 'react'
import {Grid, Row, Column} from 'react-cellblock';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Root extends React.Component {

  render(){ 
    const { app } =  this.props
    const { state } =  app
    const { bps, brickCount, employees, transports } = state
    // console.log( this.props.app.state )

    return (
      <div>
        <Grid>
          <HeaderRow />
          <BodyRow app={app} brickCount={brickCount} bps={bps} />
          <div className="copyRightText"> <FooterRow /> </div> 
        </Grid>
      </div>
    )
  }
}

class HeaderRow extends React.Component {
  render(){
    return (
      <Row>
       <h1>Click A Brick</h1> 
      </Row>
    )
  }
}

class FooterRow extends React.Component {
  render(){
    return (
      <Row>
        <Column>
          <p>Copyright 2016, Bricks Unlimited International</p> 
          <p>Shaka Lee & <a href="www.rachelralston.com">Rachel Ralston</a></p>
        </Column>
      </Row>
    )
  }
}

class BrickButton extends React.Component {
  render(){
    return ( 
      <div className="brickButton">
        <a href="javascript: void(null)" onClick={this.props.onClick}>
          <img src='/img/brick.png' /> 
        </a>
      </div>
    )
  }
}

function BodyRow(props){
  const {app} = props
  const {bricksPerSecond} = app
  console.log(app)
  return (
    <Row>
      <Column width="1/4">
        <div> 
          <BrickButton onClick={app.addBrick} />  
          <div>
            <p> Total Bricks: {app.state.brickCount}</p>
            <p> Bricks Per Second: {bricksPerSecond()}</p>
          </div>   
        </div>

      </Column>
      <Column width="3/4">
        <div><Tabs>
          <TabList> 
            <Tab className="tab workerstab"> Workers </Tab>
            <Tab className="tab transportstab"> Transports </Tab> 
            <Tab className="tab toolstab"> Tools </Tab> 
          </TabList> 
          <TabPanel className="tabpanel workerstab">
            <WorkersTab className="workerstab" app={app}/>
          </TabPanel>
          <TabPanel className="tabpanel transportstab">
            <TransportsTab className="transportstab" app={app}/>
          </TabPanel>
          <TabPanel className="tabpanel toolstab">
            <ToolsTab className="toolstab" app={app}/>
          </TabPanel>
        </Tabs>
        </div>
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
      desc="Reliable and sturdy, workers save the day."
      bonus="A worker can produce an additional 5 bricks per second."
      img="/img/worker.png"
    />
    <ItemDescription 
      name="Alien"           
      owned={App.state.alienCount}             
      cost={App.alienCost}    
      onPurchase={app.addAlien} 
      desc="Who knew aliens would love building with rocks so much?"
      bonus="An alien can produce an additional 15 bricks per second."
      img="/img/alien.png"
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
      desc="How do you make buildings faster? You get there faster."
      bonus="A red truck increases worker productivity rate by 20%"
      img="/img/redtruck.png"
    /> 
    <ItemDescription 
      name="Alien Transport" 
      owned={App.state.alienTransportCount}    
      cost={App.alienTransportCost}    
      onPurchase={app.addAlienTransport} 
      desc="Aliens are zooming everywhere."
      bonus="An alien ship increases alien productivity rate by 50%"
      img="/img/ufo.png"
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
      desc="Brick bakers bake a brick."
      bonus="An oven increases your active click rate by 3 bricks per click."
      img="/img/oven.png"
    />
    <ItemDescription 
      name="Pick Axe" 
      owned={App.state.pickAxeCount}    
      cost={App.pickAxeCost}    
      onPurchase={app.addPickAxe} 
      desc="Diging up stuff faster means I can make bricks faster, right?"
      bonus="An pick axe increases your active click rate by 5 bricks per click."
      img="/img/pickaxe.png"
    /> 
  </div>
}

function ItemDescription(props){
  return (
    <Row className="itemRow">
      <Column width="3/4">
        <h3>{props.name}</h3>
        <div className="descriptionstats">Owned: {props.owned}  |  Cost: {props.cost}</div>
        <div>{props.desc}</div>
        <div className="descriptionstats"><p>{props.bonus}</p></div>  
      </Column>
      <Column width="1/4">
        <div className="buyDiv">
          <button onClick={props.onPurchase}>
            <div>
              <img className="itemIcons" src={props.img}/>
              BUY
            </div>
          </button>
        </div>
      </Column>
    </Row>
  )
}
