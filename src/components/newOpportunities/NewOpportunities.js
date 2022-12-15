import "./NewOpportunities.scss";
import OpportunitiesImgOne from "../../assets/images/opportunitie-icon-1.svg";
import OpportunitiesImgTwo from "../../assets/images/opportunitie-icon-2.svg";
import OpportunitiesImgThree from "../../assets/images/opportunitie-icon-3.svg";

const cardData = [
  {
    cardTitle: "Connect with our farmers",
    cardDes:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione",
    cardImg: OpportunitiesImgOne,
  },
  {
    cardTitle: "Grow your business",
    cardDes:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
    cardImg: OpportunitiesImgTwo,
  },
  {
    cardTitle: "Social Impact Invesment",
    cardDes:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
    cardImg: OpportunitiesImgThree,
  },
];

function NewOpportunities() {
  return (
    <>
      <div className="min-container">
        <div className="common-heading  text-center">
          <h6 className="common-title fs-36 lh-64 text-black">
                     New Opportunities
          </h6>
          <div className="section-tag fs-18 lh-32 text-black">
            We are the first and the only crowdfunding platform enabling you{" "}
            <br />
            to help finance our farmers.
          </div>
        </div>

        <div className="card-wrapper opportunities-right">
          {cardData.map((cardInfo) => (
            <div className="card">
              <div className="card-body">
                <div className="card-img">
                  <img src={cardInfo.cardImg} alt="card-img" />
                </div>
                <h5 className="card-title fw-400 fs-18 lh-24 text-black-light-gray">
                  {cardInfo.cardTitle}
                </h5>
                <p className="card-text fw-400 fs-16 lh-24 text-black-light-gray">
                  {cardInfo.cardDes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NewOpportunities;
