import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";

const Header = () => (
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
      <Link href="/login">
        <a className={classes.link}>Login</a>
      </Link>
    </div>
  </div>
);

export default Header;
