import React from "react";
import { Container, Title, Input, Button } from "./style";

export default function Chute(props) {
    const [input, setInput] = React.useState("");

    return (
        <Container>
            <Title>Já sei a palavra!</Title>
            <Input onChange={(event) => setInput(event.target.value)} value={input} data-test="guess-input"></Input>
            <Button onClick={() => {props.onButtonClick(input); setInput("");}} disabled={!props.enabledKeyboard} data-test="guess-button">Chutar</Button>
        </Container>
    );
}