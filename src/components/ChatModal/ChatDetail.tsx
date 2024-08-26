import React from "react";
import styled, { css } from "styled-components";

import { Text } from "../Text";
import { IconButton } from "../IconButton";

import { Colors } from "../../helpers/utils";

interface Props {
  onBack: () => void;
}

export const ChatDetail = ({ onBack }: Props) => {
  return (
    <React.Fragment>
      <ChatHeader>
        <IconButton icon="back" onClick={onBack} />
        <Participant>
          <Text size="lg" weight="bold" color={Colors.primary.blue}>
            I-589 AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
          </Text>
          <Text size="sm">3 Participants</Text>
        </Participant>
        <IconButton icon="close" size="sm" />
      </ChatHeader>
      <ChatContent>
        <ChatItem $isUser>
          <Text size="md" color="#9B51E0" weight="bold">
            You
          </Text>
          <ChatCard $isUser>
            <IconButton icon="more" size="md" />
            <ChatText $bg="#EEDCFF">
              <Text size="md">
                No worries. It will be completed ASAP. I've asked him yesterday.
              </Text>
              <Text className="chat-text_time" size="sm">
                19:32
              </Text>
            </ChatText>
          </ChatCard>
        </ChatItem>
        <Divider data-label="Today June 09, 2021" />
        <ChatItem $isUser={false}>
          <Text size="md" color="#E5A443" weight="bold">
            Mary Hilda
          </Text>
          <ChatCard $isUser={false}>
            <IconButton icon="more" size="md" />
            <ChatText $bg="#FCEED3">
              <Text size="md">
                Hello Obaidullah, I will be your case advisor for case #029290.
                I have assigned some homework for you to fill. Please keep up
                with the due dates. Should you have any questions, you can
                message me anytime. Thanks.
              </Text>
              <Text className="chat-text_time" size="sm">
                19:32
              </Text>
            </ChatText>
          </ChatCard>
        </ChatItem>
        <ChatItem $isUser>
          <Text size="md" color="#9B51E0" weight="bold">
            You
          </Text>
          <ChatCard $isUser>
            <IconButton icon="more" size="md" />
            <ChatText $bg="#EEDCFF">
              <Text size="md">
                Please contact Mary for questions regarding the case bcs she
                will be managing your forms from now on! Thanks Mary.
              </Text>
              <Text className="chat-text_time" size="sm">
                19:32
              </Text>
            </ChatText>
          </ChatCard>
        </ChatItem>
        <ChatItem $isUser={false}>
          <Text size="md" color="#E5A443" weight="bold">
            Mary Hilda
          </Text>
          <ChatCard $isUser={false}>
            <IconButton icon="more" size="md" />
            <ChatText $bg="#FCEED3">
              <Text size="md">Sure thing. Claren</Text>
              <Text className="chat-text_time" size="sm">
                19:32
              </Text>
            </ChatText>
          </ChatCard>
        </ChatItem>
        <Divider data-label="New Message" $color="#EB5757" />
        <ChatItem $isUser={false}>
          <Text size="md" color="#43B78D" weight="bold">
            Obaidullah Amarkhil
          </Text>
          <ChatCard $isUser={false}>
            <IconButton icon="more" size="md" />
            <ChatText $bg="#D2F2EA">
              <Text size="md">Morning. I’ll try to do them. Thanks</Text>
              <Text className="chat-text_time" size="sm">
                19:32
              </Text>
            </ChatText>
          </ChatCard>
        </ChatItem>
      </ChatContent>
      <ChatFooter>
        <Input placeholder="Type a new message" />
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

  & :first-child {
    margin-bottom: 9.36px;
  }
`;

const ChatContent = styled.div`
  margin-right: -13px;
  padding-right: 13px;
  padding-top: 12px;
  padding-bottom: 12px;

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
  height: 40px;

  display: flex;
  gap: 13px;
`;
const Input = styled.input`
  padding: 10px 16px;

  flex: 1;

  border: 1px solid #828282;
  border-radius: 5px;
  outline: none;
`;
const Button = styled.button`
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
