import React from 'react';
import "./blog.css";
import BlogHeader from '../../components/BlogHeader/BlogHeader';
import BlogCollection from '../../components/BlogCollection/BlogCollection';
import PropertiesCollectionSubscribe from '../../components/PropertiesCollectionSubscribe/PropertiesCollectionSubscribe';
import Fotter from '../../components/Fotter/Fotter';

const Blog = () => {
  return (
    <div className='blog'>
        <BlogHeader />
        <BlogCollection />
        <PropertiesCollectionSubscribe />
        <Fotter />
    </div>
  )
}

export default Blog