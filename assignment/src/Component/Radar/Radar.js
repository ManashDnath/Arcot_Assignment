import React from "react";

import { Radar } from "react-chartjs-2";

function Radars({ name }) {
  const platform = { ...name.usage_statistics.by_platform };
  return (
    <div>
      <Radar
        data={{
          labels: Object.keys(platform),
          datasets: [
            {
              labels: "Revenue",
              data: Object.values(platform),
            },
          ],
        }}
      />
    </div>
  );
}

export default Radars;
