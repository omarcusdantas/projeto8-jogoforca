import styled from "styled-components";

export const Container = styled.div`
    padding: 0 20px;
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 768px) {
        margin: 40px 0;
    }

    h2 {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 20px;
    }

    input {
        font-weight: 400;
        font-size: 20px;
        text-align: center;
        max-width: 353px;
        min-width: 300px;
        height: 40px;
        border: 1px solid #cccccc;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
    }

    button {
        background-color: #e1ecf4;
        color: #39739d;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 700;
        width: 100px;
        height: 40px;
        border: 1px solid #7aa7c7;
        border-radius: 3px;
        cursor: pointer;

        &:disabled {
            background-color: #9faab5;
            color: #798a9f;
            cursor: default;
        }
    }
`;
