import React from "react";

import styled from "styled-components";

import Contact from "../../Components/Contact/Contact";
import Top from "../../Components/Top/Top";
import Partners from "../../Components/Partners/Partners";
import Nav from "../../Components/Nav/Nav";
import Cube from "../../Components/Cube/Cube";
import Section from "../../Components/Section/Section";
import C02Chart from "../../Components/C02Chart/C02Chart.js";

import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;

function Home({ className, ...props }) {
  const [spring, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  return (
    <div
      className={className}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <Top spring={spring} trans={[trans1, trans4]}></Top>
      <Section className="max">
        <div>
          <Reveal left>
            <h1>Visualising Air Pollution</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Reveal>
        </div>
        <Cube></Cube>
      </Section>
      <Section className="max">
        <Fade>
          <C02Chart spring={spring} trans={trans1}></C02Chart>
        </Fade>
        <div>
          <Reveal right>
            <h1>Carbon Footprint</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Reveal>
        </div>
      </Section>
      <Section className="max">
        <div>
          <h1>Partners</h1>
          <Partners></Partners>
        </div>
      </Section>
      <Section className="max">
        <Contact></Contact>
      </Section>
    </div>
  );
}

export default styled(Home)`
  width: 100%;
  margin: auto;

  .max-var {
    > div {
      display: flex;
      width: 800px;
      max-width: 100%;
      margin: auto;
    }
  }

  .max {
    width: 800px;
    max-width: 100%;
    margin: auto;
  }

  .background {
    background: #f7f7f7;
  }
`;
