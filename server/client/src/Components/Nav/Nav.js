import React from "react";

import Link from "../../Components/Link/Link";

import styled from "styled-components";
import Button from "../Button/Button";

function Nav(props) {
  return (
    <div {...props}>
      <div className="max">
        <Link to="/blog">BLOG</Link>
        <Link to="/podcast">PODCAST</Link>
        <Button onClick={() => (window.location.href = "/login")}>LOGIN</Button>
      </div>
    </div>
  );
}

export default styled(Nav)`
  background: #f7f7f7;
  padding: 8px;

  .max {
    display: flex;
    justify-content: right;
    width: 800px;
    max-width: 100%;
    margin: auto;
  }
`;
