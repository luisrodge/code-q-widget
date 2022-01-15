import { h, VNode } from "preact";
import { useState } from "preact/hooks";

import "../styles/modal.css";

interface Props {
  color?: string;
  children: React.ReactNode;
  footer?: React.ReactNode[];
}

export default function Modal({ children, footer }: Props): VNode {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  const close = () => setIsOpen(false);

  return (
    <div className="modal-window">
      <div>
        <button className="modal-close" onClick={close}>
          Close
        </button>
        <div className="modal-body">{children}</div>
        {footer && footer.length > 0 && (
          <div className="modal-footer">{footer.map((node) => node)}</div>
        )}
      </div>
    </div>
  );
}
