import React, { useState, useEffect, useCallback } from "react";

import styled from "styled-components";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import readingTime from "reading-time";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { GithubCounter } from "react-reactions";

import { config } from "../../config";
import GithubReactionTextCard from "../../Components/GithubReactionTextCard/GithubReactionTextCard";

function Message(props) {
  const HyperLink = ({ children, ...props }) => (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="blog-post-anchor"
    >
      {children}
      <style jsx>
        {`
          a {
            color: #484848;
            font-weight: 400;
          }
        `}
      </style>
    </a>
  );

  const CodeBlock = ({ children }) => (
    <SyntaxHighlighter language="javascript" style={docco}>
      {children.props.children}
    </SyntaxHighlighter>
  );

  return (
    <div {...props}>
      <div className="">
        <h2 className="blog-title">{props.email}</h2>
        <div>
          <div className="author-details">
            <div>
              <p className="blog-date">
                {moment(props.date).format("DD MMM YYYY")} .{" "}
              </p>
            </div>
          </div>
        </div>
        <Markdown
          options={{
            overrides: {
              a: {
                component: HyperLink
              },
              pre: {
                component: CodeBlock
              }
            }
          }}
        >
          {props.children}
        </Markdown>
        {/* <GithubCounter counters={reactionCounter} onSelect={emoji => githubCounterEmojiSelect(emoji)} onAdd={() => githubCounterAddReaction()} /> */}
      </div>
    </div>
  );
}

export default styled(Message)``;
