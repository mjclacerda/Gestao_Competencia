import Header from "../../components/Header";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import { BoxColumn, FlexBox, StyledBox } from "../../components/Component";
import Semicircle from "../../components/dashchart/Semicircle";
import { BarChart } from "../../components/dashchart/BarChart";
import { HistoryChart } from "../../components/dashchart/HistoryChart";
import Resume from "../../components/dashchart/Resume";

export default function Dashboard() {
  const person = 872; //buscar esse dado do sistema
  const unit = 42; //buscar esse dado do sistema

  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Box display="flex" flexDirection="column">
          <Bar bg="#0fa3ff" path="./public/icon_speed.png" title="Dashboard" />
          <StyledBox>
            <FlexBox>
              <div style={{ margin: "7vw" }}>
                <Semicircle />
              </div>
              <FlexBox>
                <BoxColumn
                  style={{
                    marginTop: "3vh",
                    marginLeft: "5vw",
                  }}
                >
                  <Resume person={person} unit={unit} />
                  <BarChart />
                  <HistoryChart />
                </BoxColumn>
              </FlexBox>
            </FlexBox>
          </StyledBox>
        </Box>
      </Box>
    </Box>
  );
}
