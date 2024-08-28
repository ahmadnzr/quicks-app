import { Popover } from "antd";
import styled from "styled-components";

export interface MenuType {
  key: number;
  label: string;
  color?: string;
}

export interface ActionMenuProps {
  menus: MenuType[];
  onClickMenu: (menu: MenuType) => void;
  className?: string;
  children?: React.ReactNode;
}

export const ActionMenuButton = ({
  children,
  onClickMenu,
  className,
  menus = [],
}: ActionMenuProps) => {
  const handleClickMenu = (menu: MenuType) => {
    onClickMenu(menu);
  };

  return (
    <Popover
      trigger="click"
      placement="bottomLeft"
      title=""
      arrow={false}
      content={
        <ActionMenuButtonStyled className={className}>
          {menus.map((item) => (
            <ActionItem
              key={item.key}
              $color={item.color}
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

const ActionMenuButtonStyled = styled.div`
  width: 126px;
  border: 1px solid #bdbdbd;
  background-color: #fff;
  border-radius: 5px;

  & :not(:last-child) {
    border-bottom: 1px solid #bdbdbd;
  }
`;

const ActionItem = styled.button<{ $color?: string }>`
  width: 100%;
  padding: 14px 18px;
  text-align: left;
  border: none;
  background-color: transparent;
  color: ${(props) => props.$color};
  cursor: pointer;

  &:active {
    background: rgba(130, 130, 130, 0.1);
  }
`;
