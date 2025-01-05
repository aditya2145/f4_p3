import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/post/postsSlice';
import { Link } from 'react-router-dom';
import Loading from './Loading'

const Home = () => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.posts);

    useEffect(() => {
      dispatch(fetchPosts());
    }, [])

    if(loading) return (<Loading />)

    if(error) return (<h1>Error : {error}</h1>)
    

  return (
    <div style={{
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap'
    }}>
        {
            data.map((post) => (
                <div key={post.id}
                style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        border: '1px solid #FFFFFF80',
                        width: '15rem',
                        height: '20rem',
                        borderRadius: '10px',
                        overflow: 'hidden',
                    }
                }
                >
                    <div style={{width: '100%', overflow: 'hidden', height: '60%'}}>
                        <img style={{width: '100%', backgroundSize: 'cover'}} src='https://picsum.photos/200?random=${post.id}' alt="postImg" />
                    </div>
                    <div style={{padding: '1rem'}}>
                        <p><span style={{fontWeight: 'bolder'}}>Title:</span> {post.title.slice(0,20)}...</p>
                        <p><span style={{fontWeight: 'bolder'}}>Body:</span> {post.body.slice(0,30)}</p>
                        <Link to={`/item/${post.id}`}> Read More...</Link>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Home