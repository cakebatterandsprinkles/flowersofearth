import React, { Component } from "react";
import Header from "../Header/Header";
import Meta from "../Meta";
import classes from "./Page.module.css";

class Page extends Component {
  render() {
    return (
      <div className={classes.mainContainer}>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
