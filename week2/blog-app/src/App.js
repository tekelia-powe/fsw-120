import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';
import blogPost from './blogPost';

function App() {
  const blog = blogPost.map(post => <Post title={post.title} subTitle={post.subTitle} author={post.author} date={post.date} />)
  return (
    
    <div className="App">
     {blog[0]} 
     {blog[1]}
     {blog[2]}
     {blog[3]}
     {blog[4]}
     <button>Older Posts</button>
    </div>
  );
}

export default App;
