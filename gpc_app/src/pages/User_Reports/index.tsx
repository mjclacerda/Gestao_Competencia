import Header from "../../components/Header_user";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu_user";
import { BoxColumn } from "../../components/Component";
import Bar from "../../components/Bar";
import { useTable } from "react-table";
import { useMemo } from "react";

export default function Report() {
  const data = useMemo(
    () => [
      {
        col1: "Atendimento ao Público",
        col2: "alta",
        col5: "Capacitar",
      },
      {
        col1: "Comunicação",
        col2: "média",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Conhecimento Técnico",
        col2: "média",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Foco no Usuário",
        col2: "baixa",
        col5: "Observar",
      },
      {
        col1: "Inteligência Emocional",
        col2: "baixa",
        col5: "Observar",
      },
      {
        col1: "Liderança",
        col2: "alta",
        col5: "Capacitar",
      },
      {
        col1: "Resolutividade",
        col2: "baixa",
        col5: "Observar",
      },
      {
        col1: "Tomada de Decisão",
        col2: "média",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Operar Sistemas",
        col2: "alta",
        col5: "Capacitar",
      },
      {
        col1: "Conhecimento Jurídico",
        col2: "baixa",
        col5: "Observar",
      },
      {
        col1: "Motivação",
        col2: "média",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Gestão do Tempo",
        col2: "média",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Inovação",
        col2: "média",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Empatia",
        col2: "média",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Gerenciamento de Equipe",
        col2: "baixa",
        col5: "Observar",
      },
      {
        col1: "Escuta Ativa",
        col2: "alta",
        col5: "Capacitar",
      },
      {
        col1: "Persuasão",
        col2: "baixa",
        col5: "Observar",
      },
      {
        col1: "Monitoramento de Atividades",
        col2: "média",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Gestão Estratégica",
        col2: "alta",
        col5: "Capacitar",
      },
      {
        col1: "Gestão de Pessoas",
        col2: "baixa",
        col5: "Observar",
      },
      {
        col1: "Visão Organizacional",
        col2: "média",
        col5: "Aperfeiçoar",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Competência",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Necessidade de Campacitação",
        accessor: "col2",
      },
      {
        Header: "Recomendação",
        accessor: "col5", // accessor is the "key" in the data
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Box display="flex" flexDirection="column">
          <Bar
            bg="#00D092"
            path="./public/icon_report.png"
            title="Relatórios"
          />
          <BoxColumn
            style={{
              maxHeight: "85vh",
              overflow: "auto",
              alignContent: "center",
              marginLeft: "20vw",
              marginRight: "20vw",
              marginTop: "5vh",
            }}
          >
            <table
              {...getTableProps()}
              style={{ border: "1px", borderColor: "#a09f9f" }}
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          minWidth: 150,
                          alignContent: "center",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              padding: "5px",
                              background: "#ebebeb",
                              textAlign: "center",
                              fontFamily: "sans-serif",
                            }}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </BoxColumn>
        </Box>
      </Box>
    </Box>
  );
}
