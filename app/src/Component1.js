import React, { Component } from "react";
import { Helmet } from "react-helmet";
import cat1 from "./catImages/293931.svg";

class Component1 extends Component {
  componentDidMount() {
    this.topHeading.focus();
    this.props.ariaCurrentSetter("component1");
  }

  render() {
    return (
      <div className="child1">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Component 1</title>
        </Helmet>


        {/* Assinging a reference to this element to the topHeading property */}
        <h2
          tabIndex="-1"
          ref={componentH2 => {
            this.topHeading = componentH2;
          }}
        >
          Component 1
        </h2>

        <img className="cat" src={cat1} alt="" />
        <p>
          Good day! I'm Casper Jumpy. I want to live in a world where people believe the world is flat. In my free time, I can usually be found tantalizing or prank-calling celebrities. This will be an amewsing friendship.
        </p>

      </div>
    );
  }
}

export default Component1;
