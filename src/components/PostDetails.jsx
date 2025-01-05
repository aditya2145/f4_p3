import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

const PostDetails = () => {
    const { id } = useParams();
    const post = useSelector((state) => state.posts.data.find((item) => item.id === parseInt(id)));

    if (!post) return <p>Post not found</p>;

  return (
    <div style={{fontSize: 'large'}}>
        <h3>Details Page For Post With ID {id}</h3>
        <img style={{borderRadius: '10px'}} src={`https://picsum.photos/200?random=${post.id}`} alt="postImg" />
        <p><span style={{fontWeight: 'bold'}}>User Id :</span> {post.userId}</p>
        <p><span style={{fontWeight: 'bold'}}>Title :</span> {post.title}</p>
        <p><span style={{fontWeight: 'bold'}}>Body :</span> {post.body}</p>
        <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default PostDetails