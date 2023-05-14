import React from "react";
import { Container } from "./style";

export default function Chute({ enabledKeyboard, onButtonClick }) {
    const [inputValue, setInputValue] = React.useState("");

    return (
        <Container>
            <h2>Já sei a palavra!</h2>
            <input
                onChange={(event) => setInputValue(event.target.value)}
                value={inputValue}
                disabled={!enabledKeyboard}
                data-test="guess-input"></input>
            <button
                onClick={() => {
                    onButtonClick(inputValue);
                    setInputValue("");
                }}
                disabled={!enabledKeyboard}
                data-test="guess-button">
                Chutar
            </button>
        </Container>
    );
}
