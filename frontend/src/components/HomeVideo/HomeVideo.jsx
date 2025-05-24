import React, { useState } from 'react';
import "./homeVideo.css";

import HomeVideoMP4 from "../../assets/HomeVideo.mp4";

const HomeVideo = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='homeVideo'>
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
                    {/* Przyciemnienie */}
                    <div className="homeVideoOverlay" />
                    {/* Tekst przewijający */}
                    <div className="homeVideoMarquee">
                      <span>
                        Wyjątkowe miejsca na Twoje wydarzenie &nbsp;•&nbsp; Luksusowe apartamenty &nbsp;•&nbsp; Noir Atelier &nbsp;•&nbsp;
                      </span>
                    </div>
                    {/* Play button */}
                    <button
                      className="homeVideoPlayButton"
                      onClick={() => setShowModal(true)}
                      aria-label="Play video"
                    >
                      <div className="playIcon"></div>
                    </button>
                </div>
            </div>

            <div className="homeVideoContainerBottom">
                <div className="homeVideoContainerBottomText">
                    <p className="homeVideoContainerBottomTextTitle cormorant-garamond-regular">
                        Explore Our Unique Properties
                    </p>
                    <p className="homeVideoContainerBottomTextDescription cormorant-garamond-regular">
                        Discover the perfect space for your next event or stay.
                    </p>
                </div>
            </div>
        </div>

        {/* Modal fullscreen */}
        {showModal && (
          <div className="homeVideoModal">
            <div className="homeVideoModalOverlay" onClick={() => setShowModal(false)} />
            <div className="homeVideoModalContent">
              <button className="homeVideoModalClose" onClick={() => setShowModal(false)}>&times;</button>
              <video
                src={HomeVideoMP4}
                autoPlay
                loop
                controls
                className="homeVideoModalVideo"
              />
            </div>
          </div>
        )}
    </div>
  )
}

export default HomeVideo