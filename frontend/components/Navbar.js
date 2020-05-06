import Link from "next/link";
import NavbarStyles from "./styledComponents/NavbarStyles";

const Navbar = () => (
  <NavbarStyles>
    <Link href="/">
      <a>About Us</a>
    </Link>
    <Link href="/shop">
      <a>Shop</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/signup">
      <a>Sign Up</a>
    </Link>
    <Link href="/login">
      <a>Login</a>
    </Link>
  </NavbarStyles>
);

export default Navbar;
