import { detailChats, previewChats, tasks } from "../data";
import { DetailChatListType, PreviewChatListType } from "../types";
import { TaskType } from "../types/task";

/*
 * Fake Request
 * */

export const getListPreviewChat = (): Promise<PreviewChatListType[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(previewChats);
    }, 500);
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

export const getTaskList = (): Promise<TaskType[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 500);
  });
