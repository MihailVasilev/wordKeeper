import React from "react";
import ReactLoading from "react-loading";

function SimpleLoader({
  type = "spinningBubbles",
  color = "#6dc0fa",
  height = "6%",
  width = "6%",
  className = "spinner",
}) {
  return (
    <ReactLoading
      className={className}
      type={type}
      color={color}
      height={height}
      width={width}
    />
  );
}

export default SimpleLoader;
