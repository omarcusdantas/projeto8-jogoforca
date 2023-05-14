import { GameContainer, Container, Word } from "./style";
import forca0 from "../../assets/forca0.png";
import forca1 from "../../assets/forca1.png";
import forca2 from "../../assets/forca2.png";
import forca3 from "../../assets/forca3.png";
import forca4 from "../../assets/forca4.png";
import forca5 from "../../assets/forca5.png";
import forca6 from "../../assets/forca6.png";

export default function Jogo({wrongs, onClick, gameState, word, letters}) {
    const forcaImages = [
        forca0,
        forca1,
        forca2,
        forca3,
        forca4,
        forca5,
        forca6,
    ];

    return (
        <GameContainer>
            <img
                src={forcaImages[wrongs]}
                data-test="game-image"
                alt=""
            />
            <Container>
                <button onClick={onClick} data-test="choose-word">
                    Escolher Palavra
                </button>
                <Word gameState={gameState} data-test="word">
                    {gameState === "loose" || gameState === "win"
                        ? word
                        : letters.join("")}
                </Word>
            </Container>
        </GameContainer>
    );
}
