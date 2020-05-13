import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <img src="footer2.png" className={classes.footerImage} />
      <div className={classes.socialMediaIcons}>
        <p>Check us out:</p>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon icon={faInstagram} className={classes.icon} />
        </div>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon icon={faFacebook} className={classes.icon} />
        </div>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon icon={faTwitter} className={classes.icon} />
        </div>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon icon={faPinterest} className={classes.icon} />
        </div>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon icon={faYoutube} className={classes.icon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
