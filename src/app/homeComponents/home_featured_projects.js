import classes from "./home_featured_projects.module.css";
import { useState } from "react";
const HomeFeaturedProjects = () => {
//     const [isHoveredFP1, setIsHoveredFP1] = useState(false);

//   const handleMouseEnterFP1 = () => {
//     setIsHoveredFP1(true);
//   };

//   const handleMouseLeaveFP1 = () => {
//     setIsHoveredFP1(false);
//   };
  return (
    <section className={`${classes.homefeaturedproject}`}>
      <div className={`${classes.homefeaturedprojectWr}`}>
        <div className={`${classes.innerLeftRightMargin}`}>
          <div className={`${classes.hfpInnerhadingSec}`}>
            <h3 className={`${classes.h3text}`}>Featured Projects</h3>
          </div>
          <div className={`${classes.projectsCardWr}`}>
            <div className={`${classes.homeProjectBoxWr}`}>
                {/* project card start FP1*/}
              <div className={`${classes.innerHomeProjectBoxWr}`}>
                <div className={`${classes.innerHPImage}`}>
                <img src={"assets/images/webbabyshower.png"}></img>
                </div>
                <div className={`${classes.projectBoxPopUp} ${classes.popUpRight}`}>
                  <a href="/FeatureProjects">

                        <div className={`${classes.projectBoxPopUpText}`}>
                            <h5>WebBabyShower</h5>
                            <p>Share Your Joy with Friends and Family Worldwide</p>
                        </div>
                        <div className={`${classes.projectBoxPopUpArrow}`}>
                        <img src={"assets/images/circle_arrow_right.svg"}></img>
                        </div>
                  </a>
                </div>
              </div>
              {/* project card end */}
              {/* project card start */}
              <div className={`${classes.innerHomeProjectBoxWr}`}>
                <div className={`${classes.innerHPImage}`}>
                <img src={"assets/images/QuickOnDemandServices.png"}></img>
                </div>
                <div className={`${classes.projectBoxPopUp} ${classes.popUpRightDown}`}>
                  <a href="/FeatureProjects">

                        <div className={`${classes.projectBoxPopUpText}`}>
                            <h5>Quick On Demand Services</h5>
                            <p>Share Your Joy with Friends and Family Worldwide</p>
                        </div>
                        <div className={`${classes.projectBoxPopUpArrow}`}>
                        <img src={"assets/images/circle_arrow_right.svg"}></img>
                        </div>
                  </a>
                </div>
              </div>
              {/* project card end */}
              {/* project card start */}
              <div className={`${classes.innerHomeProjectBoxWr}`}>
                <div className={`${classes.innerHPImage}`}>
                <img src={"assets/images/WorkAutomation.png"}></img>
                </div>
                <div className={`${classes.projectBoxPopUp} ${classes.popUpRight}`}>
                  <a href="/FeatureProjects">

                        <div className={`${classes.projectBoxPopUpText}`}>
                            <h5>Work Automation</h5>
                            <p>Share Your Joy with Friends and Family Worldwide</p>
                        </div>
                        <div className={`${classes.projectBoxPopUpArrow}`}>
                        <img src={"assets/images/circle_arrow_right.svg"}></img>
                        </div>
                  </a>
                </div>
              </div>
              {/* project card end */}
              {/* project card start */}
              <div className={`${classes.innerHomeProjectBoxWr}`}>
                <div className={`${classes.innerHPImage}`}>
                <img src={"assets/images/AccountsByAI.png"}></img>
                </div>
                <div className={`${classes.projectBoxPopUp} ${classes.popUpRightDown}`}>
                  <a href="/FeatureProjects">

                        <div className={`${classes.projectBoxPopUpText}`}>
                            <h5>Accounts by AI</h5>
                            <p>Share Your Joy with Friends and Family Worldwide</p>
                        </div>
                        <div className={`${classes.projectBoxPopUpArrow}`}>
                        <img src={"assets/images/circle_arrow_right.svg"}></img>
                        </div>
                  </a>
                </div>
              </div>
              {/* project card end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedProjects;
