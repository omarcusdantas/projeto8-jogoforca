import { Keybord, KeyButton } from "./style";

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <Keybord>
            {alfabeto.map((letter, index) => 
                <Button 
                    key={index} 
                    letter={letter}
                    disabled={!props.enabledKeyboard || props.disabledKeys.includes(index)}
                    onClick={() => props.onKeyClick(index)}/>
            )}
        </Keybord>
    );
}

function Button(props) {
    return (
        <KeyButton disabled={props.disabled} onClick={props.onClick}>
            {props.letter.toUpperCase()}
        </KeyButton>
    )
}