import React from "react";
import { GlobalStyle } from "./style";
import Jogo from "./Jogo/Jogo";
import Letras from "./Letras/Letras";
import palavras from "../palavras";

export default function App() {
    const [enabledKeybord, setEnabledKeybord] = React.useState(false);
    const [disabledKeys, setDisabledKeys] = React.useState([]);
    const [word, setWord] = React.useState("");
    const [letters, setLetters] = React.useState([]);

    function getIndexOfLetter(str, letter) {
        const index = [];
        const normalizedStr = str.normalize("NFD");

        for (let i = 0; i < normalizedStr.length; i++) {
            const normalizedChar = normalizedStr[i].toLowerCase();

            if (normalizedChar === letter.toLowerCase()) {
                index.push(i);
            }
        }

        return index;
    }

    function updateLetters(start = false, letter) {
        if (start) {
            const newLetters = Array(start.length).fill(" _");
            setLetters(newLetters);
            return;
        }

        const indexes = getIndexOfLetter(word, letter);
        const newLetters = letters.map((item, index) => {
            if (indexes.includes(index)) {
                return letter;
            } else {
                return item;
            }
        });

        setLetters(newLetters);
    }

    function selectWord() {
        const randomIndex = Math.floor(Math.random() * palavras.length);
        const newWord = palavras[randomIndex];
        console.log(newWord);
        setWord(newWord);
        updateLetters(newWord);
    }

    function startGame() {
        setEnabledKeybord(true);
        setDisabledKeys([]);
        selectWord();
    }

    function handleKeyClick(index, letter) {
        setDisabledKeys([...disabledKeys, index]);
        updateLetters(false, letter);
    }

    return (
        <>
            <GlobalStyle />
            <Jogo onClick={startGame} letters={letters}></Jogo>
            <Letras
                enabledKeyboard={enabledKeybord}
                disabledKeys={disabledKeys}
                onKeyClick={handleKeyClick}></Letras>
        </>
    );
}
