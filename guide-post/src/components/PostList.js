import React from "react";
import Post from './Post';

const PostList = props => {
  return (
    <div className="post-list">
      <h1>Hello from PostList</h1>
      {props.data.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
