import React, { useState } from 'react';
import classes from './mobile_menu.module.css';

const Mobile_menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpenServices, setIsOpenServices] = useState(false);

  const toggleDropdownServices = () => {
    setIsOpenServices(!isOpenServices);
  };
  const [isOpenSer1, setIsOpenSer1] = useState(false);

  const toggleDropdownSer1 = () => {
    setIsOpenSer1(!isOpenSer1);
  };
  const [isOpenSer2, setIsOpenSer2] = useState(false);

  const toggleDropdownSer2 = () => {
    setIsOpenSer2(!isOpenSer2);
  };
  const [isOpenSer3, setIsOpenSer3] = useState(false);

  const toggleDropdownSer3 = () => {
    setIsOpenSer3(!isOpenSer3);
  };
  const [isOpenTech1, setIsOpenTech1] = useState(false);

  const toggleDropdownTech1 = () => {
    setIsOpenTech1(!isOpenTech1);
  };
  const [isOpenTech2, setIsOpenTech2] = useState(false);

  const toggleDropdownTech2 = () => {
    setIsOpenTech2(!isOpenTech2);
  };
  const [isOpenTech3, setIsOpenTech3] = useState(false);

  const toggleDropdownTech3 = () => {
    setIsOpenTech3(!isOpenTech3);
  };
  const [isOpenTech4, setIsOpenTech4] = useState(false);

  const toggleDropdownTech4 = () => {
    setIsOpenTech4(!isOpenTech4);
  };
  const [isOpenTech5, setIsOpenTech5] = useState(false);

  const toggleDropdownTech5 = () => {
    setIsOpenTech5(!isOpenTech5);
  };
    return (
        <nav className={`${classes.nav_menu} ${classes.active}`}>
          <div className={`${classes.menu_data}`}>
            <ul className={`${classes.nav_menu_items}`}>
              
              <li>
                <div className={`${classes.accordion}`}>
                  <div>
                    <button type="button" className={`${classes.btn} ${classes.btn_link}`} onClick={toggleDropdownServices}>
                      Services
                    </button>
                    
                    <div className={`${classes.collapse} ${isOpenServices ? classes.show : ''}`}>
                      <div className={`${classes.card_body}`}>
                        <div className={`${classes.accordion}`}>

                          <div>
                            <button type="button" className={`${classes.btn} ${classes.btn_link}`}onClick={toggleDropdownSer1}>
                              Salesforce
                            </button>
                            <div className={`${classes.collapse}${isOpenSer1 ? classes.show : ''}`}>
                              <div className={`${classes.card_body}`}>
                                <div style={{paddingLeft : '6px'}}>

                                  <div>
                                    <a className={`${classes.dropdown_item}`} href="/services">
                                      <div className="header-icon service"></div>
                                      Implementation
                                    </a>
                                  </div>
                                  <div>
                                    <a className={`${classes.dropdown_item}`} href="/services">
                                      <div className="header-icon application"></div>
                                      Application Development
                                    </a>
                                  </div>
                                  <div>
                                    <a className={`${classes.dropdown_item}`} href="/services">
                                      <div className="header-icon integration"></div>
                                      Integration
                                    </a>
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <button type="button" className={`${classes.btn} ${classes.btn_link}`}onClick={toggleDropdownSer2}>
                              AWS
                            </button>
                            <div className={`${classes.collapse}${isOpenSer2 ? classes.show : ''}`}>
                              <div className={`${classes.card_body}`}>
                                <div style={{paddingLeft : '6px'}}>
                                  <div>
                                    <a className={`${classes.dropdown_item}`} href="/services">
                                      <div className="header-icon devops"></div>
                                      DevOps
                                    </a>
                                  </div>
                                  <div>
                                    <a className={`${classes.dropdown_item}`} href="/services">
                                      <div className="header-icon solution"></div>
                                      Solution Architecture
                                    </a>
                                  </div>
                                  <div>
                                    <a className={`${classes.dropdown_item}`} href="/services">
                                      <div className="header-icon migration"></div>
                                      Integration And Migration
                                    </a>
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <button type="button" className={`${classes.btn} ${classes.btn_link}`}onClick={toggleDropdownSer3}>
                              Dell Boomi
                            </button>
                            <div className={`${classes.collapse}${isOpenSer3 ? classes.show : ''}`}>
                              <div className={`${classes.card_body}`}>
                                <div style={{paddingLeft : '6px'}}>
                                  <div>
                                    <a className={`${classes.dropdown_item}`} href="/services">
                                      <div className="header-icon app-integration"></div>
                                      Application Integration
                                    </a>
                                  </div>
                                  <div>
                                    <a className={`${classes.dropdown_item}`} href="/services">
                                      <div className="header-icon consulting"></div>
                                      Consulting
                                    </a>
                                  </div>
                                  <div>
                                    <a className={`${classes.dropdown_item}`} href="/services">
                                      <div className="header-icon management"></div>
                                      Master Data Management
                                    </a>
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  <div>
                    <button type="button" className={`${classes.btn} ${classes.btn_link}`} onClick={toggleDropdown}>
                      Technologies
                    </button>
                    <div className={`${classes.collapse} ${isOpen ? classes.show : ''}`}>

                      <div className={`${classes.card_body}`}>

                        <div className={`${classes.accordion}`}>
                          <div>
                            <button type="button" className={`${classes.btn} ${classes.btn_link}`}onClick={toggleDropdownTech1}>
                              Mobile App
                            </button>
                            <div className={`${classes.collapse}${isOpenTech1 ? classes.show : ''}`}>
                              <div className={`${classes.card_body}`}>
                                <div style={{paddingLeft : '6px'}}>

                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon ios"></div>iOS App
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon android"></div>
                                      Android App
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon react"></div>React
                                      Native App
                                    </a>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <button type="button" className={`${classes.btn} ${classes.btn_link}`}onClick={toggleDropdownTech2}>
                              Web App
                            </button>
                            <div className={`${classes.collapse} ${isOpenTech2 ? classes.show : ''}`}>
                              <div className={`${classes.card_body}`}>
                                <div style={{paddingLeft : '6px'}}>

                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon full-stack"></div>
                                      Full Stack
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon react"></div>
                                      ReactJS
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon nodejs"></div>
                                      NodeJS
                                    </a>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <button type="button" className={`${classes.btn} ${classes.btn_link}`}onClick={toggleDropdownTech3}>
                              Digital Marketing
                            </button>
                            <div className={`${classes.collapse}${isOpenTech3 ? classes.show : ''}`}>
                              <div className={`${classes.card_body}`}>
                                <div style={{paddingLeft : '6px'}}>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon seo"></div>SEO
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon smo"></div>SMO
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon ppc"></div>PPC
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <button type="button" className={`${classes.btn} ${classes.btn_link}`}onClick={toggleDropdownTech4}>
                              No Code Platform
                            </button>
                            <div className={`${classes.collapse}${isOpenTech4 ? classes.show : ''}`}>
                              <div className={`${classes.card_body}`}>
                                <div style={{paddingLeft : '6px'}}>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon retool"></div>
                                      Retool
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <button type="button" className={`${classes.btn} ${classes.btn_link}`}onClick={toggleDropdownTech5}>
                              Integrations
                            </button>
                            <div className={`${classes.collapse}${isOpenTech5 ? classes.show : ''}`}>
                              <div className={`${classes.card_body}`}>
                                <div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon algolia"></div>
                                      Algolia
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon Quickbooks"></div>
                                      Quickbook
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon Revel"></div>Revel
                                      POS
                                    </a>
                                  </div>
                                 
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </li>

              <li className={classes.li}>
                <div>
                  <a href="/feature-project">Projects</a>
                </div>
              </li>

              <li className={classes.li}>
                <div>
                  <a href="/about-us">About Us</a>
                </div>
              </li>

              <li className={classes.li}>
                <div>
                  <a href="/our-customers">Customers</a>
                </div>
              </li>

              <li className={classes.li}>
                <div>
                  <a href="/blog">Blogs</a>
                </div>
              </li>

              <li className={classes.li}>
                <div>
                  <a href="/career">Career</a>
                </div>
              </li>

              <li className={classes.li}>
                <div>
                  <a href="/contact-us" style={{borderBottom:'solid 0px', marginBottom: '120px'}}>Contact</a>
                </div>
              </li>

            </ul>
            
          </div>
        </nav>
    );

}

export default Mobile_menu;