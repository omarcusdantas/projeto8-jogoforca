import styled from "styled-components";

export const GameContainer = styled.div`
    padding: 0 40px;
    margin: 60px auto;
    width: 1025px;
    display: flex;
    justify-content: space-between;
`;

export const GameImage = styled.img`
    width: 400px;
`;

export const Container = styled.div`
    padding: 35px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
`;

export const StartButton = styled.button`
    background-color: #27AE60;
    color: #FFFFFF;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 700;
    width: 200px;
    height: 60px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`;

export const Word = styled.div`
    font-family: "Noto Sans", sans-serif;
    font-size: 50px;
    font-weight: 700;

    color: ${(props) => {
            if (props.gameState === 'win') {
            return 'green';
            } else if (props.gameState === 'loose') {
            return 'red';
            } else if (props.gameState === 'playing') {
            return 'black';
            }
        }};
`;