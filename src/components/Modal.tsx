import { h, VNode } from "preact";
import { useEffect, useState } from "preact/hooks";
import Cookies from "js-cookie";

import "../styles/modal.css";

const LS_KEY = "cqwd";

interface Props {
  color?: string;
  children: React.ReactNode;
  footer?: React.ReactNode[];
}

export default function Modal({ children, footer }: Props): VNode {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const day = new Date().getDay().toString();

    const cookieDay = Cookies.get(LS_KEY);

    console.log("cday ", cookieDay);

    if (cookieDay) {
      if (day !== cookieDay) {
        setIsOpen(true);
        Cookies.set(LS_KEY, day, { expires: 3 });
      }
    } else {
      setIsOpen(true);
      Cookies.set(LS_KEY, day, { expires: 3 });
    }
  }, [setIsOpen]);

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
