import React from "react";
import classes from "./index.module.css";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";

const Home = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.buttonMainContainer}>
        <p className={classes.subheading}>People also search for: </p>
        <div className={classes.buttonContainer}>
          <Button name="Peony" />
          <Button name="Tulip" />
          <Button name="Rose" />
          <Button name="Sunflower" />
          <Button name="Hydrangea" />
          <Button name="Lily" />
        </div>
      </div>
      <div className={classes.sloganWrapper}>
        <p className={classes.slogan}>Find bouquets you'll love.</p>
        <p className={classes.slogan}>Support local sellers.</p>
        <p className={classes.slogan}>Protect the earth.</p>
      </div>
      <div>
        <img src="/field2.png" className={classes.image}></img>
      </div>
      <div className={classes.contentWrapper}>
        <p className={classes.header}>Who are we?</p>
        <div className={classes.aboutUsContainer}>
          <div className={classes.missionContainer}>
            <img src="/trees.png" className={classes.missionImage}></img>
            <p className={classes.heading}>
              We are a community that cares about the world.
            </p>
            <p className={classes.content}>
              We support profitable, small-scale flower farming. By locally
              resourcing your flowers, you can reduce your carbon footprint.{" "}
            </p>
          </div>
          <div className={classes.missionContainer}>
            <img src="/market.png" className={classes.missionImage}></img>
            <p className={classes.heading}>
              We support local resources, gardeners and artists.
            </p>
            <p className={classes.content}>
              We believe everybody can grow flowers. Collaborate with local
              artists and make amazing bouquets!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
