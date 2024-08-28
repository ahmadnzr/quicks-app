import React from "react";

import { Modal } from "../Modal";
import { TaskList } from "./TaskList";

type ModalType = Required<
  Pick<React.ComponentProps<typeof Modal>, "targetRef" | "isOpen">
>;

export const TaskModal = ({ targetRef, isOpen }: ModalType) => {
  return (
    <Modal
      targetRef={targetRef}
      isOpen={isOpen}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TaskList />
    </Modal>
  );
};
