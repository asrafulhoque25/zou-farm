import React from "react";
import processBg from "../../assets/images/workprocessBg.png";
import "./Workprocess.scss";
const Workprocess = () => {
  return (
    <div className="workprocess">
      <div className="container">
        <div
          className="process-wrapper"
          style={{ backgroundImage: `url(${processBg})` }}
        >
          <div className="process-content">
            <div className="common-heading  text-center">
              <h6 className="common-title fs-36 lh-64 text-white">
                How it works
              </h6>
              <div className="section-tag fs-18 lh-32 text-white">
                Take your pick from the supply chain and participate in
                agribusiness projects that are backed up not only by Zou, but
                also by the best land, family heritage, innovation and overall
                superior expertise.
              </div>
            </div>
            <div className="process-step">
              <ul className="step-wrapper d-flex justify-content-between align-items-center ">
                <li className="step-count fs-18 d-flex align-items-center justify-content-center active">
                  01
                </li>
                <li className="step-count fs-18 d-flex align-items-center justify-content-center">
                  02
                </li>
                <li className="step-count fs-18 d-flex align-items-center justify-content-center">
                  03
                </li>
                <li className="step-count fs-18 d-flex align-items-center justify-content-center">
                  04
                </li>
              </ul>

              <div className="step-content d-flex align-items-center justify-content-between">
                <div className="step-content-left">
                  <h3 className="fs-24 text-white lh-32">
                    Select your farmshare and complete reservation form.
                  </h3>
                </div>
                <div className="step-content-right">
                  <p className="fs-16 lh-24 text-off-white">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workprocess;
