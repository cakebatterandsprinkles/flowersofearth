import React, { useState, Fragment } from "react";
import Link from "next/link";
import Modal from "react-modal";
import SearchBar from "../SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isSignupSubmitted, setIsSignupSubmitted] = useState(false);
  const [isLoginSubmitted, setIsLoginSubmitted] = useState(false);

  const handleLoginOpenModal = () => {
    setIsLogin(true);
    setIsSignup(false);
  };

  const handleLoginCloseModal = () => {
    setIsLogin(false);
  };

  const handleLoginSubmit = () => {
    setIsLoginSubmitted(true);
  };

  const handleSignupOpenModal = () => {
    setIsLogin(false);
    setIsSignup(true);
  };

  const handleSignupCloseModal = () => {
    setIsSignup(false);
  };

  const handleSignupSubmit = () => {
    setIsSignupSubmitted(true);
  };

  const setHeader = () => {
    if (isLogin && !isSignup) {
      return "Login";
    } else if (!isLogin && isSignup) {
      return "Sign up";
    }
  };

  const setSubText = () => {
    if (isLogin && !isSignup) {
      return "Don't have an account?";
    } else if (!isLogin && isSignup) {
      return "Already have an account?";
    }
  };

  const setLink = () => {
    if (isLogin && !isSignup) {
      return "Sign up";
    } else if (!isLogin && isSignup) {
      return "Login";
    }
  };

  const renderModalContent = () => {
    return (
      <Fragment>
        <div className={classes.modalMainContainer}>
          <Link href="/">
            <img src="/logo.png" alt="logo" className={classes.modalLogo} />
          </Link>
          <div className={classes.modalContent}>
            <p className={classes.heading}>{setHeader()}</p>
            <p className={classes.subText}>{setSubText()}</p>
            <Link href="/">
              <a
                className={classes.subLink}
                onClick={isLogin ? handleSignupOpenModal : handleLoginOpenModal}
              >
                {setLink()}
              </a>
            </Link>
            {isLogin ? (
              <form className={classes.form}>
                <div className={classes.formGroupContainer}>
                  <label htmlFor="user-email">E-mail address:</label>
                  <input type="email" name="user-email" id="user-email"></input>
                </div>
                <div className={classes.formGroupContainer}>
                  <label htmlFor="user-password">Password:</label>
                  <input
                    type="password"
                    name="user-password"
                    id="user-password"
                  ></input>
                </div>
              </form>
            ) : (
              <form className={classes.form}>
                <div className={classes.formGroupContainer}>
                  <label htmlFor="username">Username:</label>
                  <input type="text" name="username" id="username"></input>
                </div>
                <div className={classes.formGroupContainer}>
                  <label htmlFor="user-email">E-mail address:</label>
                  <input type="email" name="user-email" id="user-email"></input>
                </div>
                <div className={classes.formGroupContainer}>
                  <label htmlFor="user-password">Password:</label>
                  <input
                    type="password"
                    name="user-password"
                    id="user-password"
                  ></input>
                </div>
                <div className={classes.formGroupContainer}>
                  <label htmlFor="repeat-password">Repeat password:</label>
                  <input
                    type="password"
                    name="repeat-password"
                    id="repeat-password"
                  ></input>
                </div>
              </form>
            )}

            <button
              onClick={isLogin ? handleLoginSubmit : handleSignupSubmit}
              className={classes.btn}
            >
              {setHeader()}
            </button>
          </div>
          <div className={classes.closingButtonContainer}>
            <img
              src="/closeButton.png"
              className={classes.closingButton}
              onClick={isLogin ? handleLoginCloseModal : handleSignupCloseModal}
            />
          </div>
        </div>
      </Fragment>
    );
  };

  let currentModal = renderModalContent();

  return (
    <div className={classes.navbar}>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="logo" className={classes.logo} />
        </a>
      </Link>
      <div className={classes.subContainer}>
        <SearchBar />
        <Link href="/cart">
          <a className={classes.link}>
            <div className={classes.cartIcon}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </a>
        </Link>
        <Link href="/">
          <div className={classes.link} onClick={handleLoginOpenModal}>
            Login
          </div>
        </Link>
      </div>
      <Modal
        isOpen={isLogin || isSignup}
        onRequestClose={
          isLogin ? handleLoginCloseModal : handleSignupCloseModal
        }
        className={classes.modal}
        overlayClassName={classes.overlay}
        ariaHideApp={false}
      >
        {currentModal}
      </Modal>
    </div>
  );
};

export default Navbar;
