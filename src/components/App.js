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
    const [wrongs, setWrongs] = React.useState(0);
    const [points, setPoints] = React.useState(0);
    const [gameState, setGameState] = React.useState("playing");

    function checkGame(newPoints, missCount) {
        if (newPoints === word.length) {
            setGameState("win");
            setEnabledKeybord(false);
        }
        if (missCount === 6) {
            setEnabledKeybord(false);
            setGameState("loose");
        }
    }

    function getIndexOfLetter(str, letter) {
        const index = [];

        for (let i = 0; i < str.length; i++) {
            if (str[i] === letter) {
                index.push(i);
            }
        }

        if (index.length === 0) {
            setWrongs(wrongs+1);
            checkGame(points, wrongs+1)
            return index;
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

        setPoints(points+indexes.length);
        checkGame(points+indexes.length, wrongs);
        setLetters(newLetters);
    }

    function selectWord() {
        const randomIndex = Math.floor(Math.random() * palavras.length);
        const newWord = palavras[randomIndex];
        console.log(newWord);
        setWord(newWord);
        updateLetters(newWord);
    }

    function handleKeyClick(index, letter) {
        setDisabledKeys([...disabledKeys, index]);
        updateLetters(false, letter);
    }

    function startGame() {
        setEnabledKeybord(true);
        setDisabledKeys([]);
        setGameState("playing");
        setWrongs(0);
        setPoints(0);
        selectWord();
    }

    return (
        <>
            <GlobalStyle />
            <Jogo 
                onClick={startGame} 
                letters={letters}
                gameState={gameState}
                wrongs={wrongs}
                word={word}>
            </Jogo>
            <Letras
                enabledKeyboard={enabledKeybord}
                disabledKeys={disabledKeys}
                onKeyClick={handleKeyClick}>
            </Letras>
        </>
    );
}
