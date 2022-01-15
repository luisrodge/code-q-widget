import { h, VNode } from "preact";

import Modal from "./components/Modal";
import Quiz from "./components/Quiz";
import "./styles/style.css";

interface Props {
  color?: string;
}

export default function Widget(props: Props): VNode {
  return (
    <div>
      <Modal>
        <Quiz />
      </Modal>
    </div>
  );
}
