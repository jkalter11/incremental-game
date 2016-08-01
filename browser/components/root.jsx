import React from 'react'
import {Grid, Row, Column} from 'react-cellblock';

export default class Root extends React.Component {
  render(){
    const { app } = this.props
    const { state } = app
    var { cookieCount, grandmaCount, ovenCount, totalGameTime } = (this.props.app.state)
    return <div>
      <Grid>
        <Row>
          <h1>BrickLayer</h1>
        </Row>
        <Row>
          <Column width="1/4">
            <h2>Stats</h2>
            <p>Total Cookies: { cookieCount }</p>
            <p>Total Ovens: { ovenCount }</p>
            <p>Total Grandma's: { grandmaCount }</p>
            <p>Total Game Time: { totalGameTime }</p>
            <CookieButton  onClick={app.addCookie} />
          </Column>
          <Column width="3/4">
          <Row className="row">
            <Column width="3/4">
              <h4>Ovens</h4> 
              <p>Cost 20 Cookies to create and produce 10 Cookies/Sec</p>
            </Column>
            <Column width="1/4">
              <button onClick={app.addOven}>Buy an Oven</button>
            </Column>
          </Row>
          <Row className="row">
            <Column width="3/4">
              <h4>Grandma's</h4> 
              <p>Cost 20 Cookies to create and Produce 3 Cookies/Sec. They also come with a free oven!</p>
            </Column>
            <Column width="1/4">
              <button onClick={app.addGrandma}>Add a Grandma</button>
            </Column>
          </Row>
          </Column>
        </Row>
      </Grid>
    </div>
  }
}


class CookieButton extends React.Component {
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
