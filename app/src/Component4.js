import React, { Component } from "react";
import cat4 from "./catImages/288702.svg";
import { Helmet } from "react-helmet";

class Component4 extends Component {
  componentDidMount() {
    this.topHeading.focus();
    this.props.ariaCurrentSetter("component4");
  }

  render() {
    return (
      <div className="child1">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Component 4</title>
        </Helmet>

        <h2
          tabIndex="-1"
          ref={componentH2 => {
            this.topHeading = componentH2;
          }}
        >
          Component 4
        </h2>

        <img className="cat" src={cat4} alt="" />
        <p>
          What's up! I'm Kitty #288702. I'm a professional Culinary Sanitation Specialist and I love lasagna. When I'm not riding the bus, I'm siring for status! We're so fur-tunate to have found each other!
        </p>
      </div>
    );
  }
}

export default Component4;
