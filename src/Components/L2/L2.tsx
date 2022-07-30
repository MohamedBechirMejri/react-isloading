import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import LData from "./L2.json";

const L2 = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <Player
      autoplay
      loop
      src={LData}
      style={{
        ...style,
      }}
    />
  );
};

export default L2;
