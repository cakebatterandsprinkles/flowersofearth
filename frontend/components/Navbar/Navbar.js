import Link from "next/link";

const Navbar = () => (
  <div>
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
  </div>
);

export default Navbar;
