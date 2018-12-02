import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Component1 extends Component {
  componentDidMount() {
    this.topHeading.focus();
  }

  render() {
    return (
      <div className="child1">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Component 1</title>
        </Helmet>

        <h2
          tabIndex="-1"
          ref={componentH2 => {
            this.topHeading = componentH2;
          }}
        >
          Component 1
        </h2>

        <ul>
          <li><a href="./component2">Link to Component 2</a></li>
          <li><a href="./component3">Link to Component 3</a></li>
          <li><a href="./component4">Link to Component 4</a></li>
        </ul>

      </div>
    );
  }
}

export default Component1;
