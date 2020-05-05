import React, { Component } from "react";

class Page extends Component {
  render() {
    return (
      <div>
        <p>Hey I'm supposed to be on every page!</p>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
