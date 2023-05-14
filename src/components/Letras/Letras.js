import { Keybord } from "./style";

export default function Letras({enabledKeyboard, disabledKeys, onKeyClick}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <Keybord>
            {alfabeto.map((letter, index) => (
                <Button
                    key={index}
                    letter={letter}
                    disabled={
                        !enabledKeyboard ||
                        disabledKeys.includes(index)
                    }
                    onClick={() => onKeyClick(index, alfabeto[index])}
                />
            ))}
        </Keybord>
    );
}

function Button({disabled, onClick, letter}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            data-test="letter">
            {letter.toUpperCase()}
        </button>
    );
}
