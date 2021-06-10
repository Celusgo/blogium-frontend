import React, { useState, useEffect } from 'react';
import PostList from './PostList/PostList';
import axios from 'axios';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [commentsNumber, setCommentsNumber] = useState([]);

  useEffect(() => {
    const request = axios.get("http://localhost:4001/posts");
      request.then(response=>{
      setPosts(response.data.posts);
      setCommentsNumber(response.data.comments);
    })
  }, []);

  return (
    <PostList name="Daily stories" commentsNumber={commentsNumber} posts={posts} />
  );
}
