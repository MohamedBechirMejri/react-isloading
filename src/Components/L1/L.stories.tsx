import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import L from "./L";

export default {
  title: "Components/L",
  component: L,
} as Meta;

export const L1 = () => (
  <L
    style={{
      height: "15rem",
      width: "15rem",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  />
);
