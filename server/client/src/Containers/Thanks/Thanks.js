import React from "react";

import styled from "styled-components";

import "../BlogPost/BlogPost.css";
import Link from "../../Components/Link/Link";
import Button from "../../Components/Button/Button";
import LinkButton from "../../Components/LinkButton.js/LinkButton";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Thanks(props) {
  return (
    <div {...props}>
      <h2>Thanks for contacting us!</h2>
      <p>We are urgently reviewing your email and will get back to you soon.</p>
      <LinkButton icon={faHome} to="/">
        HOME
      </LinkButton>
    </div>
  );
}

export default styled(Thanks)`
  max-width: 800px;
  width: 100%;
  margin: auto;
`;
