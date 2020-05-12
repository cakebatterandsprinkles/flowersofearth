import React from "react";
import classes from "./index.module.css";
import Button from "../components/Button/Button";

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
        <p className={classes.content}>
          Find bouquets you'll love. Support local sellers. Protect the earth.
        </p>
      </div>
    </div>
  );
};

export default Home;
