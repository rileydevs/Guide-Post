import React from 'react';
//import data from "../data";
//import axios from 'axios';
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
    // this.setState({
    //   data: data
    // })

    fetch('http://localhost:7000/api/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
        //console.log(data)
      })
      .catch(error => console.log("An error occured", error));
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
        <PostList data={this.state.data} />
        <PostForm addPost={this.addPost} />
      </div>
    )
  }
}