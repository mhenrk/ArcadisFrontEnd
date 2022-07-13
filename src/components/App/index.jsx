import axios from "axios";
import { useState } from "react";
import { BotaoRetangular } from "../Modal/BotoesModal";
import { Container } from "./styles";
import BasicModal from "../Modal";
import { FormField } from "../Form";
import { InputLabel } from "../InputLabel";
import { DataGrid } from '@mui/x-data-grid';

function App() {

  const linhas = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

  const colunas = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

  //PESQUISA
  const [ponto, setPonto] = useState("");
  const [parametro, setParametro] = useState("");

  //TABELA
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  //CADASTRO DE PONTO
  const [nome, setNome] = useState("");
  const [xpos, setXpos] = useState("");
  const [ypos, setYpos] = useState("");

  //CADASTRO DE PARAMETRO
  const [nomeParam, setNomeParam] = useState("");
  const [valor, setValor] = useState("");
  const [dataColeta, setDataColeta] = useState("");
  const [pontoId, setPontoId] = useState("");

  const cadastrarNovoPonto = async (e) => {
    e.preventDefault();
    try {
      const dado = await axios.post("http://localhost:6001/ponto", {
        nome,
        xPos: xpos,
        yPos: ypos,
      });

      console.log(dado.data.body);
      
      if (dado.status === 201) {
        setColumns([
          { field: "nome", headerName: 'Nome'},
          { field: "xPos", headerName: 'Posição X'},
          { field: "yPos", headerName: 'Posição Y'}
        ]);
        setRows(dado.data);

        setNome("");
        setXpos("");
        setYpos("");
      }
    } catch (error) {
      console.log(`Ocorreu um erro: ${error}`);
    }
  };

  const cadastrarNovoParametro = async (e) => {
    e.preventDefault();

    const dataConvertida = new Date(dataColeta);
    console.log(dataConvertida);

    try {
      const dado = await axios.post("http://localhost:6001/parametro", {
        nome: nomeParam,
        valor: +valor,
        data_coleta: dataConvertida,
        pontosId: pontoId,
      });

      console.log(dado.data);

      if (dado.status === 201) {

        setColumns([
          { field: "nome", headerName: 'Nome'},
          { field: "valor", headerName: 'Valor'},
          { field: "data_coleta", headerName: 'Data de Coleta'},
          { field: "pontoId", headerName: 'Ponto'},
        ]);
        setRows(dado.data);

        setNomeParam("");
        setValor("");
        setDataColeta("");
        setPontoId("");
      }
    } catch (error) {
      console.log(`Ocorreu um erro: ${error}`);
    }
  };

  const getPontosParametros = async () => {
    try {
      const dado = await axios.get("http://localhost:6001/mostrar");
      console.log(dado.data);
      if (dado.status === 200) {

        setColumns([
          { field: "nome", headerName: 'Nome'},
          { field: "xPos", headerName: 'Posição X'},
          { field: "yPos", headerName: 'Posição Y'},
          { field: "nome", headerName: 'Nome'},
          { field: "valor", headerName: 'Valor'},
          { field: "data_coleta", headerName: 'Data de Coleta'}
        ]);
        setRows(dado.data);

      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPontosViolados = async () => {
    try {
      const dado = await axios.get("http://localhost:6001/violacoes");
      console.log(dado.data);
      setColumns([
        { field: "nome", headerName: 'Nome'},
        { field: "xPos", headerName: 'Posição X'},
        { field: "yPos", headerName: 'Posição Y'}
      ]);
      setRows(dado.data);
      if (dado.status === 200) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pesquisaParametros = async (e) => {
    e.preventDefault();

    try {
      const dado = await axios.get(
        `http://localhost:6001/parametro?nome=${parametro}`
      );

      console.log(dado.data);

      if (dado.status === 200) {
        setParametro("");
        setRows(dado.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pesquisaPonto = async (e) => {
    e.preventDefault();

    try {
      const dado = await axios.get(`http://localhost:6001/ponto?nome=${ponto}`);

      console.log(dado.data);

      if (dado.status === 200) {
        setPonto("");
        setRows(dado.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="topbar">
        <BotaoRetangular
          btnModalName="Ver Pontos e Parametros"
          btnOnClick={getPontosParametros}
        />

        <BotaoRetangular
          btnModalName="Ver Pontos Violados"
          btnOnClick={getPontosViolados}
        />

        <BasicModal btnType="btn" btnName="Pesquisar Parametro">
          <FormField
            formOnSubmit={pesquisaParametros}
            formMethod="get"
            submitButtonName="Pesquisar"
          >
            <InputLabel
              labelFor="nome"
              labelNome="Nome"
              inputType="text"
              inputValue={parametro}
              inputPlaceholder="Digite o Nome do Parametro"
              inputOnChange={(e) => setParametro(e.target.value)}
              inputNome="nome"
              inputId="nome"
            />
          </FormField>
        </BasicModal>

        {/* <BasicModal btnType="btn" btnName="Pesquisar Parametro">
          <form onSubmit={pesquisaParametros} method="get">
            <label htmlFor="nome"></label>
            <input
              type="text"
              value={parametro}
              placeholder="Digite o Nome do Parametro"
              onChange={(e) => setParametro(e.target.value)}
              name="nome"
              id="nome"
            />

            <button type="submit"> Pesquisar Parametro </button>
          </form>
        </BasicModal> */}

        <BasicModal btnType="btn" btnName="Pesquisar Ponto">
          <FormField
            formOnSubmit={pesquisaPonto}
            formMethod="get"
            submitButtonName="Pesquisar"
          >
            <InputLabel
              labelFor="nome"
              labelNome="Nome"
              inputType="text"
              inputValue={ponto}
              inputPlaceholder="Digite o Nome do Ponto"
              inputOnChange={(e) => setPonto(e.target.value)}
              inputNome="nome"
              inputId="nome"
            />
          </FormField>
        </BasicModal>

        {/* <BasicModal btnType="btn" btnName="Pesquisar Ponto">
          <form onSubmit={pesquisaPonto} method="get">
            <label htmlFor="nome"></label>
            <input
              type="text"
              value={ponto}
              placeholder="Digite o Nome do Ponto"
              onChange={(e) => setPonto(e.target.value)}
              name="nome"
              id="nome"
            />

            <button type="submit"> Pesquisar Ponto </button>
          </form>
        </BasicModal> */}

        <BasicModal btnType="btn" btnName="Cadastrar Ponto">
          <FormField
            formOnSubmit={cadastrarNovoPonto}
            formMethod="post"
            submitButtonName="Cadastrar"
          >
            <InputLabel
              labelFor="nome"
              labelNome="Nome"
              inputType="text"
              inputValue={nome}
              inputPlaceholder="Digite o Nome"
              inputOnChange={(e) => setNome(e.target.value)}
              inputNome="nome"
              inputId="nome"
            />

            <InputLabel
              labelFor="xPos"
              labelNome="Posição X"
              inputType="text"
              inputValue={xpos}
              inputPlaceholder="Posição X"
              inputOnChange={(e) => setXpos(e.target.value)}
              inputNome="xPos"
              inputId="xPos"
            />

            <InputLabel
              labelFor="yPos"
              labelNome="Posição Y"
              inputType="text"
              inputValue={ypos}
              inputPlaceholder="Posição Y"
              inputOnChange={(e) => setYpos(e.target.value)}
              inputNome="yPos"
              inputId="yPos"
            />
          </FormField>
        </BasicModal>

        {/* <BasicModal btnType="btn" btnName="Cadastrar Ponto">
          <form onSubmit={cadastrarNovoPonto} method="post">
            <label htmlFor="nome" />
            <input
              type="text"
              value={nome}
              placeholder="Digite o Nome"
              onChange={(e) => setNome(e.target.value)}
              name="nome"
              id="nome"
            />

            <label htmlFor="xPos"></label>
            <input
              type="text"
              value={xpos}
              placeholder="Digite o valor para xpos"
              onChange={(e) => setXpos(e.target.value)}
              name="xPos"
              id="xPos"
            />
            <label htmlFor="yPos"></label>
            <input
              type="text"
              value={ypos}
              placeholder="Digite o valor para ypos"
              onChange={(e) => setYpos(e.target.value)}
              name="yPos"
              id="yPos"
            />

            <button type="submit"> Cadastrar </button>
          </form>
        </BasicModal> */}
      </div>

      <div className="wrapper">
        
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
              inputValue={pontoId}
              inputPlaceholder="Digite o pontoID"
              inputOnChange={(e) => setPontoId(e.target.value)}
              inputNome="pontosId"
              inputId="pontosId"
            />
          </FormField>
        </BasicModal>

        <DataGrid autoPageSize={true} rows={linhas} columns={colunas} />
      </div>
    </Container>
  );
}

export default App;
