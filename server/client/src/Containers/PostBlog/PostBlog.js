import React, { useCallback, useEffect } from "react";

import ApolloClient from "apollo-boost";
import { config } from "../../config";
import { gql } from "apollo-boost";

import styled from "styled-components";
import { useForm } from "react-hook-form";
import Label from "../../Components/Label/Label";

function PostBlog(props) {
  const { register } = useForm();

  const getBlogsFromGithubIssues = useCallback(() => {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob(config.githubConvertedToken)}`
          }
        });
      }
    });

    client
      .query({
        query: gql`
          {
            repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
              issues(first: 100, states: OPEN, filterBy: { labels: "blog" }) {
                nodes {
                  title
                  body
                  bodyHTML
                  bodyText
                  number
                  labels(first: 100) {
                    nodes {
                      color
                      name
                      id
                    }
                  }
                  author {
                    url
                    avatarUrl
                    login
                  }
                  updatedAt
                  id
                }
              }
            }
          }
        `
      })
      .then(result => {
        console.log(123, result.data.repository.issues.nodes);
      });
  }, []);
  useEffect(() => {
    getBlogsFromGithubIssues();
  }, [getBlogsFromGithubIssues]);

  function setBlogsFunction(array) {}

  return (
    <div {...props}>
      <Label required>Title</Label>
      <input name="title" ref={register}></input>
      <Label required>Content</Label>
    </div>
  );
}

export default styled(PostBlog)``;
