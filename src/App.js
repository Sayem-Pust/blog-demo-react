import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Header from "./components/Header";
import Error from "./pages/Error";


function App() {

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/blog/:id">
          <BlogDetails />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
