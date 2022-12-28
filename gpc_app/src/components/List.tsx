import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import _ from "lodash";

interface IListInv {
  yearId: number;
  year: string;
  open: string;
  close: string;
}

export default function List({ listinv }: any) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ano do Inventário</TableCell>
            <TableCell align="right">Data da Abertura</TableCell>
            <TableCell align="right">Data do Encerramento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listinv?.map((inv: IListInv) => (
            <TableRow
              key={inv.yearId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {inv.year}
              </TableCell>
              <TableCell align="right">{inv.open}</TableCell>
              <TableCell align="right">{inv.close}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
