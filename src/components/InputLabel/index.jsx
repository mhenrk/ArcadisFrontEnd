import { Container, SearchContainer } from "./styles";

export const InputLabel = (props) => {
  return (
    <Container>
      <label htmlFor={props.labelFor}>{props.labelNome}</label>
      <input
        type={props.inputType}
        value={props.inputValue}
        placeholder={props.inputPlaceholder}
        onChange={props.inputOnChange}
        name={props.inputNome}
        id={props.inputId}
      />
    </Container>
  );
};

export const InputSearch = (props) => {
  return (
    <SearchContainer>      
      <input
        type={props.inputType}
        value={props.inputValue}
        placeholder={props.inputPlaceholder}
        onChange={props.inputOnChange}
        name={props.inputNome}
        id={props.inputId}
      />
      <button onClick={props.btnClick} type="submit">Pesquisar</button>
    </SearchContainer>
  );
};
