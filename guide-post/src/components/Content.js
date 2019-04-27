import React from 'react';
import data from "../data";
import PostList from './PostList';

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
    console.log(this.state);
    return(
      <div className="content">
        <h1>From Content</h1>
        <PostList data={data}/>
      </div>
    )
  }
}