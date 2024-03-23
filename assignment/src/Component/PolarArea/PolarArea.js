import React from 'react'
import { PolarArea } from "react-chartjs-2";

function PolarAreas({name}) {
    const country={...name.usage_statistics.by_country}
  return (
    <div>
        <PolarArea
        data={{
          labels: Object.keys(country),
          datasets: [
            {
              labels: "Revenue",
              data: Object.values(country),
            },
          ],
        }}
      />
    </div>
  )
}

export default PolarAreas