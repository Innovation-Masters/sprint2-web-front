import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import { DivOver } from "./quiz-styled";



const GameOver=()=>{
    const [quizState, dispatch] = useContext(QuizContext);

    return(
        <DivOver id="gameover">
            <h2>Fim de Jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.correctAnswers} de {quizState.questions.length}{""} perguntas.</p>
            <button onClick={()=> dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        </DivOver>
    )
}

export default GameOver