import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Message from "../../Components/Message/Message";

import "../../Containers/BlogPost/BlogPost.css";

function Messages(props) {
  const [messages, setMessages] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:30662/api/messages");
      const json = await response.json();
      setMessages(
        json.sort(function(a, b) {
          return a.date < b.date;
        })
      );
    }

    fetchData();
  }, []);

  return (
    <div {...props}>
      {messages &&
        messages.map((message, i) => {
          return (
            <div>
              <h1>Messages</h1>
              <Message key={i} email={message.email} date={message.date}>
                {message.message}
              </Message>
            </div>
          );
        })}
    </div>
  );
}

export default styled(Messages)`
  h1 {
    color: #77126e;
  }

  h2 {
    margin: 0;
  }

  width: 800px;
  max-width: 100%;
  margin: auto;
`;
