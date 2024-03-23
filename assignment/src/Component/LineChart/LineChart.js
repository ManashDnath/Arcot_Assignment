import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ name }) {
  const datess = { ...name.response_times };
  return (
    <div>
      <Line
        data={{
          labels: datess.day_wise.map((e) => e.date),
          datasets: [
            {
              labels: "Revenue",
              data: datess.day_wise.map((e) => e.average_time),
            },
          ],
        }}
      />
      <Line
        data={{
          labels: datess.week_wise.map((e) => e.week),
          datasets: [
            {
              labels: "Revenue",
              data: datess.week_wise.map((e) => e.average_time),
            },
          ],
        }}
      />
    </div>
  );
}

export default LineChart;
