import React, { Component } from 'react'

export default class IntervelCounter extends Component {

  state={
    count:0
  }
  componentDidMount(){
   this.intervel= setInterval(this.increment, 1000)
  }
  componentWillUnmount(){
    clearInterval(this.intervel)
  }
  increment = ()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  render() {
    return (
      <div>
        
          <h2>{this.state.count}</h2>
      </div>
    )
  }
}
