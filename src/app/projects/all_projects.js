"use client"
import classes from "./all_projects.module.css";
import { useState } from "react";
const AllProjects = () => {
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
                <img src={"assets/images/projectsdummy/project2.png"}></img>
                </div>
                <div className={`${classes.projectBoxPopUp} ${classes.popUpRightDown}`}>
                  <a href="/FeatureProjects">

                        <div className={`${classes.projectBoxPopUpText}`}>
                            <h5>Project2</h5>
                            <p>Project2</p>
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
                <img src={"assets/images/projectsdummy/project3.png"}></img>
                </div>
                <div className={`${classes.projectBoxPopUp} ${classes.popUpRight}`}>
                  <a href="/FeatureProjects">

                        <div className={`${classes.projectBoxPopUpText}`}>
                            <h5>Project3</h5>
                            <p>Project3</p>
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
                <img src={"assets/images/projectsdummy/project4.png"}></img>
                </div>
                <div className={`${classes.projectBoxPopUp} ${classes.popUpRightDown}`}>
                  <a href="/FeatureProjects">

                        <div className={`${classes.projectBoxPopUpText}`}>
                            <h5>project4</h5>
                            <p>project4</p>
                        </div>
                        <div className={`${classes.projectBoxPopUpArrow}`}>
                        <img src={"assets/images/circle_arrow_right.svg"}></img>
                        </div>
                  </a>
                </div>
              </div>
              {/* project card end */}
                 {/* project card start FP1*/}
                 <div className={`${classes.innerHomeProjectBoxWr}`}>
                <div className={`${classes.innerHPImage}`}>
                <img src={"assets/images/projectsdummy/project5.png"}></img>
                </div>
                <div className={`${classes.projectBoxPopUp} ${classes.popUpRight}`}>
                  <a href="/FeatureProjects">

                        <div className={`${classes.projectBoxPopUpText}`}>
                            <h5>Project5</h5>
                            <p>Project5</p>
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
                <img src={"assets/images/projectsdummy/project6.png"}></img>
                </div>
                <div className={`${classes.projectBoxPopUp} ${classes.popUpRightDown}`}>
                  <a href="/FeatureProjects">

                        <div className={`${classes.projectBoxPopUpText}`}>
                            <h5>Project6</h5>
                            <p>Project6</p>
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
                <img src={"assets/images/projectsdummy/project7.png"}></img>
                </div>
                <div className={`${classes.projectBoxPopUp} ${classes.popUpRight}`}>
                  <a href="/FeatureProjects">

                        <div className={`${classes.projectBoxPopUpText}`}>
                            <h5>Project7</h5>
                            <p>Project7</p>
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
                <img src={"assets/images/projectsdummy/project8.png"}></img>
                </div>
                <div className={`${classes.projectBoxPopUp} ${classes.popUpRightDown}`}>
                  <a href="/FeatureProjects">

                        <div className={`${classes.projectBoxPopUpText}`}>
                            <h5>Project8</h5>
                            <p>Project8</p>
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
                <img src={"assets/images/projectsdummy/project9.png"}></img>
                </div>
                <div className={`${classes.projectBoxPopUp} ${classes.popUpRight}`}>
                  <a href="/FeatureProjects">

                        <div className={`${classes.projectBoxPopUpText}`}>
                            <h5>Project9</h5>
                            <p>Project9</p>
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
                <img src={"assets/images/projectsdummy/project10.png"}></img>
                </div>
                <div className={`${classes.projectBoxPopUp} ${classes.popUpRightDown}`}>
                  <a href="/FeatureProjects">

                        <div className={`${classes.projectBoxPopUpText}`}>
                            <h5>Project10</h5>
                            <p>Project10</p>
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

export default AllProjects;
