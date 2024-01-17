import classes from './projects_top_section.module.css';

const ProjectsTopSection = () => {

    return (<>
    <section className={`${classes.sectionProjects}`}>
        <div className={`${classes.sectionWrapper} ${classes.innerSectionProjectsWr}`}>
            <div className={`${classes.innerLeftRightMargin} ${classes.projectsectionWr}`}>
                <div className={`${classes.sectionLeftBox}`}>
                    <div className={`${classes.projectsTextOuterWr}`}>
                        <h1 className={`${classes.projectsH1Text}`}>Featured<br/>Projects</h1>
                        <p className={`${classes.projectsPtext1}`}>We have successfully delivered to many clients to their complete satisfaction. Here are the success stories we boast about.</p>
                    </div>
                </div>
                <div className={`${classes.sectionRightBox}`}>
                    <div className={`${classes.heroImageOuterWr}`}>
                        <img src={"assets/images/projectsHeroimg.png"}  className={"logo-modal"} ></img>
                    </div>
                 </div>
            </div>
        </div>
    </section>
    </>);
}

export default ProjectsTopSection;