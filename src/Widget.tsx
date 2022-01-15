import { h, VNode } from "preact";

import Modal from "./components/Modal";
import Quiz from "./components/Quiz";
import "./styles/style.css";

export default function Widget(): VNode {
  return (
    <div>
      <Modal>
        <Quiz />
      </Modal>
    </div>
  );
}
