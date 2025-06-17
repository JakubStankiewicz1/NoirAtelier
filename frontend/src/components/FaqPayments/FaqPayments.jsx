import React from 'react';
import "./faqPayments.css";
import assets from '../../assets/assets';
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";

const FaqPayments = () => {
  return (
    <div className='faqPayments'>
        <div className="faqPaymentsContainer">

            {/* Left Part */}
            <div className="faqPaymentsContainerLeft">
                <div className="faqPaymentsContainerLeftContainer">
                    {/* Top Part */}
                    <div className="faqPaymentsContainerLeftContainerTop">
                        <div className="faqPaymentsContainerLeftContainerTopContainer">
                            <p className="faqPaymentsContainerLeftContainerTopContainerText cormorant-garamond-regular">
                                Payments
                            </p>
                        </div>
                    </div>                    {/* Middle Part */}
                    <div className="faqPaymentsContainerLeftContainerMiddle">
                        <div className="faqPaymentsContainerLeftContainerMiddleContainer">
                            <p className="faqPaymentsContainerLeftContainerMiddleContainerText">
                                Experience seamless and secure payment processing with Noir Atelier. We accept all major payment methods and provide flexible financing options to make your luxury property investment as smooth as possible. Our encrypted payment system ensures your financial information remains completely protected.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="faqPaymentsContainerLeftContainerBottom">
                        <div className="faqPaymentsContainerLeftContainerBottomContainer">
                            <img src={assets.FaqPaymentsOne} alt="" className='faqPaymentsContainerLeftContainerBottomContainerIcon' />
                            <img src={assets.FaqPaymentsTwo} alt="" className='faqPaymentsContainerLeftContainerBottomContainerIcon' />
                            <img src={assets.FaqPaymentsThree} alt="" className='faqPaymentsContainerLeftContainerBottomContainerIcon' />
                            <img src={assets.FaqPaymentsFour} alt="" className='faqPaymentsContainerLeftContainerBottomContainerIcon' />
                            <img src={assets.FaqPaymentsFive} alt="" className='faqPaymentsContainerLeftContainerBottomContainerIcon' />

                        </div>
                    </div>
                </div>
            </div>


            {/* Right Part */}
            <div className="faqPaymentsContainerRight">
                <div className="faqPaymentsContainerRightContainer">                    {/* Top Part */}
                    <div className="faqPaymentsContainerRightContainerTop">
                        <div className="faqPaymentsContainerRightContainerTopContainer">
                            <p className="faqPaymentsContainerRightContainerTopContainerText cormorant-garamond-regular">
                                Secure Transactions
                            </p>
                        </div>
                    </div>                    {/* Middle Part */}
                    <div className="faqPaymentsContainerRightContainerMiddle">
                        <div className="faqPaymentsContainerRightContainerMiddleContainer">
                            <p className="faqPaymentsContainerRightContainerMiddleContainerText">
                                Your trust is our priority. We utilize industry-leading security protocols and encryption technology to safeguard every transaction, ensuring complete peace of mind for all your luxury property investments.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="faqPaymentsContainerRightContainerBottom">
                        <div className="faqPaymentsContainerRightContainerBottomContainer">

                            {/* First Feature */}
                            <div className="faqPaymentsContainerRightContainerBottomContainerOne">
                                <div className="faqPaymentsContainerRightContainerBottomContainerOneOne">
                                    <CiCircleCheck className='faqPaymentsContainerRightContainerBottomContainerOneOneIcon' />
                                </div>                                <div className="faqPaymentsContainerRightContainerBottomContainerOneTwo">
                                    <div className="faqPaymentsContainerRightContainerBottomContainerOneTwoContainer">
                                        <p className="faqPaymentsContainerRightContainerBottomContainerOneTwoContainerText">
                                            Instant Processing
                                        </p>
                                    </div>
                                </div>
                                <div className="faqPaymentsContainerRightContainerBottomContainerOneThree">
                                    <div className="faqPaymentsContainerRightContainerBottomContainerOneThreeContainer">
                                        <p className="faqPaymentsContainerRightContainerBottomContainerOneThreeContainerText">
                                            Experience lightning-fast payment processing with real-time confirmation for all your luxury property transactions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Second Feature */}
                            <div className="faqPaymentsContainerRightContainerBottomContainerOne">
                                <div className="faqPaymentsContainerRightContainerBottomContainerOneOne">
                                    <CiCircleCheck className='faqPaymentsContainerRightContainerBottomContainerOneOneIcon' />
                                </div>                                <div className="faqPaymentsContainerRightContainerBottomContainerOneTwo">
                                    <div className="faqPaymentsContainerRightContainerBottomContainerOneTwoContainer">
                                        <p className="faqPaymentsContainerRightContainerBottomContainerOneTwoContainerText">
                                            Flexible Options
                                        </p>
                                    </div>
                                </div>
                                <div className="faqPaymentsContainerRightContainerBottomContainerOneThree">
                                    <div className="faqPaymentsContainerRightContainerBottomContainerOneThreeContainer">
                                        <p className="faqPaymentsContainerRightContainerBottomContainerOneThreeContainerText">
                                            Choose from multiple payment plans and financing solutions tailored to meet your individual investment needs and preferences.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default FaqPayments