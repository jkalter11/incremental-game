import React from 'react'

export default class Root extends React.Component {
  render(){
    const { app } = this.props
    const { state } = app

    return <div>
      <h1>Make this shit work</h1>
      <pre>{JSON.stringify(state, null, 4)}</pre>
      <CookieButton onClick={app.addCookie} />
      <button onClick={app.addOven}>add oven</button>
      <button onClick={app.addGrandma}>add grandma</button>
      <button onClick={app.addGameTime}>add gametime</button>
    </div>
  }
}



class CookieButton extends React.Component {
  render(){
    return <button {...this.props}><img src="img/brick.png" /></button>
  }
}
