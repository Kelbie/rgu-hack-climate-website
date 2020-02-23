import React, { useState, useEffect, useCallback } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

import Header from "../../Components/Header/Header";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { config } from "../../config";
import LinkButton from "../../Components/LinkButton.js/LinkButton";
import { useForm } from "react-hook-form";
import Label from "../../Components/Label/Label";
import RichTextEditor from "react-rte";
import {
  faCalendar,
  faBriefcase,
  faComments,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

import { rgba } from "polished";

import styled from "styled-components";
import Button from "../../Components/Button/Button";

function Blogs(props) {
  const [body, setBody] = useState(RichTextEditor.createEmptyValue());
  const { setValue, register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      body: ""
    }
  });

  useEffect(() => {
    register({ name: "body" });
  }, []);

  const getBlogsFromGithubIssues = results => {
    console.log(123, results);
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
      .mutate({
        mutation: gql`
          mutation Post($title: String!, $body: String) {
            createIssue(
              input: {
                repositoryId: "MDEwOlJlcG9zaXRvcnkyNDIzNTE0NjE="
                labelIds: ["MDU6TGFiZWwxODY0OTg1Mzkz"]
                title: $title
                body: $body
              }
            ) {
              issue {
                body
              }
            }
          }
        `,
        variables: {
          title: results.title,
          body: results.body
        }
      })
      .then(() => {
        window.location.href = "/blog";
      });
  };

  const onSubmit = results => {
    getBlogsFromGithubIssues(results);
  };

  return (
    <div {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>CREATE BLOG POST</h1>
        <Label required>TITLE</Label>
        <input name="title" ref={register}></input>
        <Label required>BODY</Label>
        <RichTextEditor
          value={body}
          onChange={e => {
            setBody(e);
            setValue("body", e.toString("markdown"));
          }}
          toolbarConfig={{
            display: [
              "INLINE_STYLE_BUTTONS",
              "BLOCK_TYPE_BUTTONS",
              "LINK_BUTTONS",
              "BLOCK_TYPE_DROPDOWN",
              "HISTORY_BUTTONS"
            ],
            INLINE_STYLE_BUTTONS: [
              { label: "Bold", style: "BOLD", className: "custom-css-class" },
              { label: "Italic", style: "ITALIC" }
            ],
            BLOCK_TYPE_DROPDOWN: [
              { label: "Normal", style: "unstyled" },
              { label: "Heading Large", style: "header-one" },
              { label: "Heading Medium", style: "header-two" },
              { label: "Heading Small", style: "header-three" }
            ],
            BLOCK_TYPE_BUTTONS: [
              { label: "UL", style: "unordered-list-item" },
              { label: "OL", style: "ordered-list-item" }
            ]
          }}
        />
        <div className="button">
          <Button icon={faPaperPlane}>SUBMIT</Button>
        </div>
      </form>
    </div>
  );
}

export default styled(Blogs)`
  max-width: 800px;
  width: 100%;
  margin: auto;

  .button {
    display: flex;
    justify-content: flex-end;
  }

  > form {
    display: flex;
    flex-direction: column;

    > * {
      margin-bottom: 8px;
    }
  }

  h1 {
    font-size: 32px !important;
    margin-left: 8px;
  }

  input {
    background: ${rgba("#77126E", 0.05)};
    border: 1px solid #77126e;
    padding: 8px 16px;
    border-radius: 16px;
    font-size: 20px;
    color: #3b3b3b;
    box-shadow: 0px 3px 6px 0px ${rgba("#77126e", 0.1)};
    font-family: "Blinker SemiBold" !important;
  }

  ${Label} {
    margin-left: 8px;
  }

  h1 {
    color: #77126e;
    font-family: "Blinker SemiBold" !important;
    font-size: 42px;
  }

  .RichTextEditor__root___2QXK- {
    background: ${rgba("#77126e", 0.1)};
    border-radius: 16px;
    border: 1px solid #77126e;
  }

  .EditorToolbar__root___3_Aqz {
    border-bottom: 1px solid #77126e;
  }
`;
