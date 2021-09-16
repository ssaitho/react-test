import React, { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  if (num % 3 === 0) {
    faceShowFlag || setfaceShowFlag(true);
  } else {
    faceShowFlag && setfaceShowFlag(false);
  }

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue" message="お元気ですか？">
        お元気ですか？
      </ColorfulMessage>
      <ColorfulMessage color="pink" fontSize="20px">
        元気です！
      </ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </React.Fragment>
  );
};

export default App;
