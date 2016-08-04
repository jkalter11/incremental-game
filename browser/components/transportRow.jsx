import React from 'react'
import {Grid, Row, Column} from 'react-cellblock';

      // title: 'Basic Worker',
      // cost: 20,
      // costIncrease: 1.5,
      // totalNumber: App.state.workerCount,
      // productionRate: '3 bricks per second',
      // desc: 'Solid, sturdy and dependable, these workers are your bread and butter.',
      // img: 'TBD'


class BuyTransportButton extends React.Component {
  render() {
    const transportBut = this.props.transportButton

    return <p> Hire a {transportBut.title} </p>    
  }
}

class TransportDetails extends React.Component {
  render() {
    const transportDet = this.props.transportDet
    return (
      <div>
        <h3>{transportDet.title}</h3>
        <p> {transportDet.desc}</p>
        <p> It costs {transportDet.cost} to purchase a {transportDet.title}. And you will get {transportDet.productionRate}. </p>
      </div> 
    )
  }
}

export default class TransportRow extends React.Component {
  render() {
    const transports = this.props

    return (
      <Row>
        <Column width="2/3">
          <TransportDetails transportDet={transports} />
        </Column>
        <Column width="1/3">
          <BuyTransportButton transportBut={transports} />
        </Column>
      </Row>
    )
  }
}