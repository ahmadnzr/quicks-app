import React from "react";

import FeatherIcon from "../../assets/icons/feather.svg?react";
import ChattingIcon from "../../assets/icons/chatting.svg?react";
import TabIcon from "../../assets/icons/tabs.svg?react";
import SearchIcon from "../../assets/icons/search.svg?react";
import UserIcon from "../../assets/icons/user.svg?react";

export const listIcon = {
  feather: FeatherIcon,
  chat: ChattingIcon,
  task: TabIcon,
  search: SearchIcon,
  user: UserIcon,
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
