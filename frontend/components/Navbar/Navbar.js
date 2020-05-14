import React, { useState, Fragment } from "react";
import Link from "next/link";
import Modal from "react-modal";
import SearchBar from "../SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const renderModalContent = () => {
    if (!isSubmitted) {
      return (
        <Fragment>
          <div className={classes.modalMainContainer}>
            <Link href="/">
              <img src="/logo.png" alt="logo" className={classes.modalLogo} />
            </Link>
            <div className={classes.modalContent}>
              <p className={classes.heading}>Login</p>
              <p className={classes.subText}>Don't have an account?</p>
              <a className={classes.subLink} href="/signup">
                Sign up.
              </a>
              <form className={classes.loginForm}>
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
              <button onClick={handleSubmit} className={classes.btn}>
                Login
              </button>
            </div>
            <div className={classes.closingButtonContainer}>
              <img
                src="/closeButton.png"
                className={classes.closingButton}
                onClick={handleCloseModal}
              />
            </div>
          </div>
        </Fragment>
      );
    } else if (isSubmitted) {
      return (
        <div className={classes.submitModalContainer}>
          <img src={Sun} alt="sunimage" className={classes.birbImage} />
          <p>Congrats, you've got an email! Check your inbox.</p>
        </div>
      );
    }
    return <p>Oops something is wrong!</p>;
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
          <div className={classes.link} onClick={handleOpenModal}>
            Login
          </div>
        </Link>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
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
