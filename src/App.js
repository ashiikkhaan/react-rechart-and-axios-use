import "./App.css";
import MyLineChart from "./components/MyLineChart/MyLineChart";
import SpecialChart from "./components/SpecialChart/SpecialChart";

function App() {
  return (
    <div className="App">
      <h1>recharts.org</h1>
      <MyLineChart></MyLineChart>
      <h2>Bar chart using axios</h2>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
