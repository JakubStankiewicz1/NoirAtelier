import React from 'react';
import "./blogHeader.css";

const BlogHeader = () => {
  return (
    <div className='blogHeader'>
        <div className="blogHeaderContainer">
            {/* Top Part */}
            <div className="blogHeaderContainerTop">
                <div className="blogHeaderContainerTopContainer">
                    <p className="blogHeaderContainerTopContainerText">
                        Blog
                    </p>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="blogHeaderContainerBottom">
                <div className="blogHeaderContainerBottomContainer">
                    <p className="blogHeaderContainerBottomContainerText cormorant-garamond-regular">
                        See what’s new in our blog
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogHeader