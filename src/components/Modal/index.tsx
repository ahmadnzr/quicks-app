import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalPosition {
  top: number;
  left: number;
}

interface Props {
  targetRef?: React.RefObject<HTMLElement>;
  isOpen?: boolean;
  children?: React.ReactNode;
}

export const Modal = ({ targetRef, isOpen = false, children }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<ModalPosition>({ top: 0, left: 0 });
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    const updateModalPosition = () => {
      if (targetRef?.current && modalRef.current) {
        const rectTarget = targetRef.current.getBoundingClientRect();
        const rectModal = modalRef.current.getBoundingClientRect();

        setPosition({
          top: rectTarget.top - rectModal.height - 15 + window.scrollY,
          left:
            rectTarget.left -
            rectModal.width +
            rectTarget.width +
            window.scrollX,
        });
      }
    };

    window.addEventListener("resize", updateModalPosition);
    window.addEventListener("scroll", updateModalPosition);

    updateModalPosition();

    return () => {
      window.removeEventListener("resize", updateModalPosition);
      window.removeEventListener("scroll", updateModalPosition);
    };
  }, [targetRef, open]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setOpen(true), 100);
    } else {
      modalRef.current?.classList.remove("open");
      setTimeout(() => setOpen(false), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    if (open) {
      modalRef.current?.classList.add("open");
    }
  }, [open]);

  return ReactDOM.createPortal(
    open ? (
      <ModalStyled ref={modalRef} $position={position}>
        {children}
      </ModalStyled>
    ) : null,
    document.body,
  );
};

const ModalStyled = styled.div.attrs<{ $position: ModalPosition }>((props) => ({
  style: {
    top: `${props.$position.top}px`,
    left: `${props.$position.left}px`,
  },
}))`
  position: absolute;
  width: 734px;
  height: 737px;
  padding: 24px 32px;
  border: 1px solid #828282;
  border-radius: 8px;
  background: white;
  transform: translateY(10px);
  opacity: 0;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  pointer-events: none;

  &.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;
