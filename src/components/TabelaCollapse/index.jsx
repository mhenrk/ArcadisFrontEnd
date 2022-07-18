import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BasicModal from "../Modal";
import axios from "axios";
import { FormField } from "../Form";
import { InputLabel } from "../InputLabel";

function Row({ row }) {
  //CADASTRO DE PARAMETRO
  const [nomeParam, setNomeParam] = useState("");
  const [valor, setValor] = useState("");
  const [dataColeta, setDataColeta] = useState("");
  const [pontoId, setPontoId] = useState("");
  const [rows, setRows] = useState([])
  const [open, setOpen] = React.useState(false);

  const cadastrarNovoParametro = async (e) => {
    e.preventDefault();

    const dataConvertida = new Date(dataColeta);

    try {
      const dado = await axios.post("http://localhost:6001/parametro", {
        nome: nomeParam,
        valor: +valor,
        data_coleta: dataConvertida,
        pontosId: row.id,
      });

      if (dado.status === 201) {
        setRows(dado.data.body);

        setNomeParam("");
        setValor("");
        setDataColeta("");
        setPontoId("");
      }
    } catch (error) {
      console.log(`Ocorreu um erro: ${error}`);
    }
  };

  return (

    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{row.nome}</TableCell>
        <TableCell align="center">{row.xPos}</TableCell>
        <TableCell align="center">{row.yPos}</TableCell>
        <TableCell align="center">{row.createdAt}</TableCell>

        <TableCell align="center">
          <BasicModal btnType="circle">
            <FormField
              formOnSubmit={cadastrarNovoParametro}
              formMethod="post"
              submitButtonName="Pesquisar"
            >
              <InputLabel
                labelFor="nome"
                labelNome="Nome"
                inputType="text"
                inputValue={nomeParam}
                inputPlaceholder="Digite o Nome do Parametro"
                inputOnChange={(e) => setNomeParam(e.target.value)}
                inputNome="nome"
                inputId="nome"
              />

              <InputLabel
                labelFor="valor"
                labelNome="Valor"
                inputType="number"
                inputValue={valor}
                inputPlaceholder="Digite o Valor do Parametro"
                inputOnChange={(e) => setValor(e.target.value)}
                inputNome="valor"
                inputId="valor"
              />

              <InputLabel
                labelFor="data_coleta"
                labelNome="Data de Coleta"
                inputType="datetime-local"
                inputValue={dataColeta}
                inputPlaceholder="Informe a data de coleta"
                inputOnChange={(e) => setDataColeta(e.target.value)}
                inputNome="data_coleta"
                inputId="data_coleta"
              />

              <InputLabel
                labelFor="pontosId"
                labelNome="PontoID"
                inputType="text"
                inputValue={row.id}
                inputPlaceholder="Digite o pontoID"
                inputNome="pontosId"
                inputId="pontosId"
                disable
              />
            </FormField>
          </BasicModal>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 3, paddingTop: 3 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {/* COLAPSE TABLE */}
            <Box sx={{ margin: 1 }}>
              <Typography
                align="center"
                variant="h6"
                gutterBottom
                component="div"
              >
                Parametros Cadastrados
              </Typography>
              <Table size="small" aria-label="params">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Nome</TableCell>
                    <TableCell align="center">Valor</TableCell>
                    <TableCell align="center">Data de Coleta</TableCell>
                    <TableCell align="center">Criado em</TableCell>
                    <TableCell align="center">Situação</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Parametros.map((ParametroRow, indice) => (
                    <TableRow key={indice}>
                      <TableCell align="center" component="th" scope="row">
                        {ParametroRow.nome}
                      </TableCell>
                      <TableCell align="center">{ParametroRow.valor}</TableCell>
                      <TableCell align="center">
                        {ParametroRow.data_coleta}
                      </TableCell>
                      <TableCell align="center">
                        {ParametroRow.createdAt}
                      </TableCell>
                      {ParametroRow.isViolated ? (
                        <TableCell align="center">Violado</TableCell>
                      ) : (
                        <TableCell align="center"> - </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            {/* COLAPSE TABLE */}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Posição X</TableCell>
            <TableCell align="center">Posição Y</TableCell>
            <TableCell align="center">Cadastrado em</TableCell>
            <TableCell align="center">Cadastrar Parametro</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
