import { GameContainer, GameImage, Container, StartButton, Word } from "./style";
import forca0 from "../../assets/forca0.png";
import forca1 from "../../assets/forca1.png";
import forca2 from "../../assets/forca2.png";
import forca3 from "../../assets/forca3.png";
import forca4 from "../../assets/forca4.png";
import forca5 from "../../assets/forca5.png";
import forca6 from "../../assets/forca6.png";

export default function Jogo(props) {
    return (
        <GameContainer>
            <GameImage src={forca0}></GameImage>
            <Container>
                <StartButton onClick={props.onClick}>Escolher Palavra</StartButton>
                <Word>_ua _e _ _e _a</Word>
            </Container>
        </GameContainer>
    );
}