import styled from "styled-components";

export const FormContainer = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
        margin-top: 20px;
        width: 150px;
        height: 50px;
        background-color: #a82da8;
        font-weight: bold;
        color: white;
        font-size: 14px;
        text-transform: uppercase;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }
`