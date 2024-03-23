import "./App.css";

import renderData from "./ai-data.json";
import BarCharts from "./Component/BarChart";
import LineChart from "./Component/LineChart/LineChart";
import PieChart from "./Component/PieChart/PieChart";
import PolarAreas from "./Component/PolarArea/PolarArea";
import Radars from "./Component/Radar/Radar";
import { Chart as ChartJS } from "chart.js/auto";

function App() {
  return (
    <div className="App">
      <BarCharts name={renderData} />
      <LineChart name={renderData} />
      <PieChart name={renderData} />
      <PolarAreas name={renderData} />
      <Radars name={renderData} /> 
    </div>
  );
}

export default App;
