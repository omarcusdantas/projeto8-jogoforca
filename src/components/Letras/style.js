import styled from "styled-components";

export const Keybord = styled.div`
    margin: 70px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    width: 665px;

    @media (max-width: 768px) {
        width: 300px;
        margin: 0 auto;
    } 
`;

export const KeyButton = styled.button`
    background-color: #E1ECF4;
    color: #39739D;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 700;
    width: 40px;
    height: 40px;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    cursor: pointer;

    &:disabled {
        background-color: #9FAAB5;
        color: #798A9F;
        cursor: default;
    }
`;