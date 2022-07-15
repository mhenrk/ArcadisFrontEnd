import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { TableRow } from "@mui/material";

export default function TableData({ rows }) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 600 }} size="medium" aria-label="tabela">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Valor</TableCell>
            <TableCell align="center">Data de Coleta</TableCell>
            <TableCell align="center">Situação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {rows.map((linha, index) => (
            <TableRow key={index}>
              <TableCell align="center">{linha.nome}</TableCell>
              <TableCell align="center">{linha.valor}</TableCell>
              <TableCell align="center">{linha.data_coleta}</TableCell>

              {linha.isViolated
                ? <TableCell align="center">Violado</TableCell>
                : <TableCell align="center"> - </TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
