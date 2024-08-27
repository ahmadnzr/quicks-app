import { DetailChatListType, PreviewChatListType } from "../types";
import { Colors } from "../utils";

export const previewChats: PreviewChatListType[] = [
  {
    id: 1,
    userCount: 3,
    title: "109220-Naturalization",
    date: "01/01/2021 19:15",
    lastChat: {
      sender: "Cameron Philips",
      message: "Please check this out!",
    },
    newChat: true,
    isSupport: false,
  },
  {
    id: 2,
    userCount: 2,
    title:
      "Jeannette Moraime Chamba (Hutto I-589) [Hutto Follow Up - Brief Service]",
    date: "01/06/2021 10:45",
    lastChat: {
      sender: "Ellen",
      message: "Hey, please read.",
    },
    newChat: false,
    isSupport: false,
  },
  {
    id: 3,
    userCount: 2,
    title: "8405-Diana SALAZAR MUNGUNIA",
    date: "01/06/2021",
    lastChat: {
      sender: "Cameron Philips",
      message:
        "I understand your initial concerns and thats very valid, Elizabeth. But you can do this",
    },
    newChat: false,
    isSupport: false,
  },
  {
    id: 4,
    userCount: 1,
    title: "FastVisa Support",
    date: "01/06/2021",
    lastChat: {
      sender: "",
      message: "Hey there!, Welcome to your inbox.",
    },
    newChat: false,
    isSupport: true,
  },
];

export const detailChats: DetailChatListType[] = [
  {
    chatId: 1,
    isSupport: false,
    title: "I-589 AMARKHIL, Obaidullah [Affirmative Filing with ZHN]",
    numberParticipant: 3,
    hasNew: true,
    chats: [
      {
        date: "August 17, 2021",
        chat: [
          {
            isUser: true,
            sender: "You",
            message: "Hiii...",
            time: "19:32",
            color: Colors.indicator.purple.fg,
            background: Colors.indicator.purple.bg,
          },
          {
            isUser: true,
            sender: "You",
            message:
              "No worries. It will be completed ASAP. I’ve asked him yesterday.",
            time: "19:32",
            color: Colors.indicator.purple.fg,
            background: Colors.indicator.purple.bg,
          },
        ],
      },
      {
        date: "Today June 09, 2021",
        chat: [
          {
            isUser: false,
            sender: "Mary Hilda",
            message: "Hi Nizar",
            time: "19:32",
            color: Colors.indicator.orange.fg,
            background: Colors.indicator.orange.bg,
          },
          {
            isUser: false,
            sender: "Mary Hilda",
            message:
              "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
            time: "19:32",
            color: Colors.indicator.orange.fg,
            background: Colors.indicator.orange.bg,
          },
          {
            isUser: true,
            sender: "You",
            message:
              "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
            time: "19:40",
            color: Colors.indicator.purple.fg,
            background: Colors.indicator.purple.bg,
          },
          {
            isUser: false,
            sender: "Mary Hilda",
            message: "Sure thing. Claren",
            time: "19:43",
            color: Colors.indicator.orange.fg,
            background: Colors.indicator.orange.bg,
          },
        ],
      },
      {
        isNew: true,
        date: "New Message",
        chat: [
          {
            isUser: false,
            sender: "Obaidullah Amarkhil",
            message: "Morning. I’ll try to do them. Thanks",
            time: "20:00",
            color: Colors.indicator.green.fg,
            background: Colors.indicator.green.bg,
          },
        ],
      },
    ],
  },
  {
    chatId: 2,
    isSupport: false,
    title: "I-589 AMARKHIL, Obaidullah [Affirmative Filing with ZHN]",
    numberParticipant: 2,
    chats: [
      {
        date: "August 17, 2021",
        chat: [
          {
            isUser: true,
            sender: "You",
            message:
              "No worries. It will be completed ASAP. I’ve asked him yesterday.",
            time: "19:32",
            color: Colors.indicator.purple.fg,
            background: Colors.indicator.purple.bg,
          },
        ],
      },
      {
        date: "Today June 09, 2021",
        chat: [
          {
            isUser: false,
            sender: "Mary Hilda",
            message:
              "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
            time: "19:32",
            color: Colors.indicator.orange.fg,
            background: Colors.indicator.orange.bg,
          },
          {
            isUser: true,
            sender: "You",
            message:
              "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
            time: "19:40",
            color: Colors.indicator.purple.fg,
            background: Colors.indicator.purple.bg,
          },
          {
            isUser: false,
            sender: "Mary Hilda",
            message: "Sure thing. Claren",
            time: "19:43",
            color: Colors.indicator.orange.fg,
            background: Colors.indicator.orange.bg,
          },
        ],
      },
    ],
  },
  {
    chatId: 3,
    isSupport: false,
    title: "I-589 AMARKHIL, Obaidullah [Affirmative Filing with ZHN]",
    numberParticipant: 2,
    chats: [
      {
        date: "August 17, 2021",
        chat: [
          {
            isUser: true,
            sender: "You",
            message:
              "No worries. It will be completed ASAP. I’ve asked him yesterday.",
            time: "19:32",
            color: Colors.indicator.purple.fg,
            background: Colors.indicator.purple.bg,
          },
        ],
      },
    ],
  },
  {
    chatId: 4,
    title: "FastVisa Support",
    isSupport: true,
    numberParticipant: 0,
    chats: [
      {
        date: "August 17, 2021",
        chat: [
          {
            isUser: false,
            sender: "FastVisa Support",
            message:
              "Hey there. Welcome to your inbox! Contact us for more information and help about anything! We’ll send you a response as soon as possible.",
            time: "19:32",
            color: Colors.indicator.blue.fg,
            background: Colors.indicator.blue.bg,
          },
          {
            isUser: true,
            sender: "You",
            message: "Hi, I need help with something can you help me ?",
            time: "19:32",
            color: Colors.indicator.purple.fg,
            background: Colors.indicator.purple.bg,
          },
        ],
      },
    ],
  },
];
