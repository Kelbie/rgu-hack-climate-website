import React from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faBriefcase,
  faComments,
  faSave
} from "@fortawesome/free-solid-svg-icons";
import { darken } from "polished";

function Button(props) {
  console.log(321, props);
  return (
    <button {...props}>
      <span className="icon">
        <FontAwesomeIcon icon={props.icon} />
      </span>
      <span className="text">{props.children}</span>
    </button>
  );
}

export default styled(Button)`
  background: #77126e;
  padding: 16px;
  border: none;
  border-radius: 16px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  font-size: 20px;
  transition: 0.3s ease 0s;

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
