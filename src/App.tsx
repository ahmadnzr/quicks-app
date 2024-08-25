import styled from "styled-components";

import { FloatingButton, Modal } from "./components";
import { useRef, useState } from "react";

type BtnName = "chat" | "task";

function App() {
  const btnMenuRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const btnMenuRefs: Record<
    BtnName | "trigger",
    React.MutableRefObject<HTMLButtonElement | null>
  > = {
    trigger: useRef<HTMLButtonElement | null>(null),
    chat: useRef<HTMLButtonElement | null>(null),
    task: useRef<HTMLButtonElement | null>(null),
  };

  const [activeBtn, setActiveBtn] = useState<BtnName | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleClickTrigger = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (activeBtn) return;
    btnMenuRef.current?.classList.toggle("expanded");
  };

  const handleClickBtnMenu = (btn: BtnName) => {
    if (btn === "chat") {
      btnMenuRefs[btn].current?.classList.add("active");
      btnMenuRefs["task"].current?.classList.remove("active");
    } else {
      btnMenuRefs[btn].current?.classList.add("active");
      btnMenuRefs["chat"].current?.classList.remove("active");
    }

    triggerRef.current?.classList.add("active");
    setOpenModal(true);
    setActiveBtn(btn);
  };

  const handleReset = () => {
    setActiveBtn(null);
    setOpenModal(false);
    btnMenuRef.current?.classList.toggle("expanded");
    btnMenuRefs["chat"].current?.classList.remove("active");
    btnMenuRefs["task"].current?.classList.remove("active");
    triggerRef.current?.classList.remove("active");
  };

  return (
    <main>
      <FloatingButtonContainer>
        <HideContainer>
          <BtnMenu ref={btnMenuRef}>
            <FloatingButton
              ref={btnMenuRefs.task}
              className="btn__task"
              icon="task"
              btnType="secondary"
              onClick={() => handleClickBtnMenu("task")}
            />
            <FloatingButton
              className="btn__chat"
              ref={btnMenuRefs.chat}
              icon="chat"
              btnType="secondary"
              onClick={() => handleClickBtnMenu("chat")}
            />
          </BtnMenu>
        </HideContainer>

        <TriggerButtonContainer ref={triggerRef} onClick={handleReset}>
          <FloatingButton
            ref={btnMenuRefs.trigger}
            className="btn__trigger"
            icon={activeBtn || "feather"}
            onClick={handleClickTrigger}
          />
        </TriggerButtonContainer>

        <Modal targetRef={btnMenuRefs.trigger} isOpen={openModal} />
      </FloatingButtonContainer>
    </main>
  );
}

const FloatingButtonContainer = styled.div`
  position: fixed;
  bottom: 27px;
  right: 34px;
  display: flex;
  align-items: center;
`;

const HideContainer = styled.div`
  overflow: hidden;
  min-width: 0px;
  height: fit-content;
  margin-right: -34px;
`;

const BtnMenu = styled.div`
  position: relative;
  margin-right: -124px;
  border-radius: 68px;
  display: flex;
  align-items: center;
  gap: 26px;
  transition: 1s ease;

  &.expanded {
    margin-right: 62px;
  }

  & .btn__task,
  & .btn__chat {
    position: relative;
    transition: 1s ease;
  }

  & .btn__chat.active,
  .btn__task.active {
    display: none;
  }
`;

const TriggerButtonContainer = styled.div`
  height: 68px;
  width: 68px;
  background: gray;
  border-radius: 68px;
  padding-left: 0px;
  transition: 0.3s ease;

  &.active {
    padding-left: 14px;
  }
`;

export default App;
