import React from "react";
import CallToAction from "../callToAction/CallToAction";
import footerlogo from "../../assets/images/footer-logo.svg";
import footerBg from '../../assets/images/footer-bg.png'
import "./Footer.scss";
const Footer = () => {
  return (
    
    <div className="footer"  style={{ backgroundImage: `url(${footerBg})` }}>
    <CallToAction />
      <div className="min-container">
        <div className="footer-wrapper d-flex justify-content-between">
          <div className="footer-item">
            <h4 className="mb-20 text-black fs-16 text-uppercase">
              footerheading
            </h4>
            <ul>
              <li>
                <a href="#" className="d-block mb-20 footer-link text-gray">
                  About Us{" "}
                </a>
                <a href="#" className="d-block mb-20 footer-link text-gray">
                  Team
                </a>
                <a href="#" className="d-block mb-20 footer-link text-gray">
                  Careers
                </a>
                <a href="#" className="d-block mb-20 footer-link text-gray">
                  About Us{" "}
                </a>
                <a href="#" className="d-block mb-20 footer-link text-gray">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4 className="mb-20 text-black fs-16 text-uppercase">INVEST</h4>
            <ul>
              <li>
                <a href="#" className="d-block mb-20 footer-link text-gray">
                  Features
                </a>
                <a href="#" className="d-block mb-20 footer-link text-gray">
                  How it works
                </a>
                <a href="#" className="d-block mb-20 footer-link text-gray">
                  Pricing
                </a>
                <a href="#" className="d-block mb-20 footer-link text-gray">
                  Login
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4 className="mb-20 text-black fs-16 text-uppercase">LEGAL</h4>
            <ul>
              <li>
                <a href="#" className="d-block mb-20 footer-link text-gray">
                  Privacy
                </a>
                <a href="#" className="d-block mb-20 footer-link text-gray">
                  Terms
                </a>
                <a href="#" className="d-block mb-20 footer-link text-gray">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <div className="footer-info">
              <h5 className="footer-info-heading">Blog Zou</h5>
              <p className="info-pra">Write email to us</p>
              <a className="mail" href="mailto:info@zoufarm.com">
                info@zoufarm.com
              </a>
              <a
                href="/sign-in"
                className="sign-in fs-16 d-flex align-items-center justify-content-center"
              >
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 17C16 13.8031 13.7953 11.0886 10.716 10.0615C12.1887 9.18523 13.1667 7.66092 13.1667 5.92308C13.1667 3.20431 10.7787 1 7.83333 1C4.888 1 2.5 3.20431 2.5 5.92308C2.5 7.70892 3.534 9.26892 5.076 10.1311C2.106 11.2098 0 13.8751 0 17"
                    stroke="#66BB6A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>Sign Up</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-between align-items-center">
          <div className="footer-logo">
            <img src={footerlogo} className="img-fluid" alt="" />
          </div>
          <div className="footer-bottom-right">
            <p className="text-gray fs-14">© Copyright 2018. Zou Capital Pty Ltd (ABN 45 4545 87363).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
