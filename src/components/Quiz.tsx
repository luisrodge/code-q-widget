import { h, VNode } from "preact";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "../styles/quiz.css";

export default function Quiz(): VNode {
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
        <h3 className="question-text">
          What will the following code log to the console?
        </h3>
      </div>
      <div className="quiz-body">
        <SyntaxHighlighter language="javascript" style={atomOneDark}>
          {codeString}
        </SyntaxHighlighter>
        <ul className="choices-list">
          <li className="choice-list-item">You are allowed to have a drink</li>
          <li className="choice-list-item">
            You are not allowed to have a drink
          </li>
        </ul>
      </div>
      <div className="quiz-footer">
        <h3 className="correct">That's correct! Keep it up</h3>
      </div>
    </div>
  );
}
