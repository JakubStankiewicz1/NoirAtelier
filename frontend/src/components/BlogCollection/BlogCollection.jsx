import React from 'react';
import "./blogCollection.css";
import { FaUser } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import assets from '../../assets/assets';

const BlogCollection = () => {
  return (
    <div className='blogCollection'>
        <div className="blogCollectionContainer">

            {/* Blog Element 1 */}
            <div className="blogCollectionContainerBlog">
                <div className="blogCollectionContainerBlogContainer">
                    {/* Left Part */}
                    <div className="blogCollectionContainerBlogContainerLeft">
                        <div className="blogCollectionContainerBlogContainerLeftContainer">
                            <div className="blogCollectionContainerBlogContainerLeftImageWrapper">
                                <img 
                                    src={assets.FaqBenefitsImageOne} 
                                    alt="Blog post featured image" 
                                    className='blogCollectionContainerBlogContainerLeftContainerImage' 
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
                                        Published by
                                    </p>

                                    <FaUser className='blogCollectionContainerBlogContainerRightContainerTopContainerIconOne' />

                                    <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextTow">
                                        on
                                    </p>

                                    <LuClock className='blogCollectionContainerBlogContainerRightContainerTopContainerIconTwo' />

                                    <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextThree">
                                        December 15, 2024
                                    </p>
                                </div>
                            </div>                            {/* Middle Part */}
                            <div className="blogCollectionContainerBlogContainerRightContainerMiddle">
                                <div className="blogCollectionContainerBlogContainerRightContainerMiddleContainer">
                                    <p className="blogCollectionContainerBlogContainerRightContainerMiddleContainerText cormorant-garamond-regular">
                                        How to Choose the Perfect Investment Property?
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Part */}
                            <div className="blogCollectionContainerBlogContainerRightContainerBottom">
                                <p className="blogCollectionContainerBlogContainerRightContainerBottomContainer">
                                    <p className="blogCollectionContainerBlogContainerRightContainerBottomContainerText">
                                        Choosing the right investment property requires careful analysis of location, growth potential, and building condition. We present key factors that will help you make a smart investment decision.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Element 2 */}
            <div className="blogCollectionContainerBlog">
                <div className="blogCollectionContainerBlogContainer">
                    {/* Left Part */}
                    <div className="blogCollectionContainerBlogContainerLeft">
                        <div className="blogCollectionContainerBlogContainerLeftContainer">
                            <div className="blogCollectionContainerBlogContainerLeftImageWrapper">
                                <img 
                                    src={assets.FaqBenefitsImageOne} 
                                    alt="Blog post featured image" 
                                    className='blogCollectionContainerBlogContainerLeftContainerImage' 
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
                                        Published by
                                    </p>

                                    <FaUser className='blogCollectionContainerBlogContainerRightContainerTopContainerIconOne' />

                                    <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextTow">
                                        on
                                    </p>

                                    <LuClock className='blogCollectionContainerBlogContainerRightContainerTopContainerIconTwo' />

                                    <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextThree">
                                        November 28, 2024
                                    </p>
                                </div>
                            </div>                            {/* Middle Part */}
                            <div className="blogCollectionContainerBlogContainerRightContainerMiddle">
                                <div className="blogCollectionContainerBlogContainerRightContainerMiddleContainer">
                                    <p className="blogCollectionContainerBlogContainerRightContainerMiddleContainerText cormorant-garamond-regular">
                                        Residential Architecture Trends 2024
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Part */}
                            <div className="blogCollectionContainerBlogContainerRightContainerBottom">
                                <p className="blogCollectionContainerBlogContainerRightContainerBottomContainer">
                                    <p className="blogCollectionContainerBlogContainerRightContainerBottomContainerText">
                                        Discover the latest trends in apartment and home design. From minimalist interiors to eco-friendly solutions - see what will be trending in the upcoming year in real estate.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Element 3 */}
            <div className="blogCollectionContainerBlog">
                <div className="blogCollectionContainerBlogContainer">
                    {/* Left Part */}
                    <div className="blogCollectionContainerBlogContainerLeft">
                        <div className="blogCollectionContainerBlogContainerLeftContainer">
                            <div className="blogCollectionContainerBlogContainerLeftImageWrapper">
                                <img 
                                    src={assets.FaqBenefitsImageOne} 
                                    alt="Blog post featured image" 
                                    className='blogCollectionContainerBlogContainerLeftContainerImage' 
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
                                        Published by
                                    </p>

                                    <FaUser className='blogCollectionContainerBlogContainerRightContainerTopContainerIconOne' />

                                    <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextTow">
                                        on
                                    </p>

                                    <LuClock className='blogCollectionContainerBlogContainerRightContainerTopContainerIconTwo' />

                                    <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextThree">
                                        October 10, 2024
                                    </p>
                                </div>
                            </div>                            {/* Middle Part */}
                            <div className="blogCollectionContainerBlogContainerRightContainerMiddle">
                                <div className="blogCollectionContainerBlogContainerRightContainerMiddleContainer">
                                    <p className="blogCollectionContainerBlogContainerRightContainerMiddleContainerText cormorant-garamond-regular">
                                        Mortgage Guide for First-Time Buyers
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Part */}
                            <div className="blogCollectionContainerBlogContainerRightContainerBottom">
                                <p className="blogCollectionContainerBlogContainerRightContainerBottomContainer">
                                    <p className="blogCollectionContainerBlogContainerRightContainerBottomContainerText">
                                        Everything you need to know about mortgages - from initial requirements to the application process. Practical tips and essential information for first-time home buyers.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Element 4 */}
            <div className="blogCollectionContainerBlog">
                <div className="blogCollectionContainerBlogContainer">
                    {/* Left Part */}
                    <div className="blogCollectionContainerBlogContainerLeft">
                        <div className="blogCollectionContainerBlogContainerLeftContainer">
                            <div className="blogCollectionContainerBlogContainerLeftImageWrapper">
                                <img 
                                    src={assets.FaqBenefitsImageOne} 
                                    alt="Blog post featured image" 
                                    className='blogCollectionContainerBlogContainerLeftContainerImage' 
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
                                        Published by
                                    </p>

                                    <FaUser className='blogCollectionContainerBlogContainerRightContainerTopContainerIconOne' />

                                    <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextTow">
                                        on
                                    </p>

                                    <LuClock className='blogCollectionContainerBlogContainerRightContainerTopContainerIconTwo' />

                                    <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextThree">
                                        September 22, 2024
                                    </p>
                                </div>
                            </div>                            {/* Middle Part */}
                            <div className="blogCollectionContainerBlogContainerRightContainerMiddle">
                                <div className="blogCollectionContainerBlogContainerRightContainerMiddleContainer">
                                    <p className="blogCollectionContainerBlogContainerRightContainerMiddleContainerText cormorant-garamond-regular">
                                        Best Neighborhoods to Live in the City
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Part */}
                            <div className="blogCollectionContainerBlogContainerRightContainerBottom">
                                <p className="blogCollectionContainerBlogContainerRightContainerBottomContainer">
                                    <p className="blogCollectionContainerBlogContainerRightContainerBottomContainerText">
                                        Review of the best neighborhoods to live in, considering transportation, infrastructure, safety, and development opportunities. Find out which areas offer the best quality of life.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Element 5 */}
            <div className="blogCollectionContainerBlog">
                <div className="blogCollectionContainerBlogContainer">
                    {/* Left Part */}
                    <div className="blogCollectionContainerBlogContainerLeft">
                        <div className="blogCollectionContainerBlogContainerLeftContainer">
                            <div className="blogCollectionContainerBlogContainerLeftImageWrapper">
                                <img 
                                    src={assets.FaqBenefitsImageOne} 
                                    alt="Blog post featured image" 
                                    className='blogCollectionContainerBlogContainerLeftContainerImage' 
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
                                        Published by
                                    </p>

                                    <FaUser className='blogCollectionContainerBlogContainerRightContainerTopContainerIconOne' />

                                    <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextTow">
                                        on
                                    </p>

                                    <LuClock className='blogCollectionContainerBlogContainerRightContainerTopContainerIconTwo' />

                                    <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextThree">
                                        August 15, 2024
                                    </p>
                                </div>
                            </div>                            {/* Middle Part */}
                            <div className="blogCollectionContainerBlogContainerRightContainerMiddle">
                                <div className="blogCollectionContainerBlogContainerRightContainerMiddleContainer">
                                    <p className="blogCollectionContainerBlogContainerRightContainerMiddleContainerText cormorant-garamond-regular">
                                        Smart Home - Future Technologies in Your Home
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Part */}
                            <div className="blogCollectionContainerBlogContainerRightContainerBottom">
                                <p className="blogCollectionContainerBlogContainerRightContainerBottomContainer">
                                    <p className="blogCollectionContainerBlogContainerRightContainerBottomContainerText">
                                        Smart home systems are revolutionizing the way we live. Discover the latest technologies that increase comfort, security, and energy efficiency in your apartment.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Element 6 */}
            <div className="blogCollectionContainerBlog">
                <div className="blogCollectionContainerBlogContainer">
                    {/* Left Part */}
                    <div className="blogCollectionContainerBlogContainerLeft">
                        <div className="blogCollectionContainerBlogContainerLeftContainer">
                            <div className="blogCollectionContainerBlogContainerLeftImageWrapper">
                                <img 
                                    src={assets.FaqBenefitsImageOne} 
                                    alt="Blog post featured image" 
                                    className='blogCollectionContainerBlogContainerLeftContainerImage' 
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
                                        Published by
                                    </p>

                                    <FaUser className='blogCollectionContainerBlogContainerRightContainerTopContainerIconOne' />

                                    <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextTow">
                                        on
                                    </p>

                                    <LuClock className='blogCollectionContainerBlogContainerRightContainerTopContainerIconTwo' />

                                    <p className="blogCollectionContainerBlogContainerRightContainerTopContainerTextThree">
                                        July 3, 2024
                                    </p>
                                </div>
                            </div>                            {/* Middle Part */}
                            <div className="blogCollectionContainerBlogContainerRightContainerMiddle">
                                <div className="blogCollectionContainerBlogContainerRightContainerMiddleContainer">
                                    <p className="blogCollectionContainerBlogContainerRightContainerMiddleContainerText cormorant-garamond-regular">
                                        Home Buying Process Step by Step
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Part */}
                            <div className="blogCollectionContainerBlogContainerRightContainerBottom">
                                <p className="blogCollectionContainerBlogContainerRightContainerBottomContainer">
                                    <p className="blogCollectionContainerBlogContainerRightContainerBottomContainerText">
                                        Complete guide to the property buying process - from searching for offers, through negotiations, to finalizing the transaction. Learn all the stages and avoid common mistakes.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default BlogCollection