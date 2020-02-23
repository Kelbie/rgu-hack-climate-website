import React from "react";

import styled from "styled-components";

import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faBriefcase,
  faComments,
  faSave
} from "@fortawesome/free-solid-svg-icons";

import { darken } from "polished";

function Link(props) {
  return (
    <RouterLink {...props}>
      <span className="icon">
        <FontAwesomeIcon icon={props.icon} />
      </span>
      <span className="text">{props.children}</span>
    </RouterLink>
  );
}

export default styled(Link)`
  background: #77126e;
  padding: 16px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;

  border-radius: 16px;
  font-size: 20px;
  transition: 0.3s ease 0s;

  text-decoration: none;

  * {
    margin-bottom: 0px !important;
  }

  .text {
    margin-left: ${props => (props.icon ? "8px" : "0px")};
  }

  &:hover {
    background: ${darken(0.1, "#77126e")};
  }
`;
