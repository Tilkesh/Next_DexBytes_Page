import classes from './home_what_we_deliver.module.css'

const HomeWhatWeDeliver = () => {
    return (
        <section className={`${classes.mainWhatWeDeliverSec}`}>
            <div className={`${classes.whatWeDeliverSecWr}`}>
                <div className={`${classes.innerWeDeliverSec}`}>
                    <h3 className={`${classes.h3TextWeDeliverSec}`}>What We Deliver</h3>
                    <p className={`${classes.pTextWeDeliverSec}`}>We define business processes through ideation, creation, and optimization with a team of exceptional strategists.</p>
                    <div className={`${classes.innerWeDeliverSecCardsWr}`}>
                        <div className={`${classes.innerWeDeliverSecCard} ${classes.pD}`}>
                            <div className={`${classes.card_imgs} ${classes.card_img_PD}`}></div>
                            <h4 className={`${classes.h4TextCard}`}>Product Development</h4>
                            <p className={`${classes.pTextCard}`}>We ideate and develop unique software solutions to help businesses meet their exact objectives.</p>
                        </div>
                        <div className={`${classes.innerWeDeliverSecCard} ${classes.pC}`}>
                            <div className={`${classes.card_imgs} ${classes.card_img_PC}`}></div>
                            <h4 className={`${classes.h4TextCard}`}>Product Consultation</h4>
                            <p className={`${classes.pTextCard}`}>We offer SaaS consultation to help businesses tread on visionary and strategic frameworks.</p>
                        </div>
                        <div className={`${classes.innerWeDeliverSecCard} ${classes.pO}`}>
                            <div className={`${classes.card_imgs} ${classes.card_img_PO}`}></div>
                            <h4 className={`${classes.h4TextCard}`}>Product Optimization</h4>
                            <p className={`${classes.pTextCard}`}>We optimize products through advanced updates to make them efficient and promisingly growing.</p>
                        </div>
                    </div>
                    <div className={`${classes.viewSerBtn}`}>
                        <a className={`${classes.viewSerBtnLink}`} href='/ViewServices'>View Services</a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default HomeWhatWeDeliver;