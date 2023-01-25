import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const options = {
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: "Evolução da Competência",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
    x: {
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["2018", "2019", "2020", "2021", "2022"];

export const data = {
  labels,
  datasets: [
    {
      label: "Datasete",
      data: [5, 2, 4, 3, 4],
      borderColor: "#0fa3ffce",
      backgroundColor: "#0fa3ffce",
    },
  ],
};

export function HistoryChart() {
  return (
    <div style={{ marginTop: "3vh", marginLeft: "3vw", maxWidth: "30vw" }}>
      <Line options={options} data={data} />
    </div>
  );
}
