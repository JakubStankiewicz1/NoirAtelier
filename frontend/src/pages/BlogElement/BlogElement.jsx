import React from "react";
import "./blogElement.css";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, getRelatedBlogs } from "../../data/blogsData";
import {
  FaUser,
  FaClock,
  FaArrowLeft,
  FaShare,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Fotter from "../../components/Fotter/Fotter";

const BlogElement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogData = getBlogById(id);
  const relatedBlogs = getRelatedBlogs(parseInt(id), 3);

  if (!blogData) {
    return (
      <div className="blogElement">
        <div className="blogElementErrorContainer">
          <div className="blogElementError">
            <h2>Blog nie został znaleziony</h2>
            <p>Przepraszamy, nie znaleźliśmy artykułu o ID: {id}</p>
            <button
              className="blogElementBackButton"
              onClick={() => navigate("/blog")}
            >
              <FaArrowLeft /> Powrót do bloga
            </button>
          </div>
        </div>
        <Fotter />
      </div>
    );
  }

  const handleRelatedBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    navigate("/blog");
  };

  const handleShareClick = (platform) => {
    const url = window.location.href;
    const title = blogData.title;

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="blogElement">
      {/* Header Section */}
      <div className="blogElementHeader">
        <div className="blogElementHeaderContainer">
          <button className="blogElementBackButton" onClick={handleBackClick}>
            <FaArrowLeft /> Back to Blog
          </button>

          <div className="blogElementHeaderContent">
            <div className="blogElementCategory">
              <span className="blogElementCategoryTag">
                {blogData.category}
              </span>
            </div>

            <h1 className="blogElementTitle cormorant-garamond-regular">
              {blogData.title}
            </h1>

            <div className="blogElementMeta">
              <div className="blogElementMetaItem">
                <FaUser className="blogElementMetaIcon" />
                <span>By {blogData.author}</span>
              </div>

              <div className="blogElementMetaItem">
                <FaClock className="blogElementMetaIcon" />
                <span>
                  {blogData.publishDate} • {blogData.readTime} read
                </span>
              </div>
            </div>

            <div className="blogElementShare">
              <span className="blogElementShareLabel">Share:</span>
              <div className="blogElementShareButtons">
                <button
                  className="blogElementShareButton facebook"
                  onClick={() => handleShareClick("facebook")}
                >
                  <FaFacebook />
                </button>
                <button
                  className="blogElementShareButton twitter"
                  onClick={() => handleShareClick("twitter")}
                >
                  <FaTwitter />
                </button>
                <button
                  className="blogElementShareButton linkedin"
                  onClick={() => handleShareClick("linkedin")}
                >
                  <FaLinkedin />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="blogElementFeaturedImage">
        <img src={blogData.mainImage} alt={blogData.title} />
      </div>

      {/* Content Section */}
      <div className="blogElementContent">
        <div className="blogElementContentContainer">
          <div className="blogElementContentText">
            <div
              className="blogElementContentBody"
              dangerouslySetInnerHTML={{ __html: blogData.content }}
            />
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="blogElementTags">
        <div className="blogElementTagsContainer">
          <h3>Tags:</h3>
          <div className="blogElementTagsList">
            {blogData.tags.map((tag, index) => (
              <span key={index} className="blogElementTag">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <div className="blogElementRelated">
          <div className="blogElementRelatedContainer">
            <h2 className="blogElementRelatedTitle cormorant-garamond-regular">
              Related Articles
            </h2>

            <div className="blogElementRelatedGrid">
              {relatedBlogs.map((relatedBlog) => (
                <div
                  key={relatedBlog.id}
                  className="blogElementRelatedCard"
                  onClick={() => handleRelatedBlogClick(relatedBlog.id)}
                >
                  <div className="blogElementRelatedCardImage">
                    <img src={relatedBlog.mainImage} alt={relatedBlog.title} />
                  </div>

                  <div className="blogElementRelatedCardContent">
                    <span className="blogElementRelatedCardCategory">
                      {relatedBlog.category}
                    </span>

                    <h3 className="blogElementRelatedCardTitle">
                      {relatedBlog.title}
                    </h3>

                    <p className="blogElementRelatedCardExcerpt">
                      {relatedBlog.excerpt.length > 100
                        ? relatedBlog.excerpt.substring(0, 100) + "..."
                        : relatedBlog.excerpt}
                    </p>

                    <div className="blogElementRelatedCardMeta">
                      <span>{relatedBlog.publishDate}</span>
                      <span>•</span>
                      <span>{relatedBlog.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Fotter />
    </div>
  );
};

export default BlogElement;
