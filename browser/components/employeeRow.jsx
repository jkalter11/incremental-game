import React from 'react'

      // employeeTitle: 'Alien Worker',
      // employeeCost: 100,
      // employeeCostovertime: 1.5,
      // employeeNumber: App.state.alienCount,
      // employeeProductionRate: '15 bricks per second',
      // employeeImg: 'TBD'

export default class EmployeeRow extends React.Component {
  render() {
    return <div>{this.props.employeeTitle}</div>
  }
}
