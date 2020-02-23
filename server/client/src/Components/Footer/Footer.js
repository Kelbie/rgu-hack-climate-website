import React from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
function Footer(props) {
  return (
    <div {...props}>
      <div className="socials">Find us on...</div>

      <div className="socials">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </div>
  );
}

export default styled(Footer)`
  width: 100%;
  background: #77126e;
  color: white;

  padding: 16px;

  .socials {
    display: flex;
    flex-direction: row;
    width: max-content;
    margin: 16px auto;

    > * {
      margin: 0px 16px;
    }
  }
`;
