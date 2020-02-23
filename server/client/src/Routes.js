import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Blogs from "./Containers/Blogs/Blogs";
import BlogHome from "./Containers/BlogPost/BlogPost";
import Home from "./Containers/Home/Home";
import Nav from "./Components/Nav/Nav";
import Messages from "./Containers/Messages/Messages";
import Thanks from "./Containers/Thanks/Thanks";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blogs} />
        <Route exact path="/blog/:title/:issueNumber" component={BlogHome} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/thanks" component={Thanks} />
      </Switch>
    </Router>
  );
};
export default Routes;
