import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

const theme = {
  black: "#393939",
  gray: "#342f2d",
  lightgray: "#e1e1e1",
  smokeywhite: "#ededed",
  crimson: "#eb2557",
  tomato: "#f15942",
  goldenrod: "#f3a61d",
  teal: "#269da1",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.9)",
};

const MainContainer = styled.div`
  background: ${(props) => props.theme.smokeywhite};
  color: ${(props) => props.theme.black};
  display: flex;
  flex-direction: column;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Meta />
          <Header />
          {this.props.children}
        </MainContainer>
      </ThemeProvider>
    );
  }
}

export default Page;
