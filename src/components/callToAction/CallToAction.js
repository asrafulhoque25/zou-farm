import React from "react";
import './CallToAction.scss'
const CallToAction = () => {
  return (
    <div className="call-to-action">
      <div className="min-container">
        <div className="call-to-action-wrapper bg-white d-flex align-items-center justify-content-center">
          <div>
            <h2 className="fs-36 lh-36 text-black">The future of <span className="text-green">Farm Investing</span> is Zou</h2>
            <button type="button" className="invest-btn bg-green fs-18 text-white">
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
