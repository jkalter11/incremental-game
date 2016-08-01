import React from 'react'

export default class Root extends React.Component {
  render(){
    const { app } = this.props
    const { state } = app

    return <div>
      <h1>hello from react</h1>
      <pre>{JSON.stringify(state, null, 4)}</pre>
      <CookieButton onClick={app.addCookie} />
      <button onClick={app.addOven}>add oven</button>
    </div>
  }
}



class CookieButton extends React.Component {
  render(){
    return <button {...this.props}>click me for a cookie</button>
  }
}
