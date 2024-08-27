import { detailChats, previewChats } from "../data";
import { DetailChatListType, PreviewChatListType } from "../types";

/*
 * Fake Request
 * */

export const getListPreviewChat = (): Promise<PreviewChatListType[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(previewChats);
    }, 0);
  });

export const getDetailChat = (
  chatId: number,
): Promise<DetailChatListType | undefined> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const findData = detailChats.find((item) => item.chatId === chatId);
      resolve(findData);
    }, 0);
  });
