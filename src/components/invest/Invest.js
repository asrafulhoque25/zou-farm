import React from "react";
import investImgOne from "../../assets/images/convenience-1.jpg";
import investImgTwo from "../../assets/images/convenience-2.jpg";
import "./Invest.scss";

const investCardData = [
  {
    investCardHints: "NEW FARM TODAY",
    investCardTitle: "Connect with our farmers",
    investCardDes:
      "Invest in farms that will be ready for harvest in 3-18 months",
    cardImg: investImgOne,
    btnText: "Browse Farm"
  },
  {
    investCardHints: "FULLY FUNDED",
    investCardTitle: "Long terms investment",
    investCardDes: "Consider farms that have long term investment program.",
    cardImg: investImgTwo,
    btnText: "Learn more"
  },
];

const Invest = () => {
  return (
    <div className="invest">
      <div className="min-container">
        <div className="common-heading  text-start">
          <h6 className="common-title fs-36 lh-64 text-black">
          Invest on your convenience
          </h6>
          <div className="section-tag fs-18 lh-32 text-black">
          Autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil <br /> molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla    <br /> pariatur
         
      
          </div>
        </div>

        <div className="invest-wrapper d-flex">
          {investCardData.map((cardInfo) => (
            <div className="card">
              <div className="card-body">
                <div className="card-img">
                  <img src={cardInfo.cardImg}  className="img-fluid" alt="card-img" /> 
                  <div className="overlay"></div>
                  <div className="card-content">
                    <p className="card-hints fs-14 ls-2 text-green">{cardInfo.investCardHints}</p>
                    <div className="hint-border"></div>
                    <h5 className="card-title fw-400 fs-31 lh-40 text-white">
                      {cardInfo.investCardTitle}
                    </h5>
                    <p className="card-text fs-16 lh-24 text-green-light">
                      {cardInfo.investCardDes}
                    </p>
                    <button type="button" className="card-btn d-flex align-items-center justify-content-center text-green fs-18">{cardInfo.btnText}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invest;
