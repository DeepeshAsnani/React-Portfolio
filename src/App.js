import React from "react";
//Import Global Style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch>
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
    </>
  );
}

export default App;
