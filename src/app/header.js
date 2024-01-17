"use client";
import React, { useState } from "react";
import classes from "./header.module.css";
import Mobile_menu from "./mobile_menu";


export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isHovered_Tech, setIsHovered_Tech] = useState(false);

  const handleMouseEnterTech = () => {
    setIsHovered_Tech(true);
  };

  const handleMouseLeaveTech = () => {
    setIsHovered_Tech(false);
  };
  // mobile menu popup
  const [isOpenmobileMenu, setIsOpenmobileMenu] = useState(false);

  const toggleDropdownmobileMenu = () => {
    setIsOpenmobileMenu(!isOpenmobileMenu);
  };

  return (
    <React.Fragment>
      {/* desktop menu */}
      <div className={`${classes.nav_block_desktop_menu} ${classes.d_none}`}>
        <div className={classes.wrapper}>
          <nav className={classes.h_nav}>
            <div className={classes.div_h_nav}>
              <div className={classes.nav_company_logo}>
              <a className={``} href="/">
                <img
                  src={"assets/images/dex_logo.svg"}
                  height={45}
                  className={"logo-modal"}
                ></img></a>
              </div>
              <div className={classes.wr_nav_left_links}>
                <div className="nav_left_links">
                  <div className={classes.navigation_links}>
                    <div className={classes.wr_nav_services}>
                      <button
                        className={classes.nav_services /*dropdown_toggle*/}
                        id="dropdownMenuButton"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className={classes.ser_text}>
                          <div className={classes.ch_ser_text}>Services</div>
                          <span>
                            <img
                              src={"assets/images/arrow-down-small.svg"}
                              height={6}
                              className={"imgarrow"}
                            ></img>
                          </span>
                        </div>
                      </button>

                      {/* dropdown popup start*/}

                      <div
                        className={`${classes.dropdown_menu} ${
                          isHovered ? classes.show : ""
                        }`}
                        aria-labelledby="dropdownMenuButton"
                        id="dropdown_popup"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className={`${classes.eventsNav}`}>
                          <div className={classes.dropdown_card_row}>
                            <div className={`${classes.dropdown_menu_col}`}>
                              <div
                                className={`${classes.dropdown_header_text}`}
                                role="heading"
                              >
                                <div>
                                  <a
                                    className={`${classes.dropdown_item} ${classes.dropdown_h_text}`}
                                    href="/services/salesforce-development"
                                  >
                                    Mobile App
                                  </a>
                                </div>
                              </div>
                              <div>
                                <a
                                  className={`${classes.dropdown_item} ${classes.header_icon_iosApp}`}
                                  style={{ display: "flex", gap: "10px" }}
                                  href="/services"
                                >
                                  iOS App
                                </a>
                              </div>
                              <div>
                                <a
                                  className={`${classes.dropdown_item} ${classes.header_icon_androidApp}`}
                                  style={{ display: "flex", gap: "10px" }}
                                  href="/services"
                                >
                                  Android App
                                </a>
                              </div>
                              <div>
                                <a
                                  className={`${classes.dropdown_item} ${classes.header_icon_flutterApp}`}
                                  style={{ display: "flex", gap: "10px" }}
                                  href="/services"
                                >
                                  Flutter App
                                </a>
                              </div>
                            </div>
                            <div className={`${classes.dropdown_menu_col}`}>
                              <div
                                className="text-uppercase blue p-0 dropdown-header"
                                role="heading"
                              >
                                <div>
                                  <a
                                    className={`${classes.dropdown_item} ${classes.dropdown_h_text}`}
                                    href="/services"
                                  >
                                    Web App
                                  </a>
                                </div>
                              </div>
                              <div>
                                <a
                                  className={`${classes.dropdown_item} ${classes.header_icon_php}`}
                                  style={{ display: "flex", gap: "10px" }}
                                  href="/services"
                                >
                                  PHP
                                </a>
                              </div>
                              <div>
                                <a
                                  className={`${classes.dropdown_item} ${classes.header_icon_reactJS}`}
                                  style={{ display: "flex", gap: "10px" }}
                                  href="/services"
                                >
                                  ReactJS
                                </a>
                              </div>
                              <div>
                                <a
                                  className={`${classes.dropdown_item} ${classes.header_icon_nodeJS}`}
                                  style={{ display: "flex", gap: "10px" }}
                                  href="/services"
                                >
                                  NodeJS
                                </a>
                              </div>
                              <div>
                                <a
                                  className={`${classes.dropdown_item} ${classes.header_icon_laravel}`}
                                  style={{ display: "flex", gap: "10px" }}
                                  href="/services"
                                >
                                  Laravel
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* dropdown popup end */}
                    </div>

                    <div className={classes.wr_nav_technology}>
                      <button
                        className={classes.nav_technology /*dropdown_toggle*/}
                        id="technologies"
                        onMouseEnter={handleMouseEnterTech}
                        onMouseLeave={handleMouseLeaveTech}
                      >
                        <div className={classes.tech_text}>
                          <div className={classes.ch_tech_text}>
                            Technologies
                          </div>
                          <span>
                            <img
                              src={"assets/images/arrow-down-small.svg"}
                              height={6}
                              className={"logo_modal"}
                            ></img>
                          </span>
                        </div>
                      </button>

                      {/* dropdown popup start*/}

                      <div
                        className={`${classes.dropdown_menu} ${
                          isHovered_Tech ? classes.showTechnologies : ""
                        }`}
                        aria-labelledby="dropdownMenuButton"
                        id="dropdown_popup"
                        onMouseEnter={handleMouseEnterTech}
                        onMouseLeave={handleMouseLeaveTech}
                      >
                        <div className={`${classes.eventsNav}`}>
                          <div className={classes.dropdown_card_row}>
                            <div className={`${classes.dropdown_menu_col}`}>
                              <div
                                className={`${classes.dropdown_header_text}`}
                                role="heading"
                              >
                                <div>
                                  <a
                                    className={`${classes.dropdown_item} ${classes.dropdown_h_text}`}
                                    href="/services/salesforce-development"
                                  >
                                    Mobile App
                                  </a>
                                </div>
                              </div>
                              <div>
                                <a
                                  className={`${classes.dropdown_item} ${classes.header_icon_iosApp}`}
                                  style={{ display: "flex", gap: "10px" }}
                                  href="/services"
                                >
                                  iOS App
                                </a>
                              </div>
                              <div>
                                <a
                                  className={`${classes.dropdown_item} ${classes.header_icon_androidApp}`}
                                  style={{ display: "flex", gap: "10px" }}
                                  href="/services"
                                >
                                  Android App
                                </a>
                              </div>
                              <div>
                                <a
                                  className={`${classes.dropdown_item} ${classes.header_icon_flutterApp}`}
                                  style={{ display: "flex", gap: "10px" }}
                                  href="/services"
                                >
                                  Flutter App
                                </a>
                              </div>
                            </div>
                            <div className={`${classes.dropdown_menu_col}`}>
                              <div
                                className="text-uppercase blue p-0 dropdown-header"
                                role="heading"
                              >
                                <div>
                                  <a
                                    className={`${classes.dropdown_item} ${classes.dropdown_h_text}`}
                                    href="/services"
                                  >
                                    Web App
                                  </a>
                                </div>
                              </div>
                              <div>
                                <a
                                  className={`${classes.dropdown_item} ${classes.header_icon_php}`}
                                  style={{ display: "flex", gap: "10px" }}
                                  href="/services"
                                >
                                  PHP
                                </a>
                              </div>
                              <div>
                                <a
                                  className={`${classes.dropdown_item} ${classes.header_icon_reactJS}`}
                                  style={{ display: "flex", gap: "10px" }}
                                  href="/services"
                                >
                                  ReactJS
                                </a>
                              </div>
                              <div>
                                <a
                                  className={`${classes.dropdown_item} ${classes.header_icon_nodeJS}`}
                                  style={{ display: "flex", gap: "10px" }}
                                  href="/services"
                                >
                                  NodeJS
                                </a>
                              </div>
                              <div>
                                <a
                                  className={`${classes.dropdown_item} ${classes.header_icon_laravel}`}
                                  style={{ display: "flex", gap: "10px" }}
                                  href="/services"
                                >
                                  Laravel
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* dropdown popup end */}
                    </div>

                    <a className={classes.nav_about} href="/about-us">
                      About Us
                    </a>
                    <a className={classes.nav_project} href="/feature-project">
                      Projects
                    </a>
                    <a className={classes.nav_customer} href="/our-customers">
                      Customers
                    </a>
                    <a className={classes.nav_blogs} href="/blog">
                      Blogs
                    </a>
                  </div>
                </div>
                <div className="nav_right_section">
                  <div className={classes.ch_nav_right_section}>
                    <div className={classes.nav_career}>
                      <a className={classes.a_nav_career} href="">
                        Career
                      </a>
                    </div>
                    <div className={classes.nav_contact}>
                      <button className={classes.bt_nav_contact}>
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* mobile menu */}
      <div className={`${classes.nav_block_mobile_menu} ${classes.d_none}`}>
        <div className={classes.wrapper}>
          <nav className={classes.h_nav}>
            <div className={classes.mobile_div_h_nav}>
              <div className={classes.nav_company_logo}>
                <img
                  src={"assets/images/dex_logo.svg"}
                  style={{ height: "4vw" }}
                  className={"logo-modal"}
                ></img>
              </div>
              <div className={classes.hamburger_menu} onClick={toggleDropdownmobileMenu}>
                <img
                  src={"assets/images/hamburger.svg"}
                  style={{ height: "6vw" }}
                  className={"hamburgerSvg"}
                ></img>
              </div>
            </div>
          </nav>
        </div>
        {/* mobile dropdown */}
        <div className={`${classes.navMenuPopup}${isOpenmobileMenu ? classes.active : ''}`}>
        <Mobile_menu></Mobile_menu>
        </div>
        

        {/* mobile drop down end */}
      </div>
    </React.Fragment>
  );
}
