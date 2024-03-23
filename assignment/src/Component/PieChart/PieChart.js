import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ name }) {
  const user = { ...name.user_satisfaction };
  return (
    <div>
      <Pie
        data={{
          labels: user.ratings.map((e) => e.rating),
          datasets: [
            {
              labels: "Revenue",
              data: user.ratings.map((e) => e.count),
            },
          ],
        }}
      />
    </div>
  );
}

export default PieChart;
