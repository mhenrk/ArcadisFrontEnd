import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    border: 2px solid red;    

    .topbar {
        width: 100%;
        height: 100px;
        border: 3px solid red;
        display: flex;
        align-items: center;
    }

    .wrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        height: 500px;
    }
`