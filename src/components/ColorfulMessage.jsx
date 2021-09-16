import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    color: color,
    fontSize: props.fontSize
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
