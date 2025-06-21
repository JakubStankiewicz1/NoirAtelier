import React from "react";
import "./propertiesCollectionLatestNews.css";
import { PiSquaresFourFill } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { getRecentBlogs } from "../../data/blogsData";

const PropertiesCollectionLatestNews = () => {
  const navigate = useNavigate();
  const recentBlogs = getRecentBlogs(3);

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="propertiesCollectionLatestNews">
      <div className="propertiesCollectionLatestNewsContainer">
        {/* First Part */}
        <div className="propertiesCollectionLatestNewsContainerFirst">
          <div className="propertiesCollectionLatestNewsContainerFirstContainer">
            <p className="propertiesCollectionLatestNewsContainerFirstContainerText">
              OUR LATEST NEWS
            </p>
          </div>
        </div>

        {/* Second Part */}
        <div className="propertiesCollectionLatestNewsContainerSecond">
          <div className="propertiesCollectionLatestNewsContainerSecondContainer">
            <p className="propertiesCollectionLatestNewsContainerSecondContainerText cormorant-garamond-regular">
              Be on time with news that we provide{" "}
              <span className="propertiesCollectionLatestNewsContainerSecondContainerTextTextOne">
                for you
              </span>
            </p>
          </div>
        </div>

        {/* Third Part */}
        <div className="propertiesCollectionLatestNewsContainerThird">
          <div className="propertiesCollectionLatestNewsContainerThirdContainer">
            {recentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="propertiesCollectionLatestNewsContainerThirdContainerElement"
              >
                <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainer">
                  {/* Top Part */}
                  <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerTop">
                    <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerTopContainer">
                      <img
                        src={blog.mainImage}
                        alt={blog.title}
                        className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerTopContainerImage"
                        onClick={() => handleBlogClick(blog.id)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  {/* Bottom Part */}
                  <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottom">
                    <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainer">
                      <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerOne">
                        <p
                          className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerOneText"
                          onClick={() => handleBlogClick(blog.id)}
                          style={{ cursor: "pointer" }}
                        >
                          {blog.title}
                        </p>
                      </div>

                      <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerTwo">
                        <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerTwoDiv" />
                      </div>

                      <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThree">
                        <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainer">
                          <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeft">
                            <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftOne">
                              <FaUserCircle className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftOneIcon" />
                            </div>
                            <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftTwo">
                              <p className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftTwoText">
                                {blog.author}
                              </p>
                            </div>
                          </div>

                          <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerRight">
                            <FiClock className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerRightIcon" />
                            <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerRightText">
                              {blog.publishDate}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fourth Part */}
        <div className="propertiesCollectionLatestNewsContainerFourth">
          <div className="propertiesCollectionLatestNewsContainerFourthContainer">
            <NavLink
              to="/blog"
              className="propertiesCollectionLatestNewsContainerFourthContainerButton"
            >
              {/* Left Part */}
              <div className="propertiesCollectionLatestNewsContainerFourthContainerLeft">
                <PiSquaresFourFill className="propertiesCollectionLatestNewsContainerFourthContainerLeftImage" />
              </div>

              {/* Right Part */}
              <div className="propertiesCollectionLatestNewsContainerFourthContainerRight">
                <p className="propertiesCollectionLatestNewsContainerFourthContainerRightText">
                  See More
                </p>
              </div>
            </NavLink>
          </div>
        </div>

        {/* Fifth Part */}
        <div className="propertiesCollectionLatestNewsContainerFifth">
          <div className="propertiesCollectionLatestNewsContainerFifthContainer">
            <div className="propertiesCollectionLatestNewsMarquee">
              <div className="propertiesCollectionLatestNewsMarqueeInner">
                <span className="propertiesCollectionLatestNewsContainerFifthContainerText">
                  LUXURY ESTATES • PREMIUM VILLAS • EXCLUSIVE APARTMENTS • NOIR
                  ATELIER • LUXURY ESTATES • PREMIUM VILLAS • EXCLUSIVE
                  APARTMENTS • NOIR ATELIER • LUXURY ESTATES • PREMIUM VILLAS •
                  EXCLUSIVE APARTMENTS • NOIR ATELIER •
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCollectionLatestNews;
