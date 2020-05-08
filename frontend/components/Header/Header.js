import Link from "next/link";
import Navbar from "../Navbar/Navbar";

const Header = () => (
  <div>
    <div>
      <Link href="/">
        <a>Flowers of Earth</a>
      </Link>
    </div>
    <Navbar />
    <div className="searchbar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
