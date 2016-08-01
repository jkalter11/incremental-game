import React from 'react'
import {Grid, Row, Column} from 'react-cellblock';

export default class Root extends React.Component {
  render(){
    const { app } = this.props
    const { state } = app
    var { brickCount, workerCount, ovenCount, totalGameTime, alienCount, alienTransportCount } = (this.props.app.state)
    return <div>
      <Grid>
        <Row>
          <h1>BrickLayer</h1>
        </Row>
        <Row>
          <Column width="1/4">
            <h2>Stats</h2>
            <p>Total Bricks: { brickCount }</p>
            <p>Total Workers: { workerCount }</p>
             <p>Total Alien Workers: { alienCount }</p>
             <p>Total Alien Transport: { alienTransportCount }</p>
            <p>Total Game Time: { totalGameTime }</p>

            <BrickButton  onClick={app.addBrick} />
          </Column>
          <Column width="3/4">
          <Row className="row">
            <Column width="3/4">
              <h4>Ovens</h4>
              <p>You currently have: { ovenCount }</p> 
              <p>Cost 20 bricks to create and produce 10 bricks/Sec</p>
            </Column>
            <Column width="1/4">
              <button onClick={app.addOven}>Buy an Oven</button>
            </Column>
          </Row>
          <Row className="row">
            <Column width="3/4">
              <h4>Workers</h4> 
              <p>Cost 20 Cookies to create and Produce 3 Cookies/Sec.</p>
            </Column>
            <Column width="1/4">
              <button onClick={app.addWorker}>Hire a Worker</button>
            </Column>
          </Row>

          <Row className="row">
            <Column width="3/4">
              <h4>Alien Workers</h4> 
              <p>Cost 100 Bricks, gives you 15 bricks/second </p>
            </Column>
            <Column width="1/4">
              <button onClick={app.addAlien}>Hire an Alien</button>
            </Column>
          </Row>

          <Row className="row">
            <Column width="3/4">
              <h4>Alien Transport</h4> 
              <p>Cost 300 Bricks, increases alien productivity by 20%</p>
            </Column>
            <Column width="1/4">
              <button onClick={app.addAlienTransport}>Buy an Alien Transport</button>
            </Column>
          </Row>
          </Column>
        </Row>
      </Grid>
    </div>
  }
}


class BrickButton extends React.Component {
  render(){
    return <button {...this.props}>
        <img src="http://pngimg.com/upload/brick_PNG3324.png" height={100} />
      </button>
  }
}

class ItemRow extends React.Component{
  render(){

    return 
  }
}
