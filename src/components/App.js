import React from "react";
import { GlobalStyle } from "./style";
import Jogo from "./Jogo/Jogo";
import Letras from "./Letras/Letras";

export default function App() {
    const [enabledKeybord, setEnabledKeybord] = React.useState(false);
    const [disabledKeys, setDisabledKeys] = React.useState([]);

    function startGame() {
        setEnabledKeybord(true);
        setDisabledKeys([]);
    }

    function handleKeyClick(index) {
        setDisabledKeys([...disabledKeys, index]);
    }

    return (
        <>
            <GlobalStyle />
            <Jogo onClick={startGame}></Jogo>
            <Letras enabledKeyboard={enabledKeybord}
                disabledKeys={disabledKeys}
                onKeyClick={handleKeyClick}></Letras>
        </>
    );
}
