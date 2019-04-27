import React from 'react';

const Post = props => {
  console.log(props);
  return(
    <div className="post">
      <h1>Hello from Post</h1>
      <p>{props.post.name}</p>
    </div>
  )
}

export default Post;