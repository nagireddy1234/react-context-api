import React, { Component } from 'react'

export default class ClassCounter extends Component {

  state={
    count:0
  }

  componentDidMount = () =>{
    document.title = `you clicked ${this.state.count} times`
  }
  
  increament =()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  componentDidUpdate = () =>{
    document.title = this.state.count
  }

  render() {

    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increament}>increament</button>
      </div>
    )
  }
}
