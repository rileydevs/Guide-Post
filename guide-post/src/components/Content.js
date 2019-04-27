import React from 'react';
import data from "../data";

export default class Content extends React.Component{
  constructor(){
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.setState({
      data: data
    })
  }
   
  render() {
    return(
      <div>
        <h1>From Content</h1>
      </div>
    )
  }
}