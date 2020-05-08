import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Meta from "../Meta";
import classes from "./Page.module.css";

class Page extends Component {
  render() {
    return (
      <div className={classes.mainContainer}>
        <Meta />
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
