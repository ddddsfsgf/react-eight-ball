import React from "react";
import "./EightBall.css";
import defaultAnswers from "./answers.json";
import { choice } from "./random"

// EightBall: shows random answer and, on click, changes answer,
function EightBall({answers = defaultAnswers}) {
    const [answer, setAnswer] = React.useState({
        msg: "Think of a question.",
        color: "black"
    });

    function handleClick(e) {
        setAnswer(choice(answers));
    } 

    return (
        <>
        <div
        className="EightBall"
        onClick={handleClick}
        style={{backgroundColor: answer.color}}>
            <b>{answer.msg}</b>
        </div>
        </>
    )
}

export default EightBall;


