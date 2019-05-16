import React from 'react';

const Post = props => {
  return (
    <div className="post">
      <h3>{props.post.title}</h3>
      <p>{props.post.location}</p>
      <p>{props.post.name}</p>
    </div>
  )
}

export default Post;