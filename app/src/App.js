import React, { Component } from "react";
import "./App.css";
import Component1 from "./Component1.js";
import Component2 from "./Component2.js";
import Component3 from "./Component3.js";
import Component4 from "./Component4.js";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    //Initialize aria-current values
    this.state = {
      ariaCurrent1: null,
      ariaCurrent2: null,
      ariaCurrent3: null,
      ariaCurrent4: null
    };

    /*Setting a local property to reference the function that sets aria-current. This property will be passed to the child components when routing*/
    this.ariaCurrentSetter = this.setCurrentRouterLink.bind(this);

    this.ie11Polyfill();
  }

  //Set aria-current
  setCurrentRouterLink(componentName) {
    //Reset aria-current on all router links first
    this.setState({
      ariaCurrent1: null,
      ariaCurrent2: null,
      ariaCurrent3: null,
      ariaCurrent4: null
    });
    
		{/*Set the aria-current property to "page" for the router link that matches componentName */}
    if (componentName === "component1") {
      this.setState({
        ariaCurrent1: "page"
      });
    }
    if (componentName === "component2") {
      this.setState({
        ariaCurrent2: "page"
      });
    }
    if (componentName === "component3") {
      this.setState({
        ariaCurrent3: "page"
      });
    }
    if (componentName === "component4") {
      this.setState({
        ariaCurrent4: "page"
      });
    }
  }

  ie11Polyfill() {
    if (typeof Object.assign != "function") {
      // Must be writable: true, enumerable: false, configurable: true
      Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) {
          // .length of function is 2
          "use strict";
          if (target == null) {
            // TypeError if undefined or null
            throw new TypeError("Cannot convert undefined or null to object");
          }

          var to = Object(target);

          for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource != null) {
              // Skip over if undefined or null
              for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }
          return to;
        },
        writable: true,
        configurable: true
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>React Routing When Components Load</title>
        </Helmet>
        <div role="banner" aria-label="A11y routing time">
          <h1>A11y Routing with React</h1>
          <div>
            <a
              href="https://github.com/clane/React-routing-focus-when-components-load"
            >
              https://github.com/clane/React-routing-focus-when-components-load
            </a>
          </div>
        </div>

        <BrowserRouter>
          <div>
            <ul role="navigation" aria-label="primary navigation">
              <li>
                <Link aria-current={this.state.ariaCurrent1} to="Component1">
                  Component 1
                </Link>
              </li>
              <li>
                <Link aria-current={this.state.ariaCurrent2} to="Component2">
                  Component 2
                </Link>
              </li>
              <li>
                <Link aria-current={this.state.ariaCurrent3} to="Component3">
                  Component 3
                </Link>
              </li>
              <li>
                <Link aria-current={this.state.ariaCurrent4} to="Component4">
                  Component 4
                </Link>
              </li>
            </ul>

            <div role="main" aria-label="components go here">

              <Switch>
			          {/*Passing the method this.ariaCurrentSetter which sets aria-current to the child component as a property named ariaCurrentSetter */} 
                <Route
                  path="/Component1"
                  render={props => (
                    <Component1
                      {...props}
                      ariaCurrentSetter={this.ariaCurrentSetter}
                    />
                  )}
                />
                <Route
                  path="/Component2"
                  render={props => (
                    <Component2
                      {...props}
                      ariaCurrentSetter={this.ariaCurrentSetter}
                    />
                  )}
                />
                <Route
                  path="/Component3"
                  render={props => (
                    <Component3
                      {...props}
                      ariaCurrentSetter={this.ariaCurrentSetter}
                    />
                  )}
                />
                <Route
                  path="/Component4"
                  render={props => (
                    <Component4
                      {...props}
                      ariaCurrentSetter={this.ariaCurrentSetter}
                    />
                  )}
                />
                <Redirect from="/" to="/" />
              </Switch>
            </div>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
