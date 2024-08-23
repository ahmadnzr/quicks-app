import React from "react";

import FeatherIcon from "../../assets/icons/feather.svg?react";
import ChattingIcon from "../../assets/icons/chatting.svg?react";

const listIcon = {
  feather: FeatherIcon,
  chatting: ChattingIcon,
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
