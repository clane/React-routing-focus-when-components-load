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
    this.state = {
      ariaCurrent1: false,
      ariaCurrent2: false,
      ariaCurrent3: false,
      ariaCurrent4: false
    };
    // Create a ref to store the textInput DOM element
    this.link1 = React.createRef();
    this.link2 = React.createRef();
    this.link3 = React.createRef();
    this.link4 = React.createRef();

    this.ariaCurrentSetter = this.setCurrentRouterLink.bind(this);
  }

  setCurrentRouterLink(componentName) {
    console.log("test");
    console.log(componentName);

    this.setState({
      ariaCurrent1: false,
      ariaCurrent2: false,
      ariaCurrent3: false,
      ariaCurrent4: false
    });

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

  render() {
    return (
      <div className="App">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>React Routing When Components Load</title>
        </Helmet>
        <h1>React Routing When Components Load</h1>

        <div>
          <a
            href="https://github.com/clane/React-routing-focus-when-components-load"
          >
            https://github.com/clane/React-routing-focus-when-components-load
          </a>
        </div>

        <BrowserRouter>
          <div>

            <ul role="navigation">

              <li>
                <Link
                  aria-current={this.state.ariaCurrent1}
                  ref={this.link1}
                  to="Component1"
                >
                  Component 1
                </Link>
              </li>
              <li>
                <Link
                  aria-current={this.state.ariaCurrent2}
                  ref={this.link2}
                  to="Component2"
                >
                  Component 2
                </Link>
              </li>
              <li>
                <Link
                  aria-current={this.state.ariaCurrent3}
                  ref={this.link3}
                  to="Component3"
                >
                  Component 3
                </Link>
              </li>
              <li>
                <Link
                  aria-current={this.state.ariaCurrent4}
                  ref={this.link4}
                  to="Component4"
                >
                  Component 4
                </Link>
              </li>

            </ul>

            <Switch>
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
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
