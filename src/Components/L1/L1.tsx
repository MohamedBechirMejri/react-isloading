import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import LData from "./L.json";

const L1 = ({ style }: { style?: React.CSSProperties }) => {
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

export default L1;
