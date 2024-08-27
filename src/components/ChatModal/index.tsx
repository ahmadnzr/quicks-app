import React, { useEffect, useState } from "react";

import { Modal } from "../Modal";
import { ChatList } from "./ChatList";
import { ChatDetail } from "./ChatDetail";

type ModalType = Required<
  Pick<React.ComponentProps<typeof Modal>, "targetRef" | "isOpen">
>;

export const ChatModal = ({ targetRef, isOpen }: ModalType) => {
  const [step, setStep] = useState<"list" | "detail">("detail");
  const [chatId, setChatId] = useState<number | undefined>(undefined);

  const handleClikChat = (chatId: number) => {
    setChatId(chatId);
    setStep("detail");
  };

  const content: Record<typeof step, React.ReactNode> = {
    list: <ChatList onClick={handleClikChat} />,
    detail: (
      <ChatDetail
        chatId={chatId}
        onBack={() => {
          setStep("list");
        }}
      />
    ),
  };

  useEffect(() => {
    if (!isOpen) {
      setStep("list");
    }
  }, [isOpen]);

  return (
    <Modal
      targetRef={targetRef}
      isOpen={isOpen}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {content[step]}
    </Modal>
  );
};
