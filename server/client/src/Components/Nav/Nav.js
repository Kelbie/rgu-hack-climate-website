import React, { useEffect, useState } from "react";

import Link from "../../Components/Link/Link";

import styled from "styled-components";
import Button from "../Button/Button";

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
        <Link to="/blog">BLOG</Link>
        <Link to="/podcast">PODCAST</Link>
        {user === undefined ||
        (Object.entries(user).length === 0 && user.constructor === Object) ? (
          <Button
            onClick={() =>
              (window.location.href = "http://localhost:30662/login")
            }
          >
            LOGIN
          </Button>
        ) : (
          <Button
            onClick={() =>
              (window.location.href = "http://localhost:30662/logout")
            }
          >
            LOGOUT
          </Button>
        )}
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

    > * {
      margin-left: 16px;
    }
  }
`;
