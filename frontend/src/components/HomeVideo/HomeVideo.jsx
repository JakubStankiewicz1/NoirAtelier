import React, { useState } from "react";
import "./homeVideo.css";

import HomeVideoMP4 from "../../assets/HomeVideo.mp4";
import { FaPlay } from "react-icons/fa";

const HomeVideo = () => {
  return (
    <div className="homeVideo">
      <div className="homeVideoContainer">
        <div className="homeVideoContainerTop">
          <div className="homeVideoContainerTopContainer">
            <video
              src={HomeVideoMP4}
              autoPlay
              loop
              muted
              className="homeVideoContainerTopContainerVideo"
            />

            {/* Play button */}
            <div
              className="homeVideoContainerTopContainerButton"
              onClick={() => setShowModal(true)}
              aria-label="Play video"
            >
              <FaPlay className="homeVideoContainerTopContainerButtonIcon" />
            </div>

            {/* Scrolling marquee */}
            <div className="homeVideoMarquee">
              <div className="homeVideoMarqueeInner">
                <p className="homeVideoMarqueeText">
                  Explore our exclusive properties &nbsp;&nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="homeVideoContainerBottom"></div>
      </div>
    </div>
  );
};

export default HomeVideo;
