'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    labels: ["Bank 1", "Bank 2", "Bank 3"],
    datasets: [
      {
        label: "Banks",
        data:[1250,2500,3750],
        backgroundColor: ['#0747b6','#2265b8', '#2f91fa'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Doughnut data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
          legend: {
            display: false,
          },
        },
      }}/>
  )
}

export default DoughnutChart