import { useRef, useState } from "react";
import styled from "styled-components";

import {
  FloatingButton,
  Modal,
  Profile,
  SearchInput,
  Text,
} from "./components";
import { Colors } from "./helpers/utils";

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

        <Modal
          targetRef={btnMenuRefs.trigger}
          isOpen={openModal}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <ModalHeader>
            <SearchInput />
          </ModalHeader>
          <ModalContent className="scroll">
            <ChatCard className="new-chat">
              <ProfileContainer>
                <Profile className="profile" primary={false} />
                <Profile className="profile" />
              </ProfileContainer>
              <DetailChat>
                <ChatMeta>
                  <Text
                    size="lg"
                    weight="bold"
                    color={Colors.primary.blue}
                    className="detail-chat_users"
                  >
                    109220-Naturalization
                  </Text>
                  <Text>01/01/2021 19:15</Text>
                </ChatMeta>
                <LastChat>
                  <Text weight="bold">Cameron Philips :</Text>
                  <Text size="sm">Please check this out!</Text>
                </LastChat>
              </DetailChat>
            </ChatCard>
            <ChatCard>
              <ProfileContainer>
                <Profile className="profile" primary={false} />
                <Profile className="profile" />
              </ProfileContainer>
              <DetailChat>
                <ChatMeta>
                  <Text
                    size="lg"
                    weight="bold"
                    color={Colors.primary.blue}
                    className="detail-chat_users"
                  >
                    Jeannette Moraime Chamba (Hutto I-589) [Hutto Follow Up -
                    Brief Service]
                  </Text>
                  <Text>02/06/2021 10:45</Text>
                </ChatMeta>
                <LastChat>
                  <Text weight="bold">Ellen :</Text>
                  <Text size="sm">Hey, please read.</Text>
                </LastChat>
              </DetailChat>
            </ChatCard>
            <ChatCard>
              <ProfileContainer>
                <Profile className="profile" primary={false} />
                <Profile className="profile" />
              </ProfileContainer>
              <DetailChat>
                <ChatMeta>
                  <Text
                    size="lg"
                    weight="bold"
                    color={Colors.primary.blue}
                    className="detail-chat_users"
                  >
                    8405-Diana SALAZAR MUNGUNIA
                  </Text>
                  <Text>01/06/2021</Text>
                </ChatMeta>
                <LastChat>
                  <Text weight="bold">Cameron Philips :</Text>
                  <Text size="sm" className="lastchat_preview">
                    I understand your initial concerns and thats very valid,
                    Elizabeth. But you can call me
                  </Text>
                </LastChat>
              </DetailChat>
            </ChatCard>
          </ModalContent>
        </Modal>
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

const ModalHeader = styled.div``;
const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
  position: relative;
  margin-right: -13px;
  padding-right: 13px;

  &.scroll {
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #bdbdbd !important;
      border-radius: 8px;
    }
  }
`;
const ChatCard = styled.div`
  position: relative;
  padding: 22px 0;
  border-bottom: 1px solid #828282;
  display: flex;
  gap: 17px;

  &.new-chat:after {
    position: absolute;
    right: 27px;
    bottom: 38.5px;
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: red;
  }
`;

const ProfileContainer = styled.div`
  width: 54px;
  position: relative;

  & .profile {
    position: absolute;
  }

  & :nth-child(2) {
    left: 17px;
  }
`;

const DetailChat = styled.div`
  & .detail-chat_users {
    max-width: 350px;
  }
`;

const ChatMeta = styled.div`
  display: flex;
  gap: 17px;
`;

const LastChat = styled.div`
  margin-top: 8px;

  & .lastchat_preview {
    width: 390px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default App;
