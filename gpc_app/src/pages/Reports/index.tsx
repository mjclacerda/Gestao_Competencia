import Header from "../../components/Header";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import { BoxColumn, StyledBox } from "../../components/Component";
import { useTable } from "react-table";
import { useMemo } from "react";

export default function Report() {
  const data = useMemo(
    () => [
      {
        col1: "Atendimento ao Público",
        col2: "25%",
        col3: "25%",
        col4: "50%",
        col5: "Capacitar",
      },
      {
        col1: "Comunicação",
        col2: "5%",
        col3: "75%",
        col4: "20%",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Conhecimento Técnico",
        col2: "25%",
        col3: "55%",
        col4: "20%",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Foco no Usuário",
        col2: "60%",
        col3: "20%",
        col4: "20%",
        col5: "Observar",
      },
      {
        col1: "Inteligência Emocional",
        col2: "78%",
        col3: "21%",
        col4: "1%",
        col5: "Rever",
      },
      {
        col1: "Liderança",
        col2: "25%",
        col3: "5%",
        col4: "75%",
        col5: "Capacitar",
      },
      {
        col1: "Resolutividade",
        col2: "85%",
        col3: "5%",
        col4: "10%",
        col5: "Observar",
      },
      {
        col1: "Tomada de Decisão",
        col2: "35%",
        col3: "35%",
        col4: "30%",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Operar Sistemas",
        col2: "25%",
        col3: "5%",
        col4: "75%",
        col5: "Capacitar",
      },
      {
        col1: "Conhecimento Jurídico",
        col2: "78%",
        col3: "21%",
        col4: "1%",
        col5: "Rever",
      },
      {
        col1: "Motivação",
        col2: "25%",
        col3: "25%",
        col4: "50%",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Gestão do Tempo",
        col2: "5%",
        col3: "75%",
        col4: "20%",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Inovação",
        col2: "25%",
        col3: "55%",
        col4: "20%",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Empatia",
        col2: "60%",
        col3: "20%",
        col4: "20%",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Gerenciamento de Equipe",
        col2: "78%",
        col3: "21%",
        col4: "1%",
        col5: "Rever",
      },
      {
        col1: "Escuta Ativa",
        col2: "25%",
        col3: "5%",
        col4: "75%",
        col5: "Capacitar",
      },
      {
        col1: "Persuasão",
        col2: "85%",
        col3: "5%",
        col4: "10%",
        col5: "Observar",
      },
      {
        col1: "Monitoramento de Atividades",
        col2: "35%",
        col3: "35%",
        col4: "30%",
        col5: "Aperfeiçoar",
      },
      {
        col1: "Gestão Estratégica",
        col2: "25%",
        col3: "5%",
        col4: "75%",
        col5: "Capacitar",
      },
      {
        col1: "Gestão de Pessoas",
        col2: "78%",
        col3: "21%",
        col4: "1%",
        col5: "Rever",
      },
      {
        col1: "Visão Organizacional",
        col2: "25%",
        col3: "25%",
        col4: "50%",
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
        columns: [
          {
            Header: "Baixa",
            accessor: "col2",
          },
          {
            Header: "Média",
            accessor: "col3",
          },
          {
            Header: "Alta",
            accessor: "col4",
          },
        ],
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
              marginLeft: "2vw",
              marginRight: "2vw",
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
                          minWidth: 200,
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
