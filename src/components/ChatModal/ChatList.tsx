import React from "react";
import styled from "styled-components";

import { SearchInput } from "../SearchInput";
import { Profile } from "../Profile";
import { Text } from "../Text";

import { Colors } from "../../helpers/utils";

interface Props {
  onClick: () => void;
}
export const ChatList = ({ onClick }: Props) => {
  return (
    <React.Fragment>
      <ChatHeader>
        <SearchInput />
      </ChatHeader>
      <ChatContent>
        <ChatCard className="new-chat" onClick={onClick}>
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
                Jeannette Moraime Chamba (Hutto I-589) [Hutto Follow Up - Brief
                Service]
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
      </ChatContent>
    </React.Fragment>
  );
};

const ChatHeader = styled.div``;

const ChatContent = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-right: -13px;
  padding-right: 13px;
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
