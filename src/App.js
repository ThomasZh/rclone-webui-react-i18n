import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./ErrorHandling/ErrorBoundary";
import { IntlProvider } from "react-intl";
import zh_CN from "./locales/zh_CN";
import en_US from "./locales/en_US";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/Pages/Login"));
const Register = React.lazy(() => import("./views/Pages/Register"));
const Page404 = React.lazy(() => import("./views/Pages/Page404"));
const Page500 = React.lazy(() => import("./views/Pages/Page500"));

class App extends Component {
  messages = {
    zh_CN: zh_CN,
    en_US: en_US,
  };
  state = {
    locale: "zh-CN",
  };

  render() {
    return (
      <IntlProvider
        locale={this.state.locale}
        messages={this.messages[this.state.locale]}
      >
        <div data-test="appComponent">
          <ErrorBoundary>
            <ToastContainer />
            <HashRouter>
              <React.Suspense fallback={loading()}>
                <Switch>
                  <Route
                    exact
                    path="/login"
                    name="Login Page"
                    render={(props) => <Login {...props} />}
                  />
                  <Route
                    exact
                    path="/register"
                    name="Register Page"
                    render={(props) => <Register {...props} />}
                  />
                  <Route
                    exact
                    path="/404"
                    name="Page 404"
                    render={(props) => <Page404 {...props} />}
                  />
                  <Route
                    exact
                    path="/500"
                    name="Page 500"
                    render={(props) => <Page500 {...props} />}
                  />
                  <Route
                    path="/"
                    name="Home"
                    render={(props) => <DefaultLayout {...props} />}
                  />
                </Switch>
              </React.Suspense>
            </HashRouter>
          </ErrorBoundary>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
