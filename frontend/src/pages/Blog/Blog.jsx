import React from 'react';
import "./blog.css";
import BlogHeader from '../../components/BlogHeader/BlogHeader';
import BlogCollection from '../../components/BlogCollection/BlogCollection';

const Blog = () => {
  return (
    <div className='blog'>
        <BlogHeader />
        <BlogCollection />
    </div>
  )
}

export default Blog