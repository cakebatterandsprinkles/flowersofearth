import Link from "next/link";
import Navbar from "./Navbar";
import styled from "styled-components";

const LogoContainer = styled.div`
  width: 100%;
  height: 5vh;
  z-index: 2;
  text-align: center;
`;

const Logo = styled.h1`
  a {
    margin: 1rem;
    font-size: 2.5rem;
    text-decoration: none;
    color: ${(props) => {
      props.theme.gray;
    }};
  }
`;

const Header = () => (
  <div>
    <LogoContainer>
      <Link href="">
        <Logo>
          <a>Flowers of Earth</a>
        </Logo>
      </Link>
    </LogoContainer>
    <Navbar />
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div></div>
  </div>
);

export default Header;
