import React from "react";
//Import Global Style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Switch, Route,useLocation } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetails/>
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
