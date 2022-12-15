import React from "react";
import bannerImage from "../../assets/images/hero-banner-image.png";
import "./Banner.scss";
const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-left">
            <div className="banner-left-wrapper">
              <h2 className="banner-heading text-black fs-48">
                A New Way to Invest in Agriculture
              </h2>
              <p className="banner-pra text-black-light-gray fs-18">
                Zou provides farmes, ranchers, private foresters, and
                agricultural producers with online self service applications and
                educational materials.
              </p>
              <button type="button" className="invest-btn d-flex align-items-center justify-content-center text-white fs-18">
              Invest Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
