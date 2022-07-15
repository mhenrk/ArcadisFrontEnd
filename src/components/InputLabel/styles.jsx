import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    label {
        margin: 10px 0;
        width: 100%;
        font-size: 14px;
        text-transform: uppercase;
        font-family: 'Montserrat';
        font-weight: bold;
    }

    input {
        padding: 10px;
        width: 100%;
        font-size: 16px;
        font-family: 'Montserrat';
        outline: none;
        border-radius: 5px;
        border: none;
        border-bottom: 5px solid rgba(0,0,0,0.2);
        margin: 5px 0px;
    }
`

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    label {
        margin: 10px 0;
        border: 1px solid blue;
        width: 50%;
        font-size: 14px;
        text-align: center;
        padding: 10px 0;
        text-transform: uppercase;
        font-family: 'Montserrat';
        font-weight: bold;
    }

    input {
        order: 0;
        padding: 10px;
        width: 100%;
        font-size: 16px;
        font-family: 'Montserrat';
        outline: none;
        border-radius: 5px;
        text-align: center;
        border: none;
        border-bottom: 5px solid rgba(0,0,0,0.2);
        margin: 5px;
    }

    button {
        order: 1;
        border: transparent;
        background-color: #a82da8;
        text-transform: uppercase;
        color: white;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
        width: 200px;
        height: 40px;
        margin: 0 10px;
        padding: 10px;
        font-weight: bold;
        font-size: 14px;
    }
`