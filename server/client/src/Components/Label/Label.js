import React from "react";

import styled from "styled-components";

function Label(props) {
  return <label {...props}>{props.children}</label>;
}

export default styled(Label)`
  color: #77126e;
  font-size: 24px;
  font-family: "Blinker SemiBold" !important;
  &::after {
    content: ${props => (props.required ? "''" : "none")};
    background: #77126e;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin-left: 4px;
  }
`;
