import { Popover } from "antd";
import { TooltipPlacement } from "antd/es/tooltip";
import styled from "styled-components";

import { FontWeight } from "../../helpers/types";
import { Colors } from "../../helpers/utils";

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
            <ActionItem
              key={item.key}
              $color={item.color || Colors.primary.grayDark}
              $weight={item.weight || "regular"}
              onClick={() => handleClickMenu(item)}
            >
              {item.label}
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

const ActionItem = styled.button<{ $color?: string; $weight: FontWeight }>`
  width: 100%;
  padding: 14px 18px;
  text-align: left;
  border: none;
  background-color: transparent;
  color: ${(props) => props.$color};
  cursor: pointer;
  font-weight: ${(props) => props.theme.fontWeight[props.$weight]};

  &:active {
    background: rgba(130, 130, 130, 0.1);
  }
`;
