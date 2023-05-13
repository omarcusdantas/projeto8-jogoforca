import React from "react";
import { GlobalStyle } from "./style";
import Jogo from "./Jogo/Jogo";
import Letras from "./Letras/Letras";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Jogo></Jogo>
            <Letras></Letras>
        </>
    );
}
