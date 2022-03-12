import React from 'react'
import { Link } from 'react-router-dom'

export default Post = ({ post }) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
)
