export interface ChatItemType {
  isUser: boolean;
  sender: string;
  message: string;
  time: string;
  color: string;
  background: string;
}

export interface ChatListType {
  isNew?: boolean;
  date: string;
  chat: ChatItemType[];
}

export interface DetailChatListType {
  chatId: number;
  isSupport?: boolean;
  title: string;
  numberParticipant: number;
  hasNew?: boolean;
  chats: ChatListType[];
}

export interface PreviewChatListType {
  id: number;
  userCount: number;
  title: string;
  date: string;
  lastChat: {
    sender: string;
    message: string;
  };
  newChat: boolean;
  isSupport: boolean;
}
