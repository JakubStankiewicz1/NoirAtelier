import React from "react";
import "./blogCollection.css";
import { FaUser } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import { getAllBlogs } from "../../data/blogsData";
import { useNavigate } from "react-router-dom";

const BlogCollection = () => {
  const navigate = useNavigate();
  const blogs = getAllBlogs();

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="blogCollection">
      <div className="blogCollectionContainer">
        {blogs.map((blog, index) => (
          <div key={blog.id} className="blogCollectionContainerBlog">
            <div className="blogCollectionContainerBlogContainer">
              {/* Left Part */}
              <div className="blogCollectionContainerBlogContainerLeft">
                <div className="blogCollectionContainerBlogContainerLeftContainer">
                  <div className="blogCollectionContainerBlogContainerLeftImageWrapper">
                    <img
                      src={blog.mainImage}
                      alt={blog.title}
                      className="blogCollectionContainerBlogContainerLeftContainerImage"
                      onClick={() => handleBlogClick(blog.id)}
                      style={{ cursor: "pointer" }}
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

                      <FaUser className="blogCollectionContainerBlogContainerRightContainerTopContainerIconOne" />

                      <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextTow">
                        on
                      </p>

                      <LuClock className="blogCollectionContainerBlogContainerRightContainerTopContainerIconTwo" />

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
                        style={{ cursor: "pointer" }}
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
      </div>
    </div>
  );
};

export default BlogCollection;
