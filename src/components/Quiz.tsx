import { h, VNode } from "preact";
import { useState } from "preact/hooks";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "../styles/quiz.css";

const quiz = {
  question: "What will the following code log to the console?",
  code: ` const age = 18
  if (age >= 18) {
    console.log("You are allowed to have a drink")
  } else {
    console.log("You are not allowed to have a drink")
  }`,
  choices: [
    { value: "You are allowed to have a drink", id: 1 },
    { value: "You are not allowed to have a drink", id: 2 },
  ],
  correctChoiceId: 1,
};

export default function Quiz(): VNode {
  const [choiceId, setChoiceId] = useState(null);

  const codeString = `
    const age = 18

    if (age >= 18) {
      console.log("You are allowed to have a drink")
    } else {
      console.log("You are not allowed to have a drink")
    }
  `;

  return (
    <div className="quiz-container">
      <div class="quiz-header">
        <h3 className="question-text">{quiz.question}</h3>
      </div>
      <div className="quiz-body">
        <SyntaxHighlighter language="javascript" style={atomOneDark}>
          {codeString}
        </SyntaxHighlighter>
        <ul className={`choices-list ${choiceId && "disabled"}`}>
          {quiz.choices.map((choice) => (
            <li
              className={`choice-list-item ${
                choiceId && choiceId == choice.id && "selected"
              }`}
              key={choice.id}
              onClick={() => setChoiceId(choice.id)}
            >
              <p className="choice-text">{choice.value}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="quiz-footer">
        {choiceId && quiz.correctChoiceId == choiceId && (
          <h3 className="correct">That's correct! Keep it up</h3>
        )}
        {choiceId && quiz.correctChoiceId != choiceId && (
          <h3 className="wrong">Sorry! You'll get it next time</h3>
        )}
      </div>
    </div>
  );
}
