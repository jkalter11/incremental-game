import React from 'react'
import {Grid, Row, Column} from 'react-cellblock';

      // title: 'Basic Worker',
      // cost: 20,
      // costIncrease: 1.5,
      // totalNumber: App.state.workerCount,
      // productionRate: '3 bricks per second',
      // desc: 'Solid, sturdy and dependable, these workers are your bread and butter.',
      // img: 'TBD'


class WorkerHireButton extends React.Component {
  render() {
    const workerbut = this.props.workerbutton

    return <p> Hire a {workerbut.title} </p>    
  }
}

class WorkerDetails extends React.Component {
  render() {
    const workerdet = this.props.workerdet 
    return (
      <div>
        <h3>{workerdet.title}</h3>
        <p> {workerdet.desc}</p>
        <p> It costs {workerdet.cost} to hire a {workerdet.title}. And you will get {workerdet.productionRate}. </p>
      </div> 
    )
  }
}

export default class EmployeeRow extends React.Component {
  render() {
    const employees = this.props

    return (
      <Row>
        <Column width="2/3">
          <WorkerDetails workerdet={employees} />
        </Column>
        <Column width="1/3">
          <WorkerHireButton workerbutton={employees} />
        </Column>
      </Row>
    )
  }
}
