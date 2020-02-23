import React, { useEffect, useState } from "react";

import Link from "../../Components/Link/Link";

import styled from "styled-components";
import Button from "../Button/Button";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import netzero from "./netzero.svg";

function Nav(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:30662/api/auth", {
        credentials: "include"
      });
      const json = await response.json();
      setUser(json);
    }

    fetchData();
  }, []);

  console.log(user);

  return (
    <div {...props}>
      <div className="max">
        <Link className="home" to="/">
          <span className="rgu">RGU</span>{" "}
          <span className="netzero">NETZERO</span>
          <img src={netzero}></img>
        </Link>
        <div className="nested-flex">
          <Link to="/blog">BLOG</Link>
          <Link to="/podcast">PODCAST</Link>
          <div>
            {user === undefined ||
            (Object.entries(user).length === 0 &&
              user.constructor === Object) ? (
              <Button
                onClick={() =>
                  (window.location.href = "http://localhost:30662/login")
                }
                icon={faSignInAlt}
              >
                LOGIN
              </Button>
            ) : (
              <Button
                onClick={() =>
                  (window.location.href = "http://localhost:30662/logout")
                }
                icon={faSignOutAlt}
              >
                LOGOUT
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default styled(Nav)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: white;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  z-index: 10000;

  .nested-flex {
    display: flex;

    > div {
      display: flex;

      button {
        align-self: center;
      }
    }
  }

  .rgu {
    color: #77126e;
  }

  .home {
    display: flex;
    margin-left: 0px !important;
    padding-left: 0px !important;
    img {
      width: 50px;
    }

    .underline {
      display: none;
    }
  }

  .max {
    display: flex;
    justify-content: space-between;
    > div {
      align-self: center;
    }
    display: flex;
    width: 800px;
    max-width: 100%;
    margin: auto;

    > * {
      margin-left: 16px;
    }
  }
`;
