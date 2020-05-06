import styled from "styled-components";

const NavbarStyles = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  a,
  button {
    text-decoration: none;
    padding: 3rem 3rem 0.5rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 1rem;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${(props) => props.theme.black};
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: "";
      width: 2px;
      background: ${(props) => props.theme.lightgrey};
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: ${(props) => props.theme.tomato};
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 1.2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid ${(props) => props.theme.lightgrey};
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavbarStyles;
