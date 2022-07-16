import styled from "styled-components";

export const Container = styled.div`
    min-width: 250px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        width: 100%;
        height: 50px;
        background: #a82da8;
        color: white;
        border: none;
        padding: 0 10px;
        border-radius: 5px;
        text-transform: uppercase;
        font-family: "montserrat";
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            background: #7c247c;
        }
    }
`