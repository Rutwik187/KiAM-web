import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="app__enquiry__box_and_navbar">
      <div className="app__enquiry_box app__container">
        <div className="app__enquiry_box__info">
          <div className="app__enquiry_box__info_call">
            <img src={images.mail_icon} alt="call" />
            <div className="p-text">enquiry@kiam.in</div>
          </div>
          <div className="app__enquiry_box__info_mail">
            <img src={images.call_icon} alt="call" />
            <div className="p-text">+91 9321255012</div>
          </div>
        </div>
      </div>
      <nav className="app__navbar app__container">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {["home", "about", "services", "products", "about-us", "careers"].map(
            (item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )}
        </ul>

        <div className="app__navbar-menu ">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {[
                  "home",
                  "about",
                  "services",
                  "products",
                  "about-us",
                  "careers",
                ].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
