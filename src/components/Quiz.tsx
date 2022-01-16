import { h, VNode } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { quizzes } from "../data/quizzes";
import "../styles/quiz.css";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Quiz(): VNode {
  const [quiz, setQuiz] = useState(undefined);
  const [choiceId, setChoiceId] = useState(null);

  useEffect(() => {
    const randQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
    setQuiz(randQuiz);
  }, [quiz]);

  if (!quiz) return null;

  return (
    <div className="quiz-container">
      <div class="quiz-header">
        <h3 className="question-text">{quiz.question}</h3>
      </div>
      <div className="quiz-body">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          codeTagProps={{ className: "code-highlighter" }}
        >
          {quiz.code}
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
