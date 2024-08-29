import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

import { Text } from "../Text";
import { IconButton } from "../IconButton";
import { ActionMenuButton, MenuType } from "../ActionMenuButton";
import { Info } from "../Info";
import { Tag } from "../Tag";

import { Colors } from "../../helpers/utils";
import { ChatItemType, DetailChatListType } from "../../helpers/types";
import { getDetailChat } from "../../helpers/api";

interface Props {
  onBack: () => void;
  chatId?: number;
}

const userMenu: MenuType<"EDIT" | "DELETE">[] = [
  {
    key: "EDIT",
    label: "Edit",
    color: "#2f80ed",
  },
  {
    key: "DELETE",
    label: "Delete",
    color: "#eb5757",
  },
];

const otherMenu: MenuType<"SHARE" | "REPLAY">[] = [
  {
    key: "SHARE",
    label: "Share",
    color: "#2f80ed",
  },
  {
    key: "REPLAY",
    label: "Replay",
    color: "#2f80ed",
  },
];

export const ChatDetail = ({ onBack, chatId }: Props) => {
  const tagRef = useRef<HTMLDivElement>(null);
  const replayRef = useRef<HTMLDivElement>(null);
  const chatContentRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<DetailChatListType | undefined>();
  const [loadInfo, setLoadInfo] = useState(false);
  const [selectedChat, setSelectedChat] = useState<ChatItemType | null>(null);

  const getData = useCallback(async (chatId: number) => {
    try {
      const data = await getDetailChat(chatId);
      setData(data);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const handleScroll = () => {
    if (chatContentRef.current && tagRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContentRef.current;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        tagRef.current.classList.add("hide");
      } else {
        tagRef.current.classList.remove("hide");
      }
    }
  };

  useEffect(() => {
    if (chatId) {
      getData(chatId);
    }
  }, [chatId]);

  useEffect(() => {
    if (chatContentRef.current && tagRef.current) {
      const { scrollHeight, clientHeight } = chatContentRef.current;
      if (clientHeight + 100 > scrollHeight) {
        tagRef.current.classList.add("hide");
      } else {
        tagRef.current.classList.remove("hide");
      }
    }
  }, [chatContentRef.current, tagRef.current]);

  useEffect(() => {
    if (data?.isSupport) {
      setLoadInfo(true);
    } else {
      return;
    }

    const timer = setTimeout(() => {
      setLoadInfo(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [data?.isSupport]);

  useEffect(() => {}, [replayRef.current]);

  return (
    <React.Fragment>
      <ChatHeader>
        <IconButton icon="back" onClick={onBack} />
        <Participant>
          <Text size="lg" weight="bold" color={Colors.primary.blue}>
            {data?.title}
          </Text>
          {data?.numberParticipant ? (
            <Text size="sm">{data.numberParticipant} Participants</Text>
          ) : null}
        </Participant>
        <IconButton icon="close" size="sm" />
      </ChatHeader>
      <ChatContent ref={chatContentRef} onScroll={handleScroll}>
        {data?.chats.map((item, i) => {
          return (
            <React.Fragment key={i}>
              {i !== 0 ? (
                <Divider
                  key={i}
                  data-label={item.date}
                  $color={item.isNew ? Colors.primary.red : undefined}
                />
              ) : null}
              {item.chat.map((chat, i) => (
                <ChatItem key={i} $isUser={chat.isUser}>
                  <Text size="md" color={chat.color} weight="bold">
                    {chat.sender}
                  </Text>
                  <ChatCard $isUser={chat.isUser}>
                    <div>
                      <ActionMenuButton
                        menus={chat.isUser ? userMenu : otherMenu}
                        placement={chat.isUser ? "bottomLeft" : "bottomRight"}
                        onClickMenu={(menu) => {
                          if (menu.key === "REPLAY") {
                            setSelectedChat(chat);
                            replayRef.current?.classList.add("show");
                          }

                          // prevent chat last chat to be hidden
                          if (replayRef.current) {
                            console.log(replayRef.current.clientHeight);
                            chatContentRef.current?.style.setProperty(
                              "padding-bottom",
                              replayRef.current?.clientHeight + 50 + "px",
                            );
                          }
                        }}
                      >
                        <IconButton icon="more" size="md" />
                      </ActionMenuButton>
                    </div>
                    <ChatText $bg={chat.background}>
                      <Text size="md">{chat.message}</Text>
                      <Text className="chat-text_time" size="sm">
                        {chat.time}
                      </Text>
                    </ChatText>
                  </ChatCard>
                </ChatItem>
              ))}
            </React.Fragment>
          );
        })}
      </ChatContent>
      <ChatFooter>
        <Tag ref={tagRef} className="chat_tag" color="blue">
          New Message
        </Tag>
        {loadInfo ? (
          <Info isLoading className="chat_info">
            Please wait while we connect you with one of our team ...
          </Info>
        ) : null}

        <ReplayContainer>
          <Replay ref={replayRef}>
            <Text weight="bold" style={{ marginBottom: "5px" }}>
              Replaying to {selectedChat?.sender}
            </Text>
            <Text>{selectedChat?.message}</Text>
            <IconButton
              icon="close"
              iconStyle={{ height: "12px", width: "12px" }}
              className="close_replay"
              onClick={() => {
                setSelectedChat(null);
                replayRef.current?.classList.remove("show");
                chatContentRef.current?.style.setProperty(
                  "padding-bottom",
                  "0",
                );
              }}
            />
          </Replay>
          <Input placeholder="Type a new message" />
        </ReplayContainer>
        <Button>
          <Text size="lg" weight="bold" color="#fff">
            Send
          </Text>
        </Button>
      </ChatFooter>
    </React.Fragment>
  );
};

const ChatHeader = styled.div`
  height: 73.5px;
  margin: -24px -32px 0;
  padding: 0 32px;

  display: flex;
  align-items: center;
  gap: 14px;

  border-bottom: 1px solid #bdbdbd;
`;

const Participant = styled.div`
  flex: 1;

  & > * {
    line-height: 100%;
  }

  & :first-child:not(:last-child) {
    margin-bottom: 9.36px;
  }
`;

const ChatContent = styled.div`
  margin-right: -21px;
  padding-right: 13px;
  padding-top: 12px;
  padding-bottom: "12px"

  position: relative;

  flex: 1;
  overflow-y: auto;
`;

const ChatItem = styled.div<{ $isUser: boolean }>`
  ${(props) => css`
    --align-items: ${props.$isUser ? "flex-end" : "flex-start"};
  `}
  margin-bottom: 8px;

  display: flex;
  flex-direction: column;
  align-items: var(--align-items);
  gap: 5px;
`;

const ChatCard = styled.div<{ $isUser: boolean }>`
  ${(props) => css`
    --flex-direction: ${props.$isUser ? "row" : "row-reverse"};
  `}
  min-width: 50%;
  display: flex;
  flex-direction: var(--flex-direction);
  justify-content: space-between;
`;

const ChatText = styled.div<{ $bg: string }>`
  max-width: 518px;
  padding: 10px;

  border-radius: 5px;
  background-color: ${(props) => props.$bg};

  & .chat-text_time {
    margin-top: 5px;
  }
`;

const Divider = styled.div<{ $color?: string }>`
  --color: ${(props) => props.$color || "#4F4F4F"};
  width: 100%;
  height: 1px;
  margin: 20px 0;

  background-color: var(--color);
  position: relative;

  &:before {
    padding: 0 20px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    content: attr(data-label);
    background-color: white;
    color: var(--color);
    font-weight: 700;
  }
`;

const ChatFooter = styled.div`
  position: relative;

  display: flex;
  gap: 13px;

  & .chat_tag {
    z-index: 999;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
  }

  & .chat_tag.hide {
    display: none;
  }

  & .chat_info {
    z-index: 999;
    position: absolute;
    top: -70px;
    left: 0;
    right: 0;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 10px 16px;

  border: 1px solid #828282;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  height: 100%;
  padding: 8px 16px;

  border: none;
  border-radius: 5px;

  background-color: #2f80ed;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

const ReplayContainer = styled.div`
  flex: 1;
  position: relative;
`;

const Replay = styled.div`
  max-height: 107px;
  padding: 15px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 47px;
  background-color: ${Colors.primary.light};
  z-index: 999;
  border-radius: 10px 10px 0 0;
  display: none;

  & .close_replay {
    position: absolute;
    top: 15px;
    right: 20px;
  }

  &.show {
    display: block;
  }
`;
