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
                    </div>

                    {/* Middle Part */}
                    <div className="faqPaymentsContainerLeftContainerMiddle">
                        <div className="faqPaymentsContainerLeftContainerMiddleContainer">
                            <p className="faqPaymentsContainerLeftContainerMiddleContainerText">
                                Senectus sem convallis nibh velit nisi turpis conubia dui mi nostra hac turpis porta iaculis phasellus pharetra inceptos ultrices consequat eleifend fringilla ultricies adipiscing habitant leo ac.
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
                <div className="faqPaymentsContainerRightContainer">

                    {/* Top Part */}
                    <div className="faqPaymentsContainerRightContainerTop">
                        <div className="faqPaymentsContainerRightContainerTopContainer">
                            <p className="faqPaymentsContainerRightContainerTopContainerText cormorant-garamond-regular">
                                Ore Via monistri
                            </p>
                        </div>
                    </div>


                    {/* Middle Part */}
                    <div className="faqPaymentsContainerRightContainerMiddle">
                        <div className="faqPaymentsContainerRightContainerMiddleContainer">
                            <p className="faqPaymentsContainerRightContainerMiddleContainerText">
                                Augue aliquet felis donec sit varius platea vestibulum aenean commodo sapien hac commodo id vitae nulla.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="faqPaymentsContainerRightContainerBottom">
                        <div className="faqPaymentsContainerRightContainerBottomContainer">







                            <div className="faqPaymentsContainerRightContainerBottomContainerOne">
                                <div className="faqPaymentsContainerRightContainerBottomContainerOneOne">
                                    <CiCircleCheck  className='faqPaymentsContainerRightContainerBottomContainerOneOneIcon' />
                                </div>
                                <div className="faqPaymentsContainerRightContainerBottomContainerOneTwo">
                                    <div className="faqPaymentsContainerRightContainerBottomContainerOneTwoContainer">
                                        <p className="faqPaymentsContainerRightContainerBottomContainerOneTwoContainerText">
                                            Quanto Erroe
                                        </p>
                                    </div>
                                </div>
                                <div className="faqPaymentsContainerRightContainerBottomContainerOneThree">
                                    <div className="faqPaymentsContainerRightContainerBottomContainerOneThreeContainer">
                                        <p className="faqPaymentsContainerRightContainerBottomContainerOneThreeContainerText">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                                        </p>
                                    </div>
                                </div>
                            </div>










                            <div className="faqPaymentsContainerRightContainerBottomContainerOne">
                                <div className="faqPaymentsContainerRightContainerBottomContainerOneOne">
                                    <CiCircleCheck  className='faqPaymentsContainerRightContainerBottomContainerOneOneIcon' />
                                </div>
                                <div className="faqPaymentsContainerRightContainerBottomContainerOneTwo">
                                    <div className="faqPaymentsContainerRightContainerBottomContainerOneTwoContainer">
                                        <p className="faqPaymentsContainerRightContainerBottomContainerOneTwoContainerText">
                                            Quanto Erroe
                                        </p>
                                    </div>
                                </div>
                                <div className="faqPaymentsContainerRightContainerBottomContainerOneThree">
                                    <div className="faqPaymentsContainerRightContainerBottomContainerOneThreeContainer">
                                        <p className="faqPaymentsContainerRightContainerBottomContainerOneThreeContainerText">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
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