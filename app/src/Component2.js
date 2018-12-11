import React, { Component } from "react";
import cat2 from "./catImages/271631.svg";
import { Helmet } from "react-helmet";

class Component2 extends Component {
  componentDidMount() {
    this.topHeading.focus();
    this.props.ariaCurrentSetter("component2");
  }

  render() {
    return (
      <div className="child1">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Component 2</title>
        </Helmet>

        {/* Assinging a reference to this element to the topHeading property */}
        <h2
          tabIndex="-1"
          ref={componentH2 => {
            this.topHeading = componentH2;
          }}
        >
          Component 2
        </h2>

        <img className="cat" src={cat2} alt="" />
        <p>
          *waves*! I'm Kitty #271631. I want to live in a world where people believe that one day cats will rule this planet. I would give it all up to star in a soap opera. Will you be the marmalade to my ranch dressing?
        </p>

      </div>
    );
  }
}

export default Component2;
