import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const loading = <div className="spinner-border" role="status"></div>;

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              path="/"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
