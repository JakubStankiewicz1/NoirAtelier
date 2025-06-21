import React, { useState } from 'react';
import "./blogCollection.css";
import { FaUser } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import { getAllBlogs } from '../../data/blogsData';
import { useNavigate } from 'react-router-dom';

const BLOGS_PER_PAGE = 7;

const BlogCollection = () => {
  const navigate = useNavigate();
  const blogs = getAllBlogs();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  // Calculate which blogs to show
  const startIdx = (currentPage - 1) * BLOGS_PER_PAGE;
  const endIdx = startIdx + BLOGS_PER_PAGE;
  const blogsToShow = blogs.slice(startIdx, endIdx);

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  // Scroll to top of blog list on page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    const collection = document.querySelector('.blogCollection');
    if (collection) {
      collection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='blogCollection'>
        <div className="blogCollectionContainer">
            {blogsToShow.map((blog, index) => (
                <div key={blog.id} onClick={() => handleBlogClick(blog.id)} className="blogCollectionContainerBlog">
                    <div className="blogCollectionContainerBlogContainer">
                        {/* Left Part */}
                        <div className="blogCollectionContainerBlogContainerLeft">
                            <div className="blogCollectionContainerBlogContainerLeftContainer">
                                <div className="blogCollectionContainerBlogContainerLeftImageWrapper">
                                    <img 
                                        src={blog.mainImage}
                                        alt={blog.title} 
                                        className='blogCollectionContainerBlogContainerLeftContainerImage'
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <div className="blogCollectionContainerBlogContainerLeftOverlay"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Part */}
                        <div className="blogCollectionContainerBlogContainerRight">
                            <div className="blogCollectionContainerBlogContainerRightContainer">
                                {/* Top Part */}
                                <div className="blogCollectionContainerBlogContainerRightContainerTop">
                                    <div className="blogCollectionContainerBlogContainerRightContainerTopContainer">
                                        <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextOne">
                                            Published by {blog.author}
                                        </p>

                                        <FaUser className='blogCollectionContainerBlogContainerRightContainerTopContainerIconOne' />

                                        <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextTow">
                                            on
                                        </p>

                                        <LuClock className='blogCollectionContainerBlogContainerRightContainerTopContainerIconTwo' />

                                        <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextThree">
                                            {blog.publishDate} • {blog.readTime} read
                                        </p>
                                    </div>
                                </div>

                                {/* Middle Part */}
                                <div className="blogCollectionContainerBlogContainerRightContainerMiddle">
                                    <div className="blogCollectionContainerBlogContainerRightContainerMiddleContainer">
                                        <p 
                                            className="blogCollectionContainerBlogContainerRightContainerMiddleContainerText cormorant-garamond-regular"
                                            onClick={() => handleBlogClick(blog.id)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {blog.title}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Part */}
                                <div className="blogCollectionContainerBlogContainerRightContainerBottom">
                                    <div className="blogCollectionContainerBlogContainerRightContainerBottomContainer">
                                        <p className="blogCollectionContainerBlogContainerRightContainerBottomContainerText">
                                            {blog.excerpt}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="blogCollectionPagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    className={`blogCollectionPaginationButton${currentPage === i + 1 ? ' active' : ''}`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
        </div>
    </div>
  )
}

export default BlogCollection;
