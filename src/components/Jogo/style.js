import styled from "styled-components";

export const GameContainer = styled.div`
    padding: 0 40px;
    margin: 60px auto;
    max-width: 1025px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin: 20px auto;
    }

    img {
        width: 400px;

        @media (max-width: 768px) {
            width: 250px;
        }
    }
`;

export const Container = styled.div`
    padding: 35px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    @media (max-width: 768px) {
        align-items: center;
        gap: 20px;
    }

    button {
        background-color: #27ae60;
        color: #ffffff;
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        font-weight: 700;
        width: 200px;
        height: 60px;
        border-radius: 8px;
        border: none;
        cursor: pointer;

        @media (max-width: 768px) {
            font-size: 15px;
            width: 150px;
            height: 40px;
        }
    }
`;

export const Word = styled.div`
    font-family: "Noto Sans", sans-serif;
    font-size: 50px;
    font-weight: 700;

    color: ${({gameState}) => {
        if (gameState === "win") {
            return "green";
        } else if (gameState === "loose") {
            return "red";
        } else if (gameState === "playing") {
            return "black";
        }
    }};
`;
