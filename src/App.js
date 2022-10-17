import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Title from "./Components/Title";
import Aboutme from "./Components/Aboutme";
import Footer from "./Components/Footer";
import Project from "./Components/Project";
import Blog from "./Components/Blog";
import Skillstack from "./Components/Skillstack";
import Recommendation from "./Components/Recommendation";
import Contact from "./Components/Contact";
import Writerecommendation from "./Components/Writerecommendation";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Notfound from "./Components/Notfound";
import Projectpage from "./Components/Projectpage";
import Addproject from "./Components/Addproject";
import Addblog from "./Components/Addblog";
import { Provider } from "./context";
import Allprojects from "./Components/Allprojects";
import Allblogs from "./Components/Allblogs";
import Blogpage from "./Components/Blogpage";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Title
              name="Hemanth Potti"
              text="I am a student at VelTech University."
            />
            <Recommendation />
            <Skillstack />
            <Project />
            <Aboutme />
            <Blog />
          </Route>
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/recommendationform"
            component={Writerecommendation}
          />
          <Route exact path="/addproject" component={Addproject} />
          <Route exact path="/allblogs" component={Allblogs} />
          <Route exact path="/allprojects" component={Allprojects} />
          <Route exact path="/addblog" component={Addblog} />
          <Route exact path="/project/:id">
            <Projectpage />
          </Route>
          <Route exact path="/blog:id">
            <Blogpage />
          </Route>
          <Route component={Notfound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
