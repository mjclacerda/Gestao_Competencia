import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BoxColumn } from "../Component";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function Semicircle() {
  const data = {
    labels: ["Respondido", "Pendente"],
    datasets: [
      {
        label: "Inventário",
        data: [95, 5],
        backgroundColor: ["#0fa3ffce", "#e87164b3"],
      },
    ],
  };
  return (
    <BoxColumn style={{ minWidth: 400, alignItems: "center" }}>
      <Doughnut
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Progresso do Inventário",
            },
            legend: {
              display: true,
              position: "bottom",
            },
            tooltip: {
              enabled: true,
            },
          },
          rotation: -90,
          circumference: 180,
          cutout: "60%",
          responsive: true,
        }}
      />
      <div>
        <div
          style={{
            position: "relative",
            top: -130,
            fontFamily: "sans-serif",
            color: "#4d4d4d",
            fontSize: 30,
          }}
        >
          95%
        </div>
      </div>
    </BoxColumn>
  );
}
