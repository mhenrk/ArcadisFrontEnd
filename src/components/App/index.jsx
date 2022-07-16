import { InputLabel, InputSearch } from "../InputLabel";
import { BotaoRetangular } from "../Modal/BotoesModal";
import { Container } from "./styles";
import { FormField } from "../Form";
import { useState } from "react";
import CollapsibleTable from "../TabelaCollapse";
import BasicModal from "../Modal";
import TableData from "../Tabela";
import axios from "axios";

function App() {
  //PESQUISA
  const [ponto, setPonto] = useState("");
  const [parametro, setParametro] = useState("");

  //TABELA
  const [rowsTable, setRowsTable] = useState([]);
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);

  //CADASTRO DE PONTO
  const [nome, setNome] = useState("");
  const [xpos, setXpos] = useState("");
  const [ypos, setYpos] = useState("");

  const [rowData, setRowData] = useState([]);
  const [pesquisar, setPesquisar] = useState("")

  const getParametrosViolados = async () => {
    try {
      const dado = await axios.get("http://localhost:6001/parametro/violacoes");

      if (dado.status === 200) {
        setRowData(dado.data.body);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pesquisaParametros = async (e) => {

    e.preventDefault();

    try {
      const dado = await axios.get(
        `http://localhost:6001/parametro/pesquisar?nome=${pesquisar}`
      );

      if (dado.status === 200) {
        setData("");
        setData(dado.data.body);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const listarParametros = async (e) => {
    try {
      const dado = await axios.get(`http://localhost:6001/parametro`);

      if (dado.status === 200) {
        setParametro("");
        setData(dado.data.body);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cadastrarNovoPonto = async (e) => {
    e.preventDefault();

    try {
      const dado = await axios.post("http://localhost:6001/ponto", {
        nome,
        xPos: xpos,
        yPos: ypos,
      });

      if (dado.status === 201) {
        setNome("");
        setXpos("");
        setYpos("");
      }
    } catch (error) {
      console.log(`Ocorreu um erro: ${error}`);
    }
  };

  const getPontosParametros = async () => {
    try {
      const dado = await axios.get("http://localhost:6001/ponto");

      if (dado.status === 200) {
        setRows(dado.data.body);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pesquisaPonto = async (e) => {
    e.preventDefault();

    try {
      const dado = await axios.get(`http://localhost:6001/ponto/pesquisar?nome=${ponto}`);

      if (dado.status === 200) {
        setPonto("");
        setRows(dado.data.body);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (  
    <Container>
      <div className="topbar">
        
        <BotaoRetangular
          btnModalName="Pontos e Parametros"
          btnOnClick={getPontosParametros}
        />

        <BasicModal 
          btnType="btn" 
          onAfterOpen={getParametrosViolados}
          btnName="Pontos Violados"
        >
          <TableData rows={rowData} />
        </BasicModal>

        <BasicModal
          btnType="btn"
          btnName="Pesquisar Parametro"
          onAfterOpen={listarParametros}
        >
          <InputSearch
            inputType="text"
            inputValue={pesquisar}
            inputPlaceholder="Pesquisar Parametro"
            inputOnChange={(e) => setPesquisar(e.target.value)}
            inputNome="parametro"
            inputId="parametro"
            btnClick={pesquisaParametros}
          />
          <TableData rows={data} />
        </BasicModal>

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
      </div>

      <div className="wrapper">
        <div className="search-container">
          <div className="leftside"/>
          <div className="search">
            <InputSearch
              inputType="text"
              inputValue={ponto}
              inputPlaceholder="Pesquisar Ponto"
              inputOnChange={(e) => setPonto(e.target.value)}
              inputNome="ponto"
              inputId="ponto"
              btnClick={pesquisaPonto}
            />
          </div>
        
        </div>
        <CollapsibleTable rows={rows} />
      </div>
    </Container>
  );
}

export default App;
