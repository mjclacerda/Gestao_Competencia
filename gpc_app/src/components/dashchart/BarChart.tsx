import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { BoxColumn } from "../Component";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y" as const,
  plugins: {
    title: {
      display: true,
      text: "Necessidade de Capacitação",
      position: "top" as const,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        drawOnChartArea: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["Comuns", "Gerenciais", "Específicas"];

const data = {
  labels,
  datasets: [
    {
      label: "Baixa",
      data: [30, 30, 20],
      backgroundColor: "#0fa3ffce",
    },
    {
      label: "Média",
      data: [20, 10, 70],
      backgroundColor: "#f9e99f",
    },
    {
      label: "Alta",
      data: [50, 60, 10],
      backgroundColor: "#e87164b3",
    },
  ],
};

export function BarChart() {
  return (
    <BoxColumn
      style={{
        maxWidth: "30vw",
        marginTop: "3vh",
        marginLeft: "3vw",
      }}
    >
      <Bar options={options} data={data} />
    </BoxColumn>
  );
}
