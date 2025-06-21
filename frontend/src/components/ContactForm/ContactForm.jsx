import React from "react";
import "./contactForm.css";
import assets from "../../assets/assets";

const ContactForm = () => {
  return (
    <div className="contactForm">
      <div className="contactFormContainer">
        {/* Top Part */}
        <div className="contactFormContainerTop">
          <div className="contactFormContainerTopContainer">
            <div className="contactFormContainerTopContainerLeft">
              <div className="contactFormContainerTopContainerLeftContainer">
                <img
                  src={assets.ContactFormImageOne}
                  alt=""
                  className="contactFormContainerTopContainerLeftContainerImage"
                />
              </div>
            </div>

            <div className="contactFormContainerTopContainerRight">
              <div className="contactFormContainerTopContainerRightContainer">
                <div className="contactFormContainerTopContainerRightContainerOne">
                  <div className="contactFormContainerTopContainerRightContainerOneContainer">
                    <p className="contactFormContainerTopContainerRightContainerOneContainerText cormorant-garamond-regular">
                      Support Center
                    </p>
                  </div>
                </div>

                <div className="contactFormContainerTopContainerRightContainerTwo">
                  <div className="contactFormContainerTopContainerRightContainerTwoContainer">
                    <p className="contactFormContainerTopContainerRightContainerTwoContainerText">
                      +48 123 456 789
                    </p>
                  </div>
                </div>

                <div className="contactFormContainerTopContainerRightContainerThree">
                  <div className="contactFormContainerTopContainerRightContainerThreeContainer">
                    <p className="contactFormContainerTopContainerRightContainerThreeContainerText">
                      Write direct email
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contactFormContainerTopRight">
            <div className="contactFormContainerTopRightContainer">
              <div className="contactFormContainerTopRightContainerLeft">
                <div className="contactFormContainerTopRightContainerLeftContainer">
                  <img
                    src={assets.ContactFormImageTwo}
                    alt=""
                    className="contactFormContainerTopRightContainerLeftContainerImage"
                  />
                </div>
              </div>
              <div className="contactFormContainerTopRightContainerRight">
                <div className="contactFormContainerTopRightContainerRightContainer">
                  <div className="contactFormContainerTopRightContainerRightContainerOne">
                    <div className="contactFormContainerTopRightContainerRightContainerOneContainer">
                      <p className="contactFormContainerTopRightContainerRightContainerOneContainerText">
                        Address
                      </p>
                    </div>
                  </div>

                  <div className="contactFormContainerTopRightContainerRightContainerTwo">
                    <p className="contactFormContainerTopRightContainerRightContainerTwoTextOne">
                      Alabama
                    </p>

                    <p className="contactFormContainerTopRightContainerRightContainerTwoTextTwo">
                      Birmingham
                    </p>

                    <p className="contactFormContainerTopRightContainerRightContainerTwoTextThree">
                      3935 Strother Street
                    </p>
                  </div>

                  <div className="contactFormContainerTopRightContainerRightContainerThree">
                    <div className="contactFormContainerTopRightContainerRightContainerThreeContainer">
                      <p className="contactFormContainerTopRightContainerRightContainerThreeContainerText">
                        Show on map
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="contactFormContainerBottom">
          <div className="contactFormContainerBottomContainer">
            {/* Left Part */}
            <div className="contactFormContainerBottomContainerLeft">
              <div className="contactFormContainerBottomContainerLeftContainer">
                {/* Top Part */}
                <div className="contactFormContainerBottomContainerLeftContainerTop">
                  <div className="contactFormContainerBottomContainerLeftContainerTopContainer">
                    <p className="contactFormContainerBottomContainerLeftContainerTopContainerText cormorant-garamond-regular">
                      Send us a message
                    </p>
                  </div>
                </div>

                {/* Middle Part */}
                <div className="contactFormContainerBottomContainerLeftContainerMiddle">
                  <div className="contactFormContainerBottomContainerLeftContainerMiddleContainer">
                    <div className="contactFormContainerBottomContainerLeftContainerMiddleContainerOne">
                      <div className="contactFormContainerBottomContainerLeftContainerMiddleContainerOneContainer">
                        <div className="contactFormContainerBottomContainerLeftContainerMiddleContainerOneContainerOne">
                          <div className="contactFormContainerBottomContainerLeftContainerMiddleContainerOneContainerOneContainer">
                            <input
                              type="text"
                              className="contactFormContainerBottomContainerLeftContainerMiddleContainerOneContainerOneContainerInput"
                              placeholder="First name*"
                            />
                          </div>
                        </div>

                        <div className="contactFormContainerBottomContainerLeftContainerMiddleContainerOneContainerTwo">
                          <div className="contactFormContainerBottomContainerLeftContainerMiddleContainerOneContainerTwoContainer">
                            <input
                              type="text"
                              className="contactFormContainerBottomContainerLeftContainerMiddleContainerOneContainerTwoContainerInput"
                              placeholder="Last name"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="contactFormContainerBottomContainerLeftContainerMiddleContainerTwo">
                      <div className="contactFormContainerBottomContainerLeftContainerMiddleContainerTwoContainer">
                        <div className="contactFormContainerBottomContainerLeftContainerMiddleContainerTwoContainerOne">
                          <div className="contactFormContainerBottomContainerLeftContainerMiddleContainerTwoContainerOneContainer">
                            <input
                              type="text"
                              className="contactFormContainerBottomContainerLeftContainerMiddleContainerTwoContainerOneContainerInput"
                              placeholder="Mail"
                            />
                          </div>
                        </div>

                        <div className="contactFormContainerBottomContainerLeftContainerMiddleContainerTwoContainerTwo">
                          <div className="contactFormContainerBottomContainerLeftContainerMiddleContainerTwoContainerTwoContainer">
                            <input
                              type="text"
                              className="contactFormContainerBottomContainerLeftContainerMiddleContainerTwoContainerTwoContainerInput"
                              placeholder="Phone"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="contactFormContainerBottomContainerLeftContainerMiddleContainerThree">
                      <div className="contactFormContainerBottomContainerLeftContainerMiddleContainerThreeContainer">
                        <textarea
                          name=""
                          id=""
                          className="contactFormContainerBottomContainerLeftContainerMiddleContainerThreeContainerTextArea"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Part */}
                <div className="contactFormContainerBottomContainerLeftContainerBottom">
                  <div className="contactFormContainerBottomContainerLeftContainerBottomContainer">
                    <div className="contactFormContainerBottomContainerLeftContainerBottomContainerButton">
                      <div className="contactFormContainerBottomContainerLeftContainerBottomContainerButtonContainer">
                        <p className="contactFormContainerBottomContainerLeftContainerBottomContainerButtonContainerText">
                          Message Us
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Part */}
            <div className="contactFormContainerBottomContainerRight">
              <div className="contactFormContainerBottomContainerRightContainer">
                <img
                  src={assets.ContactFormImage}
                  alt=""
                  className="contactFormContainerBottomContainerRightContainerImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
