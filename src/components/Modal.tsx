import { h, VNode } from "preact";
import { useEffect, useState } from "preact/hooks";
import Cookies from "js-cookie";

import "../styles/modal.css";

const COOKIE_DAY_KEY = "qw_d";
const COOKIE_SHOW_KEY = "s_qw";

interface Props {
  color?: string;
  children: React.ReactNode;
  footer?: React.ReactNode[];
}

export default function Modal({ children, footer }: Props): VNode {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (Cookies.get(COOKIE_SHOW_KEY)) return;

    const day = new Date().getDay().toString();

    const cookieDay = Cookies.get(COOKIE_DAY_KEY);

    if (cookieDay) {
      if (day !== cookieDay) {
        setIsOpen(true);
        Cookies.set(COOKIE_DAY_KEY, day, { expires: 3 });
      }
    } else {
      setIsOpen(true);
      Cookies.set(COOKIE_DAY_KEY, day, { expires: 3 });
    }
  }, [setIsOpen]);

  if (!isOpen) return null;

  const onClose = () => setIsOpen(false);

  const onDontShowAgain = () => {
    Cookies.set(COOKIE_SHOW_KEY, "false", { expires: 31 });
    setIsOpen(false);
  };

  return (
    <div className="modal-window">
      <div>
        <div className="modal-header">
          <p class="question-text">Code question of the day</p>

          <div>
            <button className="modal-btn" onClick={onDontShowAgain}>
              Don't show again
            </button>
            <button className="modal-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>

        <div className="modal-body">{children}</div>
        {footer && footer.length > 0 && (
          <div className="modal-footer">{footer.map((node) => node)}</div>
        )}
      </div>
    </div>
  );
}
