import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    border: 1px solid rgba(0,0,0,0.2);    
    border-radius: 5px;

    .topbar {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .wrapper {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-content: flex-start;
        height: 500px;

        .search-container {
            width: 100%;
            margin: 20px 0;
            display: flex;
        }

        .search {
            align-items: flex-end;
            width: 40%;
        }

        .leftside {
            width: 60%;
        }
    }
`