import React from "react";

import styled from "styled-components";
import { animated } from "react-spring";

import { Chart, defaults } from "react-chartjs-2";
import { HorizontalBar } from "react-chartjs-2";
Chart.defaults.scale.gridLines.display = false;
defaults.global.legend.display = false;

const data = {
  labels: [
    "Robert Gordon University",
    "University of Aberdeen",
    "University of Leeds",
    "Oxford University",
    "University of Nottingham"
  ],
  datasets: [
    {
      backgroundColor: ["rgba(109,18,119,0.2)"],
      borderColor: ["rgba(109,18,119,1)"],
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [90, 59, 50, 42, 41, 32, 21]
    }
  ]
};

const options = {};

function C02Chart(props) {
  return (
    <div {...props}>
      <HorizontalBar
        data={data}
        options={{
          scales: {
            xAxes: [
              {
                ticks: {
                  display: false //this will remove only the label
                }
              }
            ]
          }
        }}
      />
    </div>
  );
}

export default styled(C02Chart)``;
