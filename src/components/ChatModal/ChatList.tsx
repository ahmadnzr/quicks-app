import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import LoadingIcon2 from "../../assets/loading2.png";

import { SearchInput } from "../SearchInput";
import { Profile } from "../Profile";
import { Text } from "../Text";
import { Rotate } from "../Styled";

import { Colors } from "../../helpers/utils";
import { PreviewChatListType } from "../../helpers/types";
import { getListPreviewChat } from "../../helpers/api";

interface Props {
  onClick: (chatId: number) => void;
}

export const ChatList = ({ onClick }: Props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PreviewChatListType[] | []>([]);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getListPreviewChat();
      setData(data);
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <ChatHeader>
        <SearchInput />
      </ChatHeader>
      <ChatContent>
        {!loading ? (
          <>
            {data.map((item) => (
              <ChatCard
                key={item?.id}
                onClick={() => onClick(item.id)}
                $isNewChat={Boolean(item?.newChat)}
                $borderBottom={!item.isSupport}
              >
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
                      {item?.title}
                    </Text>
                    <Text>{item?.date}</Text>
                  </ChatMeta>
                  <LastChat>
                    <Text weight="bold">{item?.lastChat.sender}</Text>
                    <Text className="lastchat_preview" size="sm">
                      {item?.lastChat.message}
                    </Text>
                  </LastChat>
                </DetailChat>
              </ChatCard>
            ))}
          </>
        ) : (
          <LoadingContainer>
            <img src={LoadingIcon2} alt="" className="loading" />
            <Text weight="bold">Loading Chats...</Text>
          </LoadingContainer>
        )}
      </ChatContent>
    </React.Fragment>
  );
};

const ChatHeader = styled.div``;

const ChatContent = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-right: -21px;
  padding-right: 13px;
  position: relative;
`;

const ChatCard = styled.div<{ $borderBottom?: boolean; $isNewChat?: boolean }>`
  position: relative;
  padding: 22px 0;
  border-bottom: ${({ $borderBottom = true }) =>
    $borderBottom ? "1px solid #828282" : "none"};
  display: flex;
  gap: 17px;

  ${(props) =>
    props.$isNewChat
      ? css`
          &:after {
            position: absolute;
            right: 27px;
            bottom: 38.5px;
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background: red;
          }
        `
      : css``}
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

  & .profile:only-child {
    left: 50%;
    transform: translateX(-50%);
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

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & .loading {
    animation: ${Rotate} 0.3s ease infinite;
  }
`;
