import React from 'react';
import data from "../data";
// import axios from 'axios';
import PostList from './PostList';
import PostForm from './PostForm';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: data
    })
  }

  addPost = post => {
    const copiedList = this.state.data.slice();
    const newPost = {
      title: "",
      id: 0,
      name: "",
      location: "",
      duration: "",
      description: "",
      rating: 0
  
    };
    copiedList.push(newPost);
    // BUILD OUR ITEM OBJECT
    this.setState({ list: copiedList });
  }

  render() {
    console.log(this.state);
    return (
      <div className="content">
        <h1>From Content</h1>
        <PostList data={data} />
        <PostForm addPost={this.addPost} />
      </div>
    )
  }
}