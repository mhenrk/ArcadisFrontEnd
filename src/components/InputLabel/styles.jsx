import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

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
        border-bottom: 5px solid red;
        margin: 5px 0px;
    }
`