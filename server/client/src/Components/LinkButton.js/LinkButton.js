import React from "react";

import styled from "styled-components";

import { Link as RouterLink } from "react-router-dom";

function Link(props) {
  return <RouterLink {...props}>{props.children}</RouterLink>;
}

export default styled(Link)`
  background: #77126e;
  padding: 16px;
  border: none;
  border-radius: 2px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  text-decoration: none;
`;
