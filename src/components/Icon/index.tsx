import React from "react";

import FeatherIcon from "../../assets/icons/feather.svg?react";
import ChattingIcon from "../../assets/icons/chatting.svg?react";
import TabIcon from "../../assets/icons/tabs.svg?react";
import SearchIcon from "../../assets/icons/search.svg?react";
import UserIcon from "../../assets/icons/user.svg?react";
import BackIcon from "../../assets/icons/back.svg?react";
import CloseIcon from "../../assets/icons/close.svg?react";
import MoreIcon from "../../assets/icons/more.svg?react";
import Expand from "../../assets/icons/expand.svg?react";
import SchecduleIcon from "../../assets/icons/schedule.svg?react";
import PencilIcon from "../../assets/icons/pencil.svg?react";
import CalendarIcon from "../../assets/icons/calendar.svg?react";

export const listIcon = {
  feather: FeatherIcon,
  chat: ChattingIcon,
  task: TabIcon,
  search: SearchIcon,
  user: UserIcon,
  back: BackIcon,
  close: CloseIcon,
  more: MoreIcon,
  expand: Expand,
  schedule: SchecduleIcon,
  pencil: PencilIcon,
  calendar: CalendarIcon,
};

interface Props extends React.SVGAttributes<SVGElement> {
  name: keyof typeof listIcon;
  fill?: string;
  stroke?: string;
}

export const Icon = ({ name, ...other }: Props) => {
  const IconMap = listIcon[name];

  return <IconMap {...other} />;
};
