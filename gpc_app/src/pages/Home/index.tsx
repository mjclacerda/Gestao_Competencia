import Header from "../../components/Header";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import { BoxColumn, FlexBox, StyledBox } from "../../components/Component";
import Semicircle from "../../components/dashchart/Semicircle";
import { BarChart } from "../../components/dashchart/BarChart";
import { HistoryChart } from "../../components/dashchart/HistoryChart";

export default function Dashboard() {
  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Box display="flex" flexDirection="column">
          <Bar bg="#0fa3ff" path="./public/icon_speed.png" title="Dashboard" />
          <StyledBox>
            <div
              style={{
                position: "relative",
                left: "15vw",
              }}
            >
              <BoxColumn>
                <FlexBox style={{ marginTop: "7vh" }}>
                  <div
                    style={{
                      flex: 0.7,
                      background: "#f2f1f1",
                      minHeight: 50,
                      margin: 2,
                    }}
                  ></div>
                  <div
                    style={{
                      flex: 0.3,
                      background: "#0fa3ffda",
                      margin: 2,
                      minHeight: 50,
                      textAlign: "center",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      borderRadius: 4,
                    }}
                  >
                    Pessoas
                    <div
                      style={{
                        color: "#ffffff",
                        fontFamily: "sans-serif",
                        fontSize: 22,
                      }}
                    >
                      872
                    </div>
                  </div>
                  <div
                    style={{
                      flex: 0.3,
                      background: "#0fa3ffda",
                      minHeight: 50,
                      margin: 2,
                      textAlign: "center",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      borderRadius: 4,
                    }}
                  >
                    Unidades
                    <div
                      style={{
                        color: "#ffffff",
                        fontFamily: "sans-serif",
                        fontSize: 22,
                      }}
                    >
                      45
                    </div>
                  </div>
                </FlexBox>
                <FlexBox>
                  <Semicircle />
                  <BarChart />
                </FlexBox>
              </BoxColumn>
              <FlexBox style={{ maxHeight: 250, marginLeft: "31vw" }}>
                <HistoryChart />
              </FlexBox>
            </div>
          </StyledBox>
        </Box>
      </Box>
    </Box>
  );
}
