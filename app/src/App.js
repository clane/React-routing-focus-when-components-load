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
    // Create a ref to store the textInput DOM element
    this.link1 = React.createRef();
    this.link2 = React.createRef();
    this.link3 = React.createRef();
    this.link4 = React.createRef();

    this.link1Current = "false";
    this.link2Current = "false";
    this.link3Current = "false";
    this.link4Current = "false";
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
                  aria-current={this.link1Current}
                  ref={this.link1}
                  to="Component1"
                >
                  Component 1
                </Link>
              </li>
              <li>
                <Link
                  aria-current={this.link2Current}
                  ref={this.link2}
                  to="Component2"
                >
                  Component 2
                </Link>
              </li>
              <li>
                <Link
                  aria-current={this.link3Current}
                  ref={this.link3}
                  to="Component3"
                >
                  Component 3
                </Link>
              </li>
              <li>
                <Link
                  aria-current={this.link4Current}
                  ref={this.link4}
                  to="Component4"
                >
                  Component 4
                </Link>
              </li>

            </ul>

            <Switch>
              <Route path="/Component1" component={Component1} />
              <Route path="/Component2" component={Component2} />
              <Route path="/Component3" component={Component3} />
              <Route path="/Component4" component={Component4} />
              {/*<Redirect from="/" to="/Component1" />*/}
              <Redirect from="/" to="/" />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
