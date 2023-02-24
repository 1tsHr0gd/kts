import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit

import Home from "./Home";
import TourPage from "TourPage";
import TourPage2 from "TourPage2";
import AboutUs from "AboutUs";
import Enquiries from "Enquiries";
import Kenya from "Tours/Kenya";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter basename={process.env.PUBLIC_URL || ''}>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Home {...props} />} />
        <Route
          path="/tour"
          render={(props)=> <TourPage {...props} />}
        />
        <Route
          path="/tour2"
          render={(props)=> <TourPage2 {...props} />}
        />
        <Route
          path="/about-us"
          render={(props)=> <AboutUs {...props} />}
        />
        <Route
          path="/enquiries"
          render={(props)=> <Enquiries {...props} />}
        />
        <Route
          path="/kenya-locations"
          render={(props)=> <Kenya {...props} />}
        />
        {/*
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/nowui"
          render={(props)=> <Index {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        */}
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </HashRouter>
);
