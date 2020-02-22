import React from "react";

import styled from "styled-components";

import { Link as RouterLink } from "react-router-dom";

function Link(props) {
  return (
    <RouterLink {...props}>
      {props.children}
      <div className="underline"></div>
    </RouterLink>
  );
}

export default styled(Link)`
  color: #989898;
  padding: 8px;
  margin-top: 0px;
  text-decoration: none;
  transition: 1s ease 0s;

  .underline {
    width: 0%;
    height: 2px;
    background: #989898;
    transition: 0.3s ease 0s;
  }

  &:hover {
    .underline {
      width: 100%;
    }
  }
`;
