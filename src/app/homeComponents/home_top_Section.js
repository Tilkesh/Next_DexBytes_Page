import classes from "./home_top_section.module.css";

const HomeTopSection = () => {
  return (
    <section className={`${classes.sectionHome}`}>
      <div className={`${classes.sectionWrapper} ${classes.innerSectionHomeWr}`}>
        <div className={`${classes.innerLeftRightMargin} ${classes.homesectionWr}`}>
          <div className={`${classes.sectionLeftBox}`}>
            <div className={`${classes.homeTopBtnWr}`}>
              <div className={`${classes.leftHiringWr}`}>
                <span className={`${classes.hiringText}`}>We're hiring!</span>
              </div>
              <div className={`${classes.rightJoinourTeamWr}`}>
                <a className={`${classes.joinourTeamLink}`} href="/JoinOurTeam">
                  Join our team
                </a>
              </div>
            </div>
            <div className={`${classes.homeTextOuterWr}`}>
              <h1 className={`${classes.homeH1Text}`}>Driving Digital<br/>Transformation</h1>
              <p className={`${classes.homePtext1}`}>Upscale your business process to deliver superior customer experience and revolutionize your business from top to bottom.</p>
              <div className={`${classes.homeBtnWr}`}>
                <a className={`${classes.getYourProjectLink}`} href="/getyourproject">Get Your Project Started</a>
              </div>
            </div>
          </div>
          <div className={`${classes.sectionRightBox}`}>
            <div className={`${classes.heroImageOuterWr}`}>
            <img
                  src={"assets/images/home_hero_image.png"}
                  className={"logo-modal"}
                ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTopSection;
