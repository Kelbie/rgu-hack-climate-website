import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styled from "styled-components";

import Blogs from "./Containers/Blogs/Blogs";
import BlogHome from "./Containers/BlogPost/BlogPost";
import Home from "./Containers/Home/Home";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Messages from "./Containers/Messages/Messages";
import Thanks from "./Containers/Thanks/Thanks";
import BlogPost from "./Containers/BlogPost/BlogPost";
import Blog from "./Containers/Blog/Blog";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Routes = props => {
  return (
    <div {...props}>
      <Router history={history}>
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog/post" component={BlogPost} />
          <Route exact path="/blog" component={Blogs} />
          <Route exact path="/blog/:title/:issueNumber" component={Blog} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/thanks" component={Thanks} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
};
export default styled(Routes)`
  position: relative;
  margin-top: 97.1833;
`;
