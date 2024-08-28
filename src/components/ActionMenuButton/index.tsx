import { Popover } from "antd";
import { TooltipPlacement } from "antd/es/tooltip";
import styled from "styled-components";

import { FontWeight } from "../../helpers/types";
import { Text } from "../Text";

export interface MenuType {
  key: number;
  label: string;
  color?: string;
  weight?: FontWeight;
}

export interface ActionMenuProps {
  menus: MenuType[];
  onClickMenu: (menu: MenuType) => void;
  className?: string;
  customWidth?: string;
  placement?: TooltipPlacement;
  children?: React.ReactNode;
}

export const ActionMenuButton = ({
  children,
  onClickMenu,
  className,
  placement = "bottomLeft",
  menus = [],
  customWidth,
}: ActionMenuProps) => {
  const handleClickMenu = (menu: MenuType) => {
    onClickMenu(menu);
  };

  return (
    <Popover
      trigger="click"
      placement={placement}
      title=""
      arrow={false}
      content={
        <ActionMenuButtonStyled className={className} $width={customWidth}>
          {menus.map((item) => (
            <ActionItem key={item.key} onClick={() => handleClickMenu(item)}>
              <Text color={item.color} weight={item.weight}>
                {item.label}
              </Text>
            </ActionItem>
          ))}
        </ActionMenuButtonStyled>
      }
    >
      <div>{children}</div>
    </Popover>
  );
};

const ActionMenuButtonStyled = styled.div<{ $width?: string }>`
  width: ${({ $width = "126px" }) => $width};
  border: 1px solid #bdbdbd;
  background-color: #fff;
  border-radius: 5px;

  & :not(:last-child) {
    border-bottom: 1px solid #bdbdbd;
  }
`;

const ActionItem = styled.button`
  width: 100%;
  padding: 14px 18px;
  text-align: left;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:active {
    background: rgba(130, 130, 130, 0.1);
  }
`;
