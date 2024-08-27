import styled from "styled-components";

export interface MenuType<T = object> {
  key: number;
  label: string;
  color?: string;
  data?: T;
}

export interface ActionMenuProps<T = object> {
  menus?: MenuType<T>[];
  onClickMenu: (menu: MenuType<T>) => void;
  className?: string;
}

export const ActionMenuButton = <T = object,>({
  onClickMenu,
  className,
  menus = [],
}: ActionMenuProps<T>) => {
  const handleClickMenu = (menu: MenuType<T>) => {
    onClickMenu(menu);
  };

  return (
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
    background: rgba(130, 130, 130, 0.05);
  }
`;
