import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart({ name }) {
  const category_distribution = { ...name.category_distribution };

  return (
    <div>
      <Bar
        data={{
          labels: Object.keys(category_distribution),
          datasets: [
            {
              labels: "Revenue",
              data: Object.values(category_distribution),
            },
          ],
        }}
      />
    </div>
  );
}

export default BarChart;
