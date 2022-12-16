import React from "react";
import quote from "../../assets/images/quote-down-icon.svg";
import Slider from "react-slick";
import profile1 from '../../assets/images/testimonial1.png'
import profile2 from '../../assets/images/testimonial2.png'
import next from '../../assets/images/nextIcon.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.scss";

const Testimonial = (props) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding:'80px',
   
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonial">
      <div className="container">
        <div className="testimonial-heading">
          <h2 className="fs-36 text-black">
            What investors like you <br /> are saying about Zou
          </h2>
          <img src={quote} className="img-fluid quote-image" alt="" />
        </div>
        </div>
        <div className="slider-wrapper">
          <Slider {...settings}>
            <div>
              <div className="slider-item">
                <div className="profile">
                  <div className="profile-info d-flex align-items-center">
                  <img src={profile1} className='img-fluid' alt="" />
                  <div>
                    <a href="#" className="profile-name text-green fs-18 lf-24">Fernando Soler</a>
                    <h4 className="fs-18 text-black-light-gray lh-24">Telecommunication Engineer</h4>
                  </div>
                  </div>
                </div>
                <div className="testimonial-content d-flex align-items-start">
                    <p className="quote">“</p>
                    <p className="quote-text fs-18 lh-32 text-black-light">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae </p>
                </div>
              </div>
            </div>
            <div>
            <div className="slider-item">
                <div className="profile">
                  <div className="profile-info d-flex align-items-center">
                  <img src={profile2} className='img-fluid' alt="" />
                  <div>
                    <a href="#" className="profile-name text-green fs-18 lf-24">Fernando Soler</a>
                    <h4 className="fs-18 text-black-light-gray lh-24">Telecommunication Engineer</h4>
                  </div>
                  </div>
                </div>
                <div className="testimonial-content d-flex align-items-start">
                    <p className="quote">“</p>
                    <p className="quote-text fs-18 lh-32 text-black-light">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae </p>
                </div>
              </div>
            </div>
            <div>
            <div className="slider-item">
                <div className="profile">
                  <div className="profile-info d-flex align-items-center">
                  <img src={profile1} className='img-fluid' alt="" />
                  <div>
                    <a href="#" className="profile-name text-green fs-18 lf-24">Fernando Soler</a>
                    <h4 className="fs-18 text-black-light-gray lh-24">Telecommunication Engineer</h4>
                  </div>
                  </div>
                </div>
                <div className="testimonial-content d-flex align-items-start">
                    <p className="quote">“</p>
                    <p className="quote-text fs-18 lh-32 text-black-light">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae </p>
                </div>
              </div>
            </div>
            <div>
            <div className="slider-item">
                <div className="profile">
                  <div className="profile-info d-flex align-items-center">
                  <img src={profile1} className='img-fluid' alt="" />
                  <div>
                    <a href="#" className="profile-name text-green fs-18 lf-24">Fernando Soler</a>
                    <h4 className="fs-18 text-black-light-gray lh-24">Telecommunication Engineer</h4>
                  </div>
                  </div>
                </div>
                <div className="testimonial-content d-flex align-items-start">
                    <p className="quote">“</p>
                    <p className="quote-text fs-18 lh-32 text-black-light">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae </p>
                </div>
              </div>
            </div>
            <div>
            <div className="slider-item">
                <div className="profile">
                  <div className="profile-info d-flex align-items-center">
                  <img src={profile2} className='img-fluid' alt="" />
                  <div>
                    <a href="#" className="profile-name text-green fs-18 lf-24">Fernando Soler</a>
                    <h4 className="fs-18 text-black-light-gray lh-24">Telecommunication Engineer</h4>
                  </div>
                  </div>
                </div>
                <div className="testimonial-content d-flex align-items-start">
                    <p className="quote">“</p>
                    <p className="quote-text fs-18 lh-32 text-black-light">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
    
    </div>
  );
};

export default Testimonial;
