import React, { Component } from "react";
import cat3 from "./catImages/44215.svg";
import { Helmet } from "react-helmet";

class Component3 extends Component {
  componentDidMount() {
    this.topHeading.focus();
    this.props.ariaCurrentSetter("component3");
  }

  render() {
    return (
      <div className="child1">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Component 3</title>
        </Helmet>

        {/* Assinging a reference to this element to the topHeading property */}
        <h2
          tabIndex="-1"
          ref={componentH2 => {
            this.topHeading = componentH2;
          }}
        >
          Component 3{" "}
        </h2>

        <img className="cat" src={cat3} alt="" />
        <p>
          Sup playa! Bubba Kush here. I'm here to enjoy spinning sick beats and tricking babies. I'm convinced that that one day cats will rule this planet. One day I'll prove it. I can't wait to wake you up at 4am for seemingly no reason.
        </p>
      </div>
    );
  }
}

export default Component3;
