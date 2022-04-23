import "./App.css";
import MyLineChart from "./components/MyLineChart/MyLineChart";
import SpecialChart from "./components/SpecialChart/SpecialChart";
import { useSpring, animated, config } from "react-spring";
import { useState } from "react";

function App() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => setFlip(!flip),
  });

  return (
    <div className="App">
      <h1>recharts.org</h1>
      <MyLineChart></MyLineChart>
      <h2>Bar chart using axios</h2>
      <SpecialChart></SpecialChart>
      <h2>react animation </h2>
      <animated.h1 style={props}>Hello, I will fade in.</animated.h1>
    </div>
  );
}

export default App;
