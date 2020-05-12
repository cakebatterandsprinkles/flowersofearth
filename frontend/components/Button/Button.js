import React from "react";
import Link from "next/link";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.button}>
      <Link href="/search">
        <a>{props.name}</a>
      </Link>
    </div>
  );
};

export default Button;
