import React from 'react';
import './offertDesign.css';

const OffertDesign = () => {
  return (
    <div className='offertDesign'>
        <div className="offertDesignContainer">
            {/* Top Part */}
            <div className="offertDesignContainerTop">
                <div className="offertDesignContainerTopContainer">
                    <p className="offertDesignContainerTopContainerText cormorant-garamond-regular">
                        Rzuty i przekrój
                    </p>
                </div>
            </div>

            <div className="offertDesignDivider">
                <div className="offertDesignDividerLine" />
            </div>

            {/* Bottom Part */}
            <div className="offertDesignContainerBottom">
                <div className="offertDesignContainerBottomContainer">
                    {/* Left Part */}
                    <div className="offertDesignContainerBottomContainerLeft">
                        <img src="https://modernhouse-projekty.pl/wp-content/uploads/2024/06/Modern_House_Brick_House_118_KONCEPCJA-PARTER-scaled.webp" alt="" className='offertDesignContainerBottomContainerLeftImage' />
                    </div>

                    {/* Right Part */}
                    <div className="offertDesignContainerBottomContainerRight">
                        <img src="https://modernhouse-projekty.pl/wp-content/uploads/2024/06/Modern_House_Brick_House_118_KONCEPCJA-PRZEKROJ-scaled.webp" alt="" className='offertDesignContainerBottomContainerRightImage' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OffertDesign