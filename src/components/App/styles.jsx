import styled from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: relative;
  padding: 0 10px;

  .topbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .doc {
    
    height: 50px;
    margin: 10px;
    position: fixed;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    border: none;
    padding: 0 15px;
    border-radius: 30px;
    background-color: purple;
    cursor: pointer;

    a {
      font-size: 12px;
      text-transform: uppercase;
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
  }

  .search-docs {
    width: 100%;
    align-items: center;
    display: flex;
    align-content: space-between;

    .search {
      align-content: space-between;
    }
  }

  .tabela {
    display: flex;
    width: 100%;
    margin: 10px 0;
    flex-direction: column;
    align-content: flex-start;
    height: 500px;
  }
`;
