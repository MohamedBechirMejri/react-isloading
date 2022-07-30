import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import L1Data from "./L1.json";

const L1 = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <Player
      autoplay
      loop
      src={L1Data}
      style={{
        ...style,
      }}
    />
  );
};

export default L1;
